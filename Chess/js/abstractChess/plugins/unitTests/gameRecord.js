// This's a Abstract Chess plugin and must be put in the unitTests folder

// Marks whether this unit test suite's active
chess.unitTestSwitches.plugins.abstractChess.gameRecord = false;
//

/** The gameRecord plugin implementation unit test suite
 * Functional cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 0
 * @author DoubleX
 * @param {object} configuration - The plugin configuration container
 * @param {object} hook - The implementation container to be unit tested
 * @param {object} unitTestSwitches - The switch setting the unit test status
 * @param {object} unitTest - The unit test container extending the hook
 * @since v1.0
 * @version v1.0
 */
(function(configuration, hook, unitTestSwitches, unitTest) {

    'use strict';

    /**
     * Checks if the unit tests should be run
     * Functional cohesion/Message coupling/No side effects
     * @author DoubleX
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isActive = function() {
        return configuration.IS_ACTIVE && unitTestSwitches.gameRecord;
    };

    /**
     * Records the current move of the specified piece with specified locations
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its move recorded
     * @param {object} oldLocation - The piece old location
     * @param {object} newLocation - The piece new location
     * @since v1.0
     * @version v1.0
     */
    unitTest.recordCurrentMove = hook.recordCurrentMove;
    hook.recordCurrentMove = function(pieceId, oldLocation, newLocation) {
        if (unitTest._isActive()) {
            unitTest.hook.recordCurrentMove(pieceId, oldLocation, newLocation);
        }
        unitTest.recordCurrentMove(pieceId, oldLocation, newLocation);
    };

    /**
     * Records the starting time of the current turn of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its current time to be recorded
     * @since v1.0
     * @version v1.0
     */
    unitTest.recordCurrentTurnStartingTime = hook.recordCurrentTurnStartingTime;
    hook.recordCurrentTurnStartingTime = function(side) {
        if (unitTest._isActive()) {
            unitTest.hook.recordCurrentTurnStartingTime(side);
        }
        unitTest.recordCurrentTurnStartingTime(side);
    };

    /**
     * Records the current move of the specified piece with specified locations
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its move recorded
     * @param {object} oldLocation - The piece old location
     * @param {object} newLocation - The piece new location
     * @since v1.0
     * @version v1.0
     */
    unitTest._recordCurrentMove = hook._recordCurrentMove;
    hook._recordCurrentMove = function(pieceId, oldLocation, newLocation) {
        if (unitTest._isActive()) {
            unitTest.hook._recordCurrentMove(pieceId, oldLocation, newLocation);
        }
        unitTest._recordCurrentMove(pieceId, oldLocation, newLocation);
    };

    /**
     * Returns the formatted text indicating the number of turns of a movement
     * Functional cohesion/Data coupling/Nullipotent
     * @author DoubleX
     * @param {string} side - The side with its current movement to be recorded
     * @return {string} The formatted movement turn number of the specified side
     * @since v1.0
     * @version v1.0
     */
    unitTest._formattedTurnNum = hook._formattedTurnNum;
    hook._formattedTurnNum = function(side) {
        if (unitTest._isActive()) unitTest.hook._formattedTurnNum(side);
        return unitTest._formattedTurnNum(side);
    };

    /**
     * Records the time of the current move of the specified side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side with its current movement to be recorded
     * @since v1.0
     * @version v1.0
     */
    unitTest._recordCurrentMoveTime = hook._recordCurrentMoveTime;
    hook._recordCurrentMoveTime = function(side) {
        if (unitTest._isActive()) unitTest.hook._recordCurrentMoveTime(side);
        unitTest._recordCurrentMoveTime(side);
    };

    /**
     * Be the hook to be triggered right after recording the specified side move
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side with its current movement just recorded
     * @since v1.0
     * @version v1.0
     */
    unitTest._onRecordCurrentMove = hook._onRecordCurrentMove;
    hook._onRecordCurrentMove = function(side) {
        if (unitTest._isActive()) unitTest.hook._onRecordCurrentMove(side);
        unitTest._onRecordCurrentMove(side);
    };

    /**
     * Shows the recorded current movement of the specified side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side with its current time to be recorded
     * @since v1.0
     * @version v1.0
     */
    unitTest._showCurrentMove = hook._showCurrentMove;
    hook._showCurrentMove = function(side) {
        if (unitTest._isActive()) unitTest.hook._showCurrentMove(side);
        unitTest._showCurrentMove(side);
    };

    /**
     * Creates a dom functioning as creating a new line
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @return {dom} The new line like dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._newLineDom = hook._newLineDom;
    hook._newLineDom = function() {
        if (unitTest._isActive()) unitTest.hook._newLineDom();
        return unitTest._newLineDom();
    };

    /**
     * Updates the last index of the movement record list of the specified side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side with its current time to be recorded
     * @since v1.0
     * @version v1.0
     */
    unitTest._updateLastRecordListIndices = hook._updateLastRecordListIndices;
    hook._updateLastRecordListIndices = function(side) {
        if (unitTest._isActive()) {
            unitTest.hook._updateLastRecordListIndices(side);
        }
        unitTest._updateLastRecordListIndices(side);
    };

    /**
     * Records the starting time of the current turn of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its current time to be recorded
     * @since v1.0
     * @version v1.0
     */
    unitTest._recordCurrentTurnStartingTime = hook._recordCurrentTurnStartingTime;
    hook._recordCurrentTurnStartingTime = function(side) {
        if (unitTest._isActive()) {
            unitTest.hook._recordCurrentTurnStartingTime(side);
        }
        unitTest._recordCurrentTurnStartingTime(side);
    };

    /**
     * Creates a dom for the list for recording moves of the specified side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side with its record list being initialized
     * @return {dom} The side movement record list dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._recordListDom = hook._recordListDom;
    hook._recordListDom = function(side) {
        if (unitTest._isActive()) unitTest.hook._recordListDom(side);
        return unitTest._recordListDom(side);
    };

    /**
     * Returns the id of the dom for the record list of the specified side
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} side - The side with its record list being initialized
     * @return {string} The side record list dom id
     * @since v1.0
     * @version v1.0
     */
    unitTest._recordListDomId = hook._recordListDomId;
    hook._recordListDomId = function(side) {
        if (unitTest._isActive()) unitTest.hook._recordListDomId(side);
        return unitTest._recordListDomId(side);
    };

    /**
     * Creates a dom showing the side of the list for recording moves
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side with its list side dom being initialized
     * @return {dom} The side description dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._recordListSideDom = hook._recordListSideDom;
    hook._recordListSideDom = function(side) {
        if (unitTest._isActive()) unitTest.hook._recordListSideDom(side);
        return unitTest._recordListSideDom(side);
    };

    /**
     * Creates the doms representing the movement record lists for all sides
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest._createRecordListDoms = hook._createRecordListDoms;
    hook._createRecordListDoms = function() {
        if (unitTest._isActive()) unitTest.hook._createRecordListDoms();
        unitTest._createRecordListDoms();
    };

    /**
     * Initializes the movement record lists for all sides
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest._initRecordLists = hook._initRecordLists;
    hook._initRecordLists = function() {
        if (unitTest._isActive()) unitTest.hook._initRecordLists();
        unitTest._initRecordLists();
    };

    /**
     * Initializes the movement record list of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its record list being initialized
     * @since v1.0
     * @version v1.0
     */
    unitTest._initMovementRecordList = hook._initMovementRecordList;
    hook._initMovementRecordList = function(side) {
        if (unitTest._isActive()) unitTest.hook._initMovementRecordList(side);
        unitTest._initMovementRecordList(side);
    };

    /**
     * Creates the initialized movement record lists for all sides
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest._createRecordLists = hook._createRecordLists;
    hook._createRecordLists = function() {
        if (unitTest._isActive()) unitTest.hook._createRecordLists();
        unitTest._createRecordLists();
    };

    /**
     * Tests the recordCurrentMove function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its move recorded
     * @param {object} oldLocation - The piece old location
     * @param {object} newLocation - The piece new location
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.recordCurrentMove = function(pieceId, oldLocation, newLocation) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.gameRecord.unitTest.hook.recordCurrentMove');
        console.log('pieceId: ' + pieceId);
        console.log('oldLocation: ' + oldLocation);
        console.log('newLocation: ' + newLocation);
        //
    };

    /**
     * Tests the recordCurrentTurnStartingTime function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its current time to be recorded
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.recordCurrentTurnStartingTime = function(side) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.gameRecord.unitTest.hook.recordCurrentTurnStartingTime side: ' + side);
        //
    };

    /**
     * Tests the _recordCurrentMove function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its move recorded
     * @param {object} oldLocation - The piece old location
     * @param {object} newLocation - The piece new location
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._recordCurrentMove = function(pieceId, oldLocation, newLocation) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.gameRecord.unitTest.hook._recordCurrentMove');
        console.log('pieceId: ' + pieceId);
        console.log('oldLocation: ' + oldLocation);
        console.log('newLocation: ' + newLocation);
        //
    };

    /**
     * Tests the _formattedTurnNum function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its current movement to be recorded
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._formattedTurnNum = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.gameRecord.unitTest.hook._formattedTurnNum');
        console.log('side: ' + side);
        console.log('formattedTurnNum: ' + unitTest._formattedTurnNum(side));
        //
    };

    /**
     * Tests the _recordCurrentMoveTime function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its current movement to be recorded
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._recordCurrentMoveTime = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.gameRecord.unitTest.hook._recordCurrentMoveTime side: ' + side);
        //
    };

    /**
     * Tests the _onRecordCurrentMove function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its current movement just recorded
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._onRecordCurrentMove = function(side) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.gameRecord.unitTest.hook._onRecordCurrentMove side: ' + side);
        //
    };

    /**
     * Tests the _showCurrentMove function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its current time to be recorded
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._showCurrentMove = function(side) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.gameRecord.unitTest.hook._showCurrentMove side: ' + side);
        //
    };

    /**
     * Tests the _newLineDom function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._newLineDom = function() {
        // The function's too trivial to be unit tested
        console.log('plugins.gameRecord.unitTest.hook._newLineDom');
        //
    };

    /**
     * Tests the _updateLastRecordListIndices function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its current time to be recorded
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._updateLastRecordListIndices = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.gameRecord.unitTest.hook._updateLastRecordListIndices side: ' + side);
        //
    };

    /**
     * Tests the _recordCurrentTurnStartingTime function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its current time to be recorded
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._recordCurrentTurnStartingTime = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.gameRecord.unitTest.hook._recordCurrentTurnStartingTime side: ' + side);
        //
    };

    /**
     * Tests the _recordListDom function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its record list being initialized
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._recordListDom = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.gameRecord.unitTest.hook._recordListDom side: ' + side);
        //
    };

    /**
     * Tests the _recordListDomId function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its record list being initialized
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._recordListDomId = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.gameRecord.unitTest.hook._recordListDomId');
        console.log('side: ' + side);
        console.log('recordListDomId: ' + unitTest._recordListDomId(side));
        //
    };

    /**
     * Tests the _recordListSideDom function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its list side dom being initialized
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._recordListSideDom = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.gameRecord.unitTest.hook._recordListSideDom side: ' + side);
        //
    };

    /**
     * Tests the _createRecordListDoms function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._createRecordListDoms = function() {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.gameRecord.unitTest.hook._createRecordListDoms');
        //
    };

    /**
     * Tests the _initRecordLists function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._initRecordLists = function() {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.gameRecord.unitTest.hook._initRecordLists');
        //
    };

    /**
     * Tests the _initMovementRecordList function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its record list being initialized
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._initMovementRecordList = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.gameRecord.unitTest.hook._initMovementRecordList side: ' + side);
        //
    };

    /**
     * Tests the _createRecordLists function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._createRecordLists = function() {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.gameRecord.unitTest.hook._createRecordLists');
        //
    };

})(chess.plugins.abstractChess.gameRecord.configuration, 
        chess.plugins.abstractChess.gameRecord.hook, 
        chess.unitTestSwitches.plugins.abstractChess, 
        chess.plugins.abstractChess.gameRecord.unitTest);