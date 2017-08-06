// This's an Chess plugin and must be put in the implementations folder

/** The implementation of the gameRecord plugin
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 3
 * Number of functions: 8
 * Number of variables: 2
 * @author DoubleX
 * @param {object} hook - The implementation container as the hook for plugins
 * @param {object} domHook - The dom.hook as a dependency
 * @param {object} specialMoveRecordsHook - The needed specialMoveRecords.hook
 * @since v1.0
 * @version v1.0
 */
(function(hook, domHook, specialMoveRecordsHook) {

    'use strict';

    // Marks the movement record showing the Castling
    hook.CASTLING_RECORD = {
        1: '0-0-0',
        2: '0-0'
    };
    //
    // Marks the list of formatted coordinates used in recording piece movements
    hook.FORMATTED_COORDINATES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    //
    // Marks the move record suffix showing the new type of the promoted piece
    hook.PROMOTION_SUFFIX = {
        Queen: 'Q',
        Rook: 'R',
        Bishop: 'B',
        Horse: 'K' // As Horse should be replaced by Knight instead
    };
    //

    hook._isCastling = false; // Marks whether the current move's castling
    // Marks the original move record before adding the promoted type
    hook._moveRecord = '';
    //

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
    var recordCurrentMove = hook.recordCurrentMove;
    hook.recordCurrentMove = function(pieceId, oldLocation, newLocation) {
        if (hook._isCastling) return hook._isCastling = false;
        // There's no reason to use the abstract one when there's a concrete one
        recordCurrentMove(pieceId, oldLocation, newLocation);
        //
    };

    /**
     * Records the current promotion of the specified side and new type
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side of the promotable to be reocrded
     * @param {string} newType - The new type of the promotable to be reocrded
     * @since v1.0
     * @version v1.0
     */
    hook.recordPromotion = function(side, newType) {
        hook._removeLastMoveRecord(side);
        hook._addPromotionMoveRecord(side, newType);
    };

    /**
     * Returns a function returning the formatted current movement record
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its move recorded
     * @return {function} The requested function
     * @since v1.0
     * @version v1.0
     */
    hook._formattedCurrentMoveFunc = function(pieceId) {
        return hook._formattedCurrentMove;
    };

    /**
     * Returns the formatted record of the current move by the specified piece
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its move recorded
     * @param {object} oldLocation - The piece old location
     * @param {object} newLocation - The piece new location
     * @return {string} The formatted piece movement record
     * @since v1.0
     * @version v1.0
     */
    hook._formattedCurrentMove = function(pieceId, oldLocation, 
    newLocation) {
        if (specialMoveRecordsHook._isUseCastling()) {
            hook._isCastling = true; // Otherwise a duplicate record will appear
            return hook._formattedCastlingMove();
        }
        hook._moveRecord = hook._formattedNormalMove(oldLocation, newLocation);
        return hook._moveRecord;
        //
    };

    /**
     * Returns the formatted record of the specified castling
     * Functional cohesion/Message coupling/Referentially transparent
     * @author DoubleX
     * @return {string} The formatted piece movement record
     * @since v1.0
     * @version v1.0
     */
    hook._formattedCastlingMove = function() {
        var castlableId = specialMoveRecordsHook._castlingIdCoor.castlableId;
        return hook.CASTLING_RECORD[domHook._idPart(castlableId, 2)];
    };

    /**
     * Returns the formatted record of the move with the specified locations
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} oldLocation - The piece old location
     * @param {object} newLocation - The piece new location
     * @return {string} The formatted piece movement record
     * @since v1.0
     * @version v1.0
     */
    hook._formattedNormalMove = function(oldLocation, newLocation) {
        var oldX = hook.FORMATTED_COORDINATES[oldLocation.x - 1];
        var newX = hook.FORMATTED_COORDINATES[newLocation.x - 1];
        var oldY = oldLocation.y.toString(), newY = newLocation.y.toString();
        return oldX + oldY + newX + newY;
    };

    /**
     * Removes the last movement record of the specified side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side of the promotable to be reocrded
     * @since v1.0
     * @version v1.0
     */
    hook._removeLastMoveRecord = function(side) {
        var recordListDom = domHook.dom(hook._recordListDomId(side));
        // A move record's always preceded by its corresponding new line dom
        recordListDom.removeChild(recordListDom.lastChild);
        recordListDom.removeChild(recordListDom.lastChild);
        //
    };

    /**
     * Adds the promotion movement record with the specified side and new type
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side of the promotable to be reocrded
     * @param {string} newType - The new type of the promotable to be reocrded
     * @since v1.0
     * @version v1.0
     */
    hook._addPromotionMoveRecord = function(side, newType) {
        var lastRecordListIndex = hook._lastLecordListIndices[side];
        // The last index's updated right after showing the original record
        var record = hook._recordLists[side][lastRecordListIndex - 1];
        //
        var oldMoveRecord = hook._moveRecord;
        hook._moveRecord = oldMoveRecord + hook.PROMOTION_SUFFIX[newType];
        var newRecord = record.replace(oldMoveRecord, hook._moveRecord);
        // The last index's updated right after showing the original record
        hook._recordLists[side][lastRecordListIndex] = newRecord;
        //
        hook._showCurrentMove(side);
    };

})(chess.plugins.abstractChess.gameRecord.hook, chess.dom.hook, 
        chess.specialMoveRecords.hook);

// The container for all the original linked functions being extended
chess.plugins.abstractChess.gameRecord.promotable = { hook: {} };
//

/** The extensions of all existing functions needed by this plugin
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 0
 * Number of functions: 1
 * Number of variables: 0
 * @author DoubleX
 * @param {object} api - The plugin api container as the interface
 * @param {object} promotableHook - The promotable.hook as a linkage
 * @param {object} originalPromotableHook - The container of the original hook
 * @since v1.0
 * @version v1.0
 */
(function(api, promotableHook, originalPromotableHook) {

    'use strict';

    /**
     * Be the hook to be called right after promoting the specified promotable
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {dom} promotable - The promotable to be promoted
     * @param {string} side - The side of the promotable
     * @param {string} newType - The new type of the promotable
     * @since v1.0
     * @version v1.0
     */
    originalPromotableHook._onPromote = promotableHook._onPromote;
    promotableHook._onPromote = function(promotable, side, newType) {
        originalPromotableHook._onPromote(promotable, side, newType);
        // Added to update the current move record to show the new piece type
        api.recordPromotion(side, newType);
        //
    };

})(chess.plugins.abstractChess.gameRecord.api, chess.promotable.hook, 
        chess.plugins.abstractChess.gameRecord.promotable.hook);