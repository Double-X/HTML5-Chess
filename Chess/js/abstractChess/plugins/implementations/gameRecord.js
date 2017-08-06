// This's an Abstract Chess plugin and must be put in the implementations folder

/** The implementation of the gameRecord plugin
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 5
 * Number of functions: 18
 * Number of variables: 2
 * @author DoubleX
 * @param {object} configuration - The plugin configuration container
 * @param {object} hook - The implementation container as the hook for plugins
 * @param {object} domAPI - The dom.api as a dependency
 * @param {object} currentSideHook - The currentSide.hook as a dependency
 * @param {object} timerHook - The plugins.timer.hook as a dependency
 * @since v1.0
 * @version v1.0
 */
(function(configuration, hook, domAPI, currentSideHook, timerHook) {

    'use strict';

    // The id of the dom to host the record list at the left of the chessboard
    hook.CHESSBOARD_LEFT_DOM_ID = 'chessboardLeftCenterPlacer';
    //
    // The id of the dom to host the record list at the right of the chessboard
    hook.CHESSBOARD_RIGHT_DOM_ID = 'chessboardRightCenterPlacer';
    //
    hook.FORMATTED_COORDINATES = []; // Dummy list to be replaced by real ones
    // The movement record list id suffix for both sides
    hook.RECORD_LIST_ID_SUFFIX = '_Record_List';
    //
    // Marks all sides needing movement records
    hook.SIDES = {
        startingSide: currentSideHook._currentSide(),
        followingSide: currentSideHook.oppositeSide()
    };
    //

    // The mapping from the side to their last movement record data list indices
    hook._lastLecordListIndices = {};
    //
    // The mapping from the side to their movement record data lists
    hook._recordLists = {};
    //

    /**
     * Records the current move of the specified piece with specified locations
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} pieceId - The id of the piece to have its move
     *                                    recorded
     * @param {object/NonNull} oldLocation - The piece old location
     * @param {object/NonNull} newLocation - The piece new location
     * @since v1.0
     * @version v1.0
     */
    hook.recordCurrentMove = function(pieceId, oldLocation, newLocation) {
        if (!configuration.IS_ACTIVE) {
            return hook._updateLastRecordListIndices(side);
        }
        hook._recordCurrentMove(pieceId, oldLocation, newLocation);
        var side = domAPI.side(pieceId);
        if (configuration.RECORD_TIME.end) hook._recordCurrentMoveTime(side);
        hook._onRecordCurrentMove(side);
    };

    /**
     * Records the starting time of the current turn of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} side - The side with its timer to be resumed
     * @since v1.0
     * @version v1.0
     */
    hook.recordCurrentTurnStartingTime = function(side) {
        if (!configuration.IS_ACTIVE) return;
        if (!configuration.RECORD_TIME.start) return;
        hook._recordCurrentTurnStartingTime(side);
    };

    /**
     * Records the current move of the specified piece with specified locations
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} pieceId - The id of the piece to have its move
     *                                    recorded
     * @param {object/NonNull} oldLocation - The piece old location
     * @param {object/NonNull} newLocation - The piece new location
     * @since v1.0
     * @version v1.0
     */
    hook._recordCurrentMove = function(pieceId, oldLocation, newLocation) {
        var side = domAPI.side(pieceId), recordList = hook._recordLists[side];
        var index = hook._lastLecordListIndices[side];
        var formattedCurrentMoveFunc = hook._formattedCurrentMoveFunc(pieceId);
        var rec = formattedCurrentMoveFunc(pieceId, oldLocation, newLocation);
        rec = hook._formattedTurnNum(side) + rec;
        recordList[index] ? recordList[index] += rec : recordList[index] = rec;
    };

    /**
     * Returns a function returning the formatted current movement record
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string/NonNull} pieceId - The id of the piece to have its move
     *                                    recorded
     * @return {function/NonNull} The requested function
     * @since v1.0
     * @version v1.0
     */
    hook._formattedCurrentMoveFunc = function(pieceId) {
        throw new Error("plugins.gameRecord.hook._formattedCurrentMoveFunc isn't implemented!");
    };

    /**
     * Returns the formatted text indicating the number of turns of a movement
     * Functional cohesion/Data coupling/Nullipotent
     * @author DoubleX
     * @param {string/NonNull} side - The side with its current movement to be
     *                                 recorded
     * @return {string/NonNull} The formatted movement turn number of the
     *                          specified side
     * @since v1.0
     * @version v1.0
     */
    hook._formattedTurnNum = function(side) {
        return (hook._lastLecordListIndices[side] + 1).toString() + ': ';
    };

    /**
     * Records the time of the current move of the specified side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} side - The side with its current movement to be
     *                                 recorded
     * @since v1.0
     * @version v1.0
     */
    hook._recordCurrentMoveTime = function(side) {
        var recordList = hook._recordLists[side];
        var index = hook._lastLecordListIndices[side];
        var counter = timerHook._timerCounters[side];
        recordList[index] += timerHook._formattedTimerCounter(side, counter);
    };

    /**
     * Be the hook to be triggered right after recording the specified side move
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} side - The side with its current movement just
     *                                 recorded
     * @since v1.0
     * @version v1.0
     */
    hook._onRecordCurrentMove = function(side) {
        // This ordering must be kept or the wrong turn number will be shown
        hook._showCurrentMove(side);
        hook._updateLastRecordListIndices(side);
        //
    };

    /**
     * Shows the recorded current movement of the specified side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} side - The side with its current time to be
     *                                 recorded
     * @since v1.0
     * @version v1.0
     */
    hook._showCurrentMove = function(side) {
        var recordListDom = domAPI.dom(hook._recordListDomId(side));
        var record = hook._recordLists[side][hook._lastLecordListIndices[side]];
        // hook._recordListSideDom just happens to be useful in this case
        recordListDom.appendChild(hook._newLineDom());
        recordListDom.appendChild(hook._recordListSideDom(record));
        //
    };

    /**
     * Creates a dom functioning as creating a new line
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @return {dom/NonNull} The new line like dom
     * @since v1.0
     * @version v1.0
     */
    hook._newLineDom = function() { return document.createElement('br'); };

    /**
     * Updates the last index of the movement record list of the specified side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} side - The side with its current time to be
     *                                 recorded
     * @since v1.0
     * @version v1.0
     */
    hook._updateLastRecordListIndices = function(side) {
        hook._lastLecordListIndices[side] += 1;
    };

    /**
     * Records the starting time of the current turn of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} side - The side with its timer to be resumed
     * @since v1.0
     * @version v1.0
     */
    hook._recordCurrentTurnStartingTime = function(side) {
        var recordList = hook._recordLists[side];
        var index = hook._lastLecordListIndices[side];
        var counter = timerHook._timerCounters[side];
        recordList[index] = timerHook._formattedTimerCounter(side, counter);
    };

    /**
     * Creates a dom for the list for recording moves of the specified side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side with its record list being initialized
     * @return {dom/NonNull} The side movement record list dom
     * @since v1.0
     * @version v1.0
     */
    hook._recordListDom = function(side) {
        var recordListDom = document.createElement('div');
        recordListDom.id = hook._recordListDomId(side);
        recordListDom.appendChild(hook._recordListSideDom(side));
        return recordListDom;
    };

    /**
     * Returns the id of the dom for the record list of the specified side
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string} side - The side with its record list being initialized
     * @return {string} The side record list dom id
     * @since v1.0
     * @version v1.0
     */
    hook._recordListDomId = function(side) {
        return side + hook.RECORD_LIST_ID_SUFFIX;
    };

    /**
     * Creates a dom showing the side of the list for recording moves
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side with its list side dom being initialized
     * @return {dom/NonNull} The side description dom
     * @since v1.0
     * @version v1.0
     */
    hook._recordListSideDom = function(side) {
        var recordListSideDom = document.createElement('text');
        recordListSideDom.textContent = side;
        recordListSideDom.contentEditable = false;
        return recordListSideDom;
    };

    /**
     * Creates the doms representing the movement record lists for all sides
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    hook._createRecordListDoms = function() {
        var startingSideRecords = hook._recordListDom(hook.SIDES.startingSide);
        var followSideRecords = hook._recordListDom(hook.SIDES.followingSide);
        var chessboardLeftDom = domAPI.dom(hook.CHESSBOARD_LEFT_DOM_ID);
        var chessboardRightDom = domAPI.dom(hook.CHESSBOARD_RIGHT_DOM_ID);
        chessboardLeftDom.innerHTML = chessboardRightDom.innerHTML = '';
        chessboardLeftDom.appendChild(startingSideRecords);
        chessboardRightDom.appendChild(followSideRecords);
    };

    /**
     * Initializes the movement record lists for all sides
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    hook._initRecordLists = function() {
        Object.keys(hook.SIDES).forEach(hook._initMovementRecordList);
        hook.recordCurrentTurnStartingTime(hook.SIDES.startingSide);
    };

    /**
     * Initializes the movement record list of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its record list being initialized
     * @since v1.0
     * @version v1.0
     */
    hook._initMovementRecordList = function(side) {
        hook._lastLecordListIndices[hook.SIDES[side]] = 0;
        hook._recordLists[hook.SIDES[side]] = [];
    };

    /**
     * Creates the initialized movement record lists for all sides
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    hook._createRecordLists = function() {
        hook._createRecordListDoms();
        hook._initRecordLists();
    };

    // Declares all functions to be run upon starting the game
    chess.pluginSetupCodes.abstractChess.gameRecord = [hook._createRecordLists];
    //

})(chess.plugins.abstractChess.gameRecord.configuration, 
        chess.plugins.abstractChess.gameRecord.hook, chess.dom.api, 
        chess.currentSide.hook, chess.plugins.abstractChess.timer.hook);

// The container for all the original linked functions being extended
chess.plugins.abstractChess.gameRecord.movable = { hook: {} };
//

/** The extensions of all existing functions needed by this plugin
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 0
 * Number of functions: 1
 * Number of variables: 0
 * @author DoubleX
 * @param {object/NonNull} api - The plugin api container as the interface
 * @param {object/NonNull} coordinatesAPI - The coordinates.api as a dependency
 * @param {object/NonNull} currentSideHook - The currentSide.hook as a
 *                                            dependency
 * @param {object/NonNull} movableHook - The movable.hook as a linkage
 * @param {object/NonNull} originalMovableHook - The container of the original
 *                                                hook
 * @since v1.0
 * @version v1.0
 */
(function(api, coordinatesAPI, currentSideHook, movableHook, 
originalMovableHook) {

    'use strict';

    /**
     * Moves the specified movable dom to the specified destination dom
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    originalMovableHook._move = movableHook._move;
    movableHook._move = function(movableId, destinationId) {
        // Added to record the current move of the specified movable
        var curLocation = coordinatesAPI.coordinates(movableId);
        var destination = coordinatesAPI.coordinates(destinationId);
        api.recordCurrentMove(movableId, curLocation, destination);
        //
        originalMovableHook._move(movableId, destinationId);
        // Added to record the starting time of the next turn
        api.recordCurrentTurnStartingTime(currentSideHook._currentSide());
        //
    };

})(chess.plugins.abstractChess.gameRecord.api, chess.coordinates.api, 
        chess.currentSide.hook, chess.movable.hook, 
        chess.plugins.abstractChess.gameRecord.movable.hook);