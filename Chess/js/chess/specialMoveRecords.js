// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading specialMoveRecords.js!');
}
//

// This implementation js file should be placed in chess

/** The implementation of the behaviors for recording special moves
 * Functional cohesion/Data coupling/Referentially transparent
 * On GMT 1000 27 Jan 2017
 * Number of constants: 3
 * Number of functions: 19
 * Number of variables: 4
 * @author DoubleX
 * @param {object} hook - The implementation container as the hook for plugins
 * @param {object} coordinatesAPI - The coordinates.api as a dependency
 * @param {object} domAPI - The dom.api as a dependency
 * @param {object} currentSideAPI - The currentSide.api as a dependency
 * @param {object} spaceAPI - The space.api as a dependency
 * @since v1.0
 * @version v1.0
 */
(function(hook, coordinatesAPI, domAPI, currentSideAPI, spaceAPI) {

    'use strict';

    // Marks the y offset when using En Passant for both sides
    hook.EN_PASSANT_Y_OFFSET = {
        White: -1,
        Black: 1
    };
    //
    // Marks the state representing no piece's currently using Castling
    hook.NULL_CASTLING_PIECE = '';
    // Marks the state representing no piece's currently using En Passant
    hook.NULL_EN_PASSANT_PIECE = '';
    //

    // Marks the castlable id and original movable coordiantes for the castling
    hook._castlingIdCoor = {};
    //
    // Marks the piece currently using En Passant
    hook._enPassantPiece = hook.NULL_EN_PASSANT_PIECE;
    //
    // Marks all pieces that can be used by En Passant
    hook._enPassantRights = {
        White_Pawn_1: false,
        White_Pawn_2: false,
        White_Pawn_3: false,
        White_Pawn_4: false,
        White_Pawn_5: false,
        White_Pawn_6: false,
        White_Pawn_7: false,
        White_Pawn_8: false,
        Black_Pawn_1: false,
        Black_Pawn_2: false,
        Black_Pawn_3: false,
        Black_Pawn_4: false,
        Black_Pawn_5: false,
        Black_Pawn_6: false,
        Black_Pawn_7: false,
        Black_Pawn_8: false
    };
    //
    // Marks the number of moves made by 
    hook._moveRecords = {
        White_Rook_1: 0,
        White_Horse_1: 0,
        White_Bishop_1: 0,
        White_King: 0,
        White_Queen_1: 0,
        White_Bishop_2: 0,
        White_Horse_2: 0,
        White_Rook_2: 0,
        White_Pawn_1: 0,
        White_Pawn_2: 0,
        White_Pawn_3: 0,
        White_Pawn_4: 0,
        White_Pawn_5: 0,
        White_Pawn_6: 0,
        White_Pawn_7: 0,
        White_Pawn_8: 0,
        Black_Rook_1: 0,
        Black_Horse_1: 0,
        Black_Bishop_1: 0,
        Black_King: 0,
        Black_Queen_1: 0,
        Black_Bishop_2: 0,
        Black_Horse_2: 0,
        Black_Rook_2: 0,
        Black_Pawn_1: 0,
        Black_Pawn_2: 0,
        Black_Pawn_3: 0,
        Black_Pawn_4: 0,
        Black_Pawn_5: 0,
        Black_Pawn_6: 0,
        Black_Pawn_7: 0,
        Black_Pawn_8: 0
    };
    //

    /**
     * Clears the move record of the specified movable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable to clear its record
     * @since v1.0
     * @version v1.0
     */
    hook.clearMoveRecord = function(movableId) {
        hook._moveRecords[movableId] = 0;
    };

    /**
     * Checks whether the specified movable can be used by En Passant
     * Functional cohesion/Data coupling/Referentially transparent
     * Script call
     * @author DoubleX
     * @param {string} movableId - The id of the movable to check its record
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook.hasEnPassantRight = function(movableId) {
        return hook._enPassantRights[movableId];
    };

    /**
     * Checks whether the specified movable hasn't moved before
     * Functional cohesion/Data coupling/Referentially transparent
     * Script call
     * @author DoubleX
     * @param {string} movableId - The id of the movable to check its record
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook.hasNotMoved = function(movableId) {
        return hook._moveRecords[movableId] <= 0;
    };

    /**
     * Marks the use of the Castling involving the specified castlable and coor
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} castlableId - The id of the castlable dom
     * @param {object} movableCoor - The original movable dom coordinates
     * @since v1.0
     * @version v1.0
     */
    hook.markUseCastling = function(castlableId, movableCoor) {
        // Otherwise checking the checkables might overwrite the right one
        if (hook._isUseCastling()) return;
        //
        hook._castlingIdCoor = {
            castlableId: castlableId,
            movableCoor: movableCoor
        };
    };

    /**
     * Marks the use of the En Passant right for the specified movable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable using En Passant
     * @since v1.0
     * @version v1.0
     */
    hook.markUseEnPassantRight = function(movableId) {
        // Only 1 movable can use En Passant at a time and it's immediately used
        hook._enPassantPiece = movableId;
        //
    };

    /**
     * Updates the special move records used by all special moves
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {function} move - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    hook.updateRecords = function(movableId, move) {
        // This ordering must be kept or no En Passant could ever take place
        hook._makeSpecialMove(movableId, move);
        hook._updateRecords(movableId);
        //
    };

    /**
     * Makes a special move for the specified movable using the specified move
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {function} move - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    hook._makeSpecialMove = function(movableId, move) {
        if (hook._isUseEnPassantRight(movableId)) {
            return hook._useEnPassantRight(movableId);
        }
        if (hook._isUseCastling()) hook._useCastling(move);
    };

    /**
     * Checks whether the specified movable is to use En Passant
     * Functional cohesion/Data coupling/Referentially transparent
     * Script call
     * @author DoubleX
     * @param {string} movableId - The id of the movable to check its right use
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isUseEnPassantRight = function(movableId) {
        return hook._enPassantPiece === movableId;
    };

    /**
     * Uses En Passant for the specified movable via the specified move function
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    hook._useEnPassantRight = function(movableId) {
        hook._clearUseEnPassantRight();
        hook._makeEnPassantCapture(movableId);
    };

    /**
     * Marks the consumption of the En Passant right
     * Functional cohesion/Message coupling/Idempotent
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    hook._clearUseEnPassantRight = function() {
        hook._enPassantPiece = hook.NULL_EN_PASSANT_PIECE;
    };

    /**
     * Makes the specified En Passant capture for the specified movable
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    hook._makeEnPassantCapture = function(movableId) {
        var movableCoor = coordinatesAPI.coordinates(movableId);
        var destOY = hook.EN_PASSANT_Y_OFFSET[domAPI.side(movableId)];
        var destCoor = { x: movableCoor.x, y: movableCoor.y + destOY };
        spaceAPI.turnPieceToNewSpace(domAPI.cellDomId(destCoor));
    };

    /**
     * Checks whether a Castling is to be used
     * Functional cohesion/Message coupling/Referentially transparent
     * Script call
     * @author DoubleX
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isUseCastling = function() {
        var castlingIdCoor = hook._castlingIdCoor;
        return castlingIdCoor.castlableId && castlingIdCoor.movableCoor;
    };

    /**
     * Uses Castling with the specified move function
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {function} move - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    hook._useCastling = function(move) {
        var castlingIdCoor = hook._castlingIdCoor;
        currentSideAPI.switchSide(); // Otherwise the opposite side will be used
        // This ordering must be kept or duplicate Castling might take place
        hook._clearUseCastling();
        var destinationId = domAPI.cellDomId(castlingIdCoor.movableCoor);
        move(castlingIdCoor.castlableId, destinationId);
        //
    };

    /**
     * Marks the completion of the Castling
     * Functional cohesion/Message coupling/Idempotent
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    hook._clearUseCastling = function() { hook._castlingIdCoor = {}; };

    /**
     * Updates the special move records used by all special moves
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    hook._updateRecords = function(movableId) {
        // This ordering must be kept or no En Passant could ever take place
        hook._revokeEnPassantRights();
        hook._updateMoveRecord(movableId);
        //
    };

    /**
     * Revokes the right to use any En Passant on any movable
     * Functional cohesion/Message coupling/Idempotent
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    hook._revokeEnPassantRights = function() {
        Object.keys(hook._enPassantRights).forEach(hook._revokeEnPassantRight);
    };

    /**
     * Revokes the right to use any En Passant on the specified movable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable used by En Passant
     * @since v1.0
     * @version v1.0
     */
    hook._revokeEnPassantRight = function(movableId) {
        hook._enPassantRights[movableId] = false;
    };

    /**
     * Updates the move record of the specified movable
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable to update its record
     * @since v1.0
     * @version v1.0
     */
    hook._updateMoveRecord = function(movableId) {
        // This ordering must be kept or no En Passant could ever take place
        hook._updateEnPassantRight(movableId);
        hook._moveRecords[movableId] += 1;
        //
    };

    /**
     * Updates the right to use any En Passant on the specified movable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable used by En Passant
     * @since v1.0
     * @version v1.0
     */
    hook._updateEnPassantRight = function(movableId) {
        if (Object.keys(hook._enPassantRights).indexOf(movableId) <= 0) return;
        hook._enPassantRights[movableId] = hook.hasNotMoved(movableId);
    };

})(chess.specialMoveRecords.hook, chess.coordinates.api, chess.dom.api, 
        chess.currentSide.api, chess.space.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file specialMoveRecords.js from path js/chess/');
//