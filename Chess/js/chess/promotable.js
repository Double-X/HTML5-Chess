// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading promotable.js!');
}
//

// This implementation js file should be placed in chess

/** The implementation of the behaviors for promoting promotables
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 7
 * Number of functions: 9
 * Number of variables: 1
 * @author DoubleX
 * @param {object} hook - The implementation container as the hook for plugins
 * @param {object} coordinatesAPI - The coordinates.api as a dependency
 * @param {object} domAPI - The dom.api as a dependency
 * @param {object} specialMoveRecordsAPI - The depended specialMoveRecords.api
 * @since v1.0
 * @version v1.0
 */
(function(hook, coordinatesAPI, domAPI, specialMoveRecordsAPI) {

    'use strict';

    // Stores the messages to be shown when asking players to promote the piece
    hook.PROMOTABLE_MESSAGE = 'Please choose from Queen, Rook, Bishop or Horse';
    //
    // Stores all the types being choices for promoting promotables
    hook.PROMOTABLE_NEW_TYPES = ['Queen', 'Rook', 'Bishop', 'Horse'];
    //
    // Marks the beginning and ending parts of the promotable onclick function
    hook.PROMOTABLE_ONCLICK_PRE = "chess.selectable.api.toggle('";
    hook.PROMOTABLE_ONCLICK_POST = "');";
    //
    // Stores the texts of all pieces being choices for promoting promotables
    hook.PROMOTABLE_TEXTS = {
        White_Queen: '\u2655',
        White_Rook: '\u2656',
        White_Bishop: '\u2657',
        White_Horse: '\u2658',
        Black_Queen: '\u265B',
        Black_Rook: '\u265C',
        Black_Bishop: '\u265D',
        Black_Horse: '\u265E'
    };
    hook.PROMOTABLE_TYPES = ['Pawn']; // Stores all types that can be promoted
    // Stores the y coordiantes for both sides that allow promoting promotables
    hook.PROMOTABLE_Y_COOR = {
        White: 8,
        Black: 1
    };
    //

    // The maximum index of piece types being choices for promoting promotables
    hook._maxPromotableIndex = {
        White_Rook: 2,
        White_Horse: 2,
        White_Bishop: 2,
        White_Queen: 1,
        Black_Rook: 2,
        Black_Horse: 2,
        Black_Bishop: 2,
        Black_Queen: 1
    };
    //

    /**
     * Tries to promote the specified promotable
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} promotableId - The id of the promotable to be promoted
     * @since v1.0
     * @version v1.0
     */
    hook.tryPromote = function(promotableId) {
        if (!hook._isPromotable(promotableId)) return;
        if (hook._canPromote(promotableId)) hook._promote(promotableId);
    };

    /**
     * Checks if the specified promotable is indeed a promotable
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} promotableId - The id of the promotable to be promoted
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isPromotable = function(promotableId) {
        return hook.PROMOTABLE_TYPES.indexOf(domAPI.type(promotableId)) >= 0;
    };

    /**
     * Checks if the specified promotable has meet the conditions to promote
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} promotableId - The id of the promotable to be promoted
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._canPromote = function(promotableId) {
        var yCoor = coordinatesAPI.coordinates(promotableId).y;
        return hook.PROMOTABLE_Y_COOR[domAPI.side(promotableId)] === yCoor;
    };

    /**
     * Promotes the specified promotable
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} promotableId - The id of the promotable to be promoted
     * @since v1.0
     * @version v1.0
     */
    hook._promote = function(promotableId) {
        var side = domAPI.side(promotableId), newType = hook._promotionType();
        hook._onPromote(domAPI.dom(promotableId), side, newType);
    };

    /**
     * Returns the type chosen to promote the promotable to be promoted
     * Functional cohesion/Message coupling
     * @author DoubleX
     * @return {string} - The requested type
     * @since v1.0
     * @version v1.0
     */
    hook._promotionType = function() {
        var newType;
        while (!hook._isPromotableNewType(newType)) {
            newType = prompt(hook.PROMOTABLE_MESSAGE);
        }
        return newType;
    };

    /**
     * Checks if the specified new type is a choice for promoting promotables
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} newType - The new type for the promotable being promoted
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isPromotableNewType = function(newType) {
        return hook.PROMOTABLE_NEW_TYPES.indexOf(newType) >= 0;
    };

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
    hook._onPromote = function(promotable, side, newType) {
        var sideType = side + '_' + newType;
        // This order must be kept or the id/max promotable index will be wrong
        hook._updateMaxPromotableIndex(sideType);
        hook._turnPromotableToNewPiece(promotable, sideType);
        specialMoveRecordsAPI.clearMoveRecord(promotable.id);
        //
    };

    /**
     * Updates the maximum promotable index of the specified sidetype
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} sideType - The side and new type of the promotable
     * @since v1.0
     * @version v1.0
     */
    hook._updateMaxPromotableIndex = function(sideType) {
        hook._maxPromotableIndex[sideType] += 1;
    };

    /**
     * Turns the specified promotable to a new piece with the specified sidetype
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {dom} promotable - The promotable to be promoted
     * @param {string} sideType - The side and new type of the promotable
     * @since v1.0
     * @version v1.0
     */
    hook._turnPromotableToNewPiece = function(promotable, sideType) {
        var count = hook._maxPromotableIndex[sideType].toString();
        var id = promotable.id = sideType + '_' + count;
        var onclick = hook.PROMOTABLE_ONCLICK_PRE + id;
        onclick += hook.PROMOTABLE_ONCLICK_POST;
        // Experineces tell that piece.onClick = new Function doesn't change it
        promotable.setAttribute('onclick', onclick);
        //
        promotable.textContent = hook.PROMOTABLE_TEXTS[sideType];
    };

})(chess.promotable.hook, chess.coordinates.api, chess.dom.api, 
        chess.specialMoveRecords.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file promotable.js from path js/chess/');
//