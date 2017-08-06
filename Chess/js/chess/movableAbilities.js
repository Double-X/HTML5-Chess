// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading movableAbilities.js!');
}
//

// This implementation js file should be placed in chess

/** The implementation of the movable abilities
 * Sequential cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 16
 * Number of functions: 30
 * Number of variables: 0
 * @author DoubleX
 * @param {object} hook - The implementation container as the hook for plugins
 * @param {object} coordinatesAPI - The coordinates.api as a dependency
 * @param {object} domAPI - The dom.api as a dependency
 * @param {object} blockableAPI - The blockable.api as a dependency
 * @param {object} currentSideAPI - The currentSide.api as a dependency
 * @param {object} checkableAPI - The checkable.api as a dependency
 * @param {object} specialMoveRecordsAPI - The depended specialMoveRecords.api
 * @since v1.0
 * @version v1.0
 */
(function(hook, coordinatesAPI, domAPI, blockableAPI, currentSideAPI, 
        checkableAPI, specialMoveRecordsAPI) {

    'use strict';

    hook.CASTLABLE_TYPE = 'Rook'; // Marks the type supporting castling
    hook.CASTLING_DISTANCE = 2; // Marks the valid movable castling distance
    // Marks the y coordinates for Castling
    hook.CASTLING_Y_COOR = {
        White: 1,
        Black: 8
    };
    //
    // Marks the destination y coordinates after using En Passant
    hook.EN_PASSANT_DEST_Y_COOR = {
        White: 6,
        Black: 3
    };
    //
    // Marks the y coordinates needed to use En Passant
    hook.EN_PASSANT_Y_COOR = {
        White: 5,
        Black: 4
    };
    //
    // Marks the non backward definitions
    hook.IS_BACKWARDS = {
        White: function(oy) { return oy < 0; },
        Black: function(oy) { return oy > 0; }
    };
    //
    // The message part showing the piece moves 1 point
    hook.MSG_NOT_1_POINT = 'is not having length 1!';
    //
    // The message part showing the piece moves 1 point forward
    hook.MSG_NOT_1_POINT_FORWARD = 'is not forward with length 1!';
    //
    // The message part showing the piece moves 2 points straight
    hook.MSG_NOT_2_POINT_STRAIGHT_FORWARD = 
            'is not a forward straight line with length 2!';
    //
    // The message part showing the piece isn't using Castling
    hook.MSG_NOT_CASTLING = 'is not Castling!';
    //
    // The message part showing the piece isn't moving along a diagonal
    hook.MSG_NOT_DIAGONAL = 'is not a diagonal!';
    //
    // The message part showing the piece isn't using En Passant
    hook.MSG_NOT_EN_PASSANT = 'is not En Passant!';
    //
    // The message part showing the piece isn't moving along a line
    hook.MSG_NOT_LINE = 'is not a line!';
    //
    // The message part showing the piece isn't moving ri-like
    hook.MSG_NOT_RI_LIKE = 'is not Ri-like!';
    //
    // The message part showing the piece isn't moving along a straight line
    hook.MSG_NOT_STRAIGHT_LINE = 'is not a straight line!';
    //
    // Marks the movement abilities for each movable type
    hook.RULES = {
        Rook: ['_isNotStraightWithMessage'],
        Horse: ['_isNotRiLikeWithMessage'],
        Bishop: ['_isNotDiagonalWithMessage'],
        // This ordering must be kept or the Castling won't work
        King: [
            '_isNot1PointWithMessage',
            '_isNotCastlingWithMessage'
        ],
        Queen: ['_isNotLineWithMessage'],
        // This ordering must be kept or the En Passant movement won't work
        Pawn: [
            '_isNot2PointStraightForwardWithMessage',
            '_isNot1PointForwardWithMessage',
            '_isNotEnPassantWithMessage'
        ]
        //
    };
    //

    /**
     * Checks if it's invalid to move the movable to the destination
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isInvalid = function(movableId, destCoor) {
        var isInvalid = hook._isInvalidFunc(movableId, destCoor);
        return hook.RULES[domAPI.type(movableId)].every(isInvalid);
    };

    /**
     * Checks if the movement isn't on a line
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotLineWithMessage = function(movableId, destCoor) {
        var movableCoor = coordinatesAPI.coordinates(movableId);
        if (hook._isNotLine(movableCoor, destCoor)) {
            hook._pushMessage(movableId, destCoor, hook.MSG_NOT_LINE);
            return true;
        }
        return false;
    };

    /**
     * Checks if the movement isn't on a line
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotLine = function(movableCoor, destinationCoor) {
        if (!hook._isNotStraight(movableCoor, destinationCoor)) return false;
        return hook._isNotDiagonal(movableCoor, destinationCoor);
    };

    /**
     * Checks if the movement isn't on a straight line
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotStraightWithMessage = function(movableId, destCoor) {
        var movableCoor = coordinatesAPI.coordinates(movableId);
        if (hook._isNotStraight(movableCoor, destCoor)) {
            hook._pushMessage(movableId, destCoor, hook.MSG_NOT_STRAIGHT_LINE);
            return true;
        }
        return false;
    };

    /**
     * Checks if the movement isn't on a straight line
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotStraight = function(movableCoor, destinationCoor) {
        if (movableCoor.x === destinationCoor.x) return false;
        return movableCoor.y !== destinationCoor.y;
    };

    /**
     * Checks if the movement isn't like the Chinese Ri character
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotRiLikeWithMessage = function(movableId, destCoor) {
        var movableCoor = coordinatesAPI.coordinates(movableId);
        if (hook._isNotRiLike(movableCoor, destCoor)) {
            hook._pushMessage(movableId, destCoor, hook.MSG_NOT_RI_LIKE);
            return true;
        }
        return false;
    };

    /**
     * Checks if the movement isn't like the Chinese Ri character
     * Sequential cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotRiLike = function(movableCoor, destinationCoor) {
        var ox = Math.abs(destinationCoor.x - movableCoor.x);
        var oy = Math.abs(destinationCoor.y - movableCoor.y);
        // Only 1 * 2 or 2 * 1, which are Ri-like, can lead to 2 as the product
        return (ox * oy !== 2);
        //
    };

    /**
     * Checks if the movement isn't diagonal
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotDiagonalWithMessage = function(movableId, destCoor) {
        var movableCoor = coordinatesAPI.coordinates(movableId);
        if (hook._isNotDiagonal(movableCoor, destCoor)) {
            hook._pushMessage(movableId, destCoor, hook.MSG_NOT_DIAGONAL);
            return true;
        }
        return false;
    };

    /**
     * Checks if the movement isn't diagonal
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotDiagonal = function(movableCoor, destinationCoor) {
        var ox = Math.abs(destinationCoor.x - movableCoor.x);
        var oy = Math.abs(destinationCoor.y - movableCoor.y);
        return ox !== oy;
    };

    /**
     * Checks if the movement isn't having length 1
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNot1PointWithMessage = function(movableId, destCoor) {
        var movableCoor = coordinatesAPI.coordinates(movableId);
        if (hook._isNot1Point(movableCoor, destCoor)) {
            hook._pushMessage(movableId, destCoor, hook.MSG_NOT_1_POINT);
            return true;
        }
        return false;
    };

    /**
     * Checks if the movement isn't having length 1
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNot1Point = function(movableCoor, destinationCoor) {
        var ox = Math.abs(destinationCoor.x - movableCoor.x);
        var oy = Math.abs(destinationCoor.y - movableCoor.y);
        return ox <= 0 && oy <= 0 || ox > 1 || oy > 1;
    };

    /**
     * Checks if the movement isn't using Castling
     * Sequential cohesion/Stamp coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotCastlingWithMessage = function(movableId, destCoor) {
        var side = domAPI.side(movableId);
        if (hook._isNotCastling(movableId, destCoor, side)) {
            hook._pushMessage(movableId, destCoor, hook.MSG_NOT_CASTLING);
            return true;
        }
        var movableCoor = coordinatesAPI.coordinates(movableId);
        var castlingId = hook._castlingId(destCoor.x - movableCoor.x, side);
        // hook._isNotCastling already ensures the Castling won't be blocked
        specialMoveRecordsAPI.markUseCastling(castlingId, movableCoor);
        //
        return false;
    };

    /**
     * Checks if the movement isn't using Castling
     * Functional cohesion/Stamp coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @param {string} side - The side of the movable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotCastling = function(movableId, destCoor, side) {
        if (!specialMoveRecordsAPI.hasNotMoved(movableId)) return true;
        if (hook._isNotCastlingYCoor(destCoor.y, side)) return true;
        var movableCoor = coordinatesAPI.coordinates(movableId);
        var movableXCoor = movableCoor.x, destXCoor = destCoor.x;
        var ox = destXCoor - movableXCoor;
        if (hook._isInvalidCastlingDistance(ox)) return true;
        var castlableCoor = hook._castlingCoor(ox, side);
        if (!hook._hasCastlable(movableXCoor, destXCoor, castlableCoor, side)) {
            return true;
        }
        var oSide = currentSideAPI.otherSide(side);
        return hook._isInvalidCastlingPath(movableCoor, castlableCoor, oSide);
    };

    /**
     * Checks whether the destination y coordinates allows castling the movable
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {number} destYCoor - The destination y coordinate
     * @param {string} side - The side of the movable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotCastlingYCoor = function(destYCoor, side) {
        return destYCoor !== hook.CASTLING_Y_COOR[side];
    };

    /**
     * Checks whether the destination has the right distance from the movable
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {number} ox - The castling x offset
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isInvalidCastlingDistance = function(ox) {
        return Math.abs(ox) !== hook.CASTLING_DISTANCE;
    };

    /**
     * Returns the coordinates of the castlable to be castling with
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {number} ox - The castling x offset
     * @param {string} side - The side of the movable dom
     * @return {object} The requested catlable coordinates
     * @since v1.0
     * @version v1.0
     */
    hook._castlingCoor = function(ox, side) {
        return { x: ox > 0 ? 8 : 1, y: hook.CASTLING_Y_COOR[side] };
    };

    /**
     * Checks if the castlable supposed to be castling with is available
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {number} movableXCoor - The movable x coordinate
     * @param {number} destXCoor - The destination x coordinate
     * @param {object} castlableCoor - The castlable coordinates
     * @param {string} side - The side of the movable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._hasCastlable = function(movableXCoor, destXCoor, castlableCoor, side) {
        var castlingId = hook._castlingId(destXCoor - movableXCoor, side);
        if (!specialMoveRecordsAPI.hasNotMoved(castlingId)) return false;
        // Ensures the supposedly chosen castlable isn't already captured
        return castlingId === domAPI.cellDomId(castlableCoor);
        //
    };

    /**
     * Returns the id of the castlable to be castling with
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {number} ox - The castling x offset
     * @param {string} side - The side of the movable dom
     * @return {string} The requested catlable id
     * @since v1.0
     * @version v1.0
     */
    hook._castlingId = function(ox, side) {
        return side + '_' + hook.CASTLABLE_TYPE + '_' + (ox > 0 ? '2' : '1');
    };

    /**
     * Checks if the supposed castling path allows castling through it
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} castlableCoor - The castlable coordinates
     * @param {string} side - The side opposing that of the movable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isInvalidCastlingPath = function(movableCoor, castlableCoor, side) {
        var movableId = domAPI.cellDomId(movableCoor);
        var castlableId = domAPI.cellDomId(castlableCoor);
        // Rook must be checked instead of King, which has no blocking checks
        if (blockableAPI.isBlocked(castlableId, movableId)) return true;
        //
        var castlingPath = hook._castlingPath(movableCoor, castlableCoor);
        return hook._isOutOfThroughIntoCheck(castlingPath, side);
    };

    /**
     * Returns the supposed castling path to be castling with
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} castlableCoor - The castlable coordinates
     * @return {array} The list of coordinates in the requested path
     * @since v1.0
     * @version v1.0
     */
    hook._castlingPath = function(movableCoor, castlableCoor) {
        var startXCoor = movableCoor.x, yCoor = movableCoor.y;
        var ox = castlableCoor.x - startXCoor, sign = ox / Math.abs(ox);
        return [
            { x: startXCoor, y: yCoor },
            { x: startXCoor + sign, y: yCoor },
            { x: startXCoor + sign * 2, y: yCoor }
        ];
    };

    /**
     * Checks if any coordinates in the supposed castling path are checked
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {array} castlingPath - The list of coordinates under the castling
     * @param {string} side - The side opposing that of the movable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isOutOfThroughIntoCheck = function(castlingPath, side) {
        var isReachable = checkableAPI.isReachable;
        function isOutOfThroughIntoCheck(coordinates) {
            return isReachable(domAPI.cellDomId(coordinates), side);
        };
        return castlingPath.some(isOutOfThroughIntoCheck);
    };

    /**
     * Checks if the movement isn't on a forward straight line with length 2
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNot2PointStraightForwardWithMessage = function(movableId, destCoor) {
        var movableCoor = coordinatesAPI.coordinates(movableId);
        var side = domAPI.side(movableId);
        var sf2 = hook._isNot2PointStraightForward(movableCoor, destCoor, side);
        if (!sf2 && specialMoveRecordsAPI.hasNotMoved(movableId)) return false;
        var message = hook.MSG_NOT_2_POINT_STRAIGHT_FORWARD;
        hook._pushMessage(movableId, destCoor, message);
        return true;
    };

    /**
     * Checks if the movement isn't on a forward straight line with length 2
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destCoor - The destination coordinates
     * @param {string} side - The side of the movable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNot2PointStraightForward = function(movableCoor, destCoor, side) {
        var movableYCoor = movableCoor.y, destinationYCoor = destCoor.y;
        if (hook._isBackward(movableYCoor, destinationYCoor, side)) return true;
        if (Math.abs(destinationYCoor - movableYCoor) !== 2) return true;
        return movableCoor.x !== destCoor.x;
    };

    /**
     * Checks if the movement isn't forward with length being 1 point
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNot1PointForwardWithMessage = function(movableId, destCoor) {
        var movableCoor = coordinatesAPI.coordinates(movableId);
        var side = domAPI.side(movableId);
        var absOx = hook._expectedAbsOx(movableId, domAPI.cellDomId(destCoor));
        if (!hook._isNot1PointForward(movableCoor, destCoor, side, absOx)) {
            return false;
        }
        hook._pushMessage(movableId, destCoor, hook.MSG_NOT_1_POINT_FORWARD);
        return true;
    };

    /**
     * Checks if the movement isn't forward with length being 1 point
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destCoor - The destination coordinates
     * @param {string} side - The side of the movable dom
     * @param {number} absOx - The expected absolute x offset of the movement
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNot1PointForward = function(movableCoor, destCoor, side, absOx) {
        var movableYCoor = movableCoor.y, destinationYCoor = destCoor.y;
        if (hook._isBackward(movableYCoor, destinationYCoor, side)) return true;
        if (Math.abs(destinationYCoor - movableYCoor) !== 1) return true;
        return Math.abs(destCoor.x - movableCoor.x) !== absOx;
    };

    /**
     * Returns the expected absolute x offset from given movable to destination
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The requested absolute x offset
     * @since v1.0
     * @version v1.0
     */
    hook._expectedAbsOx = function(movableId, destinationId) {
        return hook._isCapture(movableId, destinationId) ? 1 : 0;
    };

    /**
     * Checks if the movable is capturing the piece at the destination
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isCapture = function(movableId, destinationId) {
        if (!domAPI.isPiece(destinationId)) return false;
        return domAPI.isDifferentSide(movableId, destinationId);
    };

    /**
     * Checks if the movement isn't using En Passant
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotEnPassantWithMessage = function(movableId, destCoor) {
        var movableCoor = coordinatesAPI.coordinates(movableId);
        var side = domAPI.side(movableId);
        if (hook._isNotEnPassant(movableCoor, destCoor, side)) {
            hook._pushMessage(movableId, destCoor, hook.MSG_NOT_EN_PASSANT);
            return true;
        }
        // It's impossible for the movable to be blocked by using En Passant
        specialMoveRecordsAPI.markUseEnPassantRight(movableId);
        //
        return false;
    };

    /**
     * Checks if the movement isn't using En Passant
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destCoor - The destination coordinates
     * @param {string} side - The side of the movable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotEnPassant = function(movableCoor, destCoor, side) {
        if (hook._isNotEnPassantPosition(movableCoor, destCoor, side)) {
            return true;
        }
        var enPassantId = domAPI.cellDomId({x: destCoor.x, y: movableCoor.y });
        return !specialMoveRecordsAPI.hasEnPassantRight(enPassantId);
    };

    /**
     * Checks if the movable positions doesn't allow En Passant
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destCoor - The destination coordinates
     * @param {string} side - The side of the movable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotEnPassantPosition = function(movableCoor, destCoor, side) {
        if (movableCoor.y !== hook.EN_PASSANT_Y_COOR[side]) return true;
        if (destCoor.y !== hook.EN_PASSANT_DEST_Y_COOR[side]) return true;
        return Math.abs(movableCoor.x - destCoor.x) !== 1;
    };

})(chess.movableAbilities.hook, chess.coordinates.api, chess.dom.api, 
        chess.blockable.api, chess.currentSide.api, chess.checkable.api, 
        chess.specialMoveRecords.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file movableAbilities.js from path js/chess/');
//