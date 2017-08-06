// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading movableAbilities.js!');
}
//

// This unit test js file should be placed in chess/unitTests

/** The movableAbilities implementation unit test suite
 * Sequential cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 10
 * @author DoubleX
 * @param {object} hook - The implementation container to be unit tested
 * @param {object} unitTestSwitches - The switch setting the unit test status
 * @param {object} unitTest - The unit test container extending the hook
 * @since v1.0
 * @version v1.0
 */
(function(hook, unitTestSwitches, unitTest) {

    'use strict';

    /**
     * Checks if the unit tests should be run
     * Functional cohesion/Message coupling/Referentially transparent
     * @author DoubleX
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isActive = function() { return unitTestSwitches.movableAbilities; };

    /**
     * Checks if it's invalid to move the movable to the destination
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isInvalid = hook._isInvalid;
    hook._isInvalid = function(movableId, destCoor) {
        if (unitTest._isActive()) unitTest.hook._isInvalid(movableId, destCoor);
        return unitTest._isInvalid(movableId, destCoor);
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
    unitTest._isNotLineWithMessage = hook._isNotLineWithMessage;
    hook._isNotLineWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotLineWithMessage(movableId, destCoor);
        }
        return unitTest._isNotLineWithMessage(movableId, destCoor);
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
    unitTest._isNotLine = hook._isNotLine;
    hook._isNotLine = function(movableCoor, destinationCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotLine(movableCoor, destinationCoor);
        }
        return unitTest._isNotLine(movableCoor, destinationCoor);
    };

    /**
     * Checks if the movement isn't on a straight line
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNotStraightWithMessage = hook._isNotStraightWithMessage;
    hook._isNotStraightWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotStraightWithMessage(movableId, destCoor);
        }
        return unitTest._isNotStraightWithMessage(movableId, destCoor);
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
    unitTest._isNotStraight = hook._isNotStraight;
    hook._isNotStraight = function(movableCoor, destinationCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotStraight(movableCoor, destinationCoor);
        }
        return unitTest._isNotStraight(movableCoor, destinationCoor);
    };

    /**
     * Checks if the movement isn't like the Chinese Ri character
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNotRiLikeWithMessage = hook._isNotRiLikeWithMessage;
    hook._isNotRiLikeWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotRiLikeWithMessage(movableId, destCoor);
        }
        return unitTest._isNotRiLikeWithMessage(movableId, destCoor);
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
    unitTest._isNotRiLike = hook._isNotRiLike;
    hook._isNotRiLike = function(movableCoor, destinationCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotRiLike(movableCoor, destinationCoor);
        }
        return unitTest._isNotRiLike(movableCoor, destinationCoor);
    };

    /**
     * Checks if the movement isn't diagonal
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNotDiagonalWithMessage = hook._isNotDiagonalWithMessage;
    hook._isNotDiagonalWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotDiagonalWithMessage(movableId, destCoor);
        }
        return unitTest._isNotDiagonalWithMessage(movableId, destCoor);
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
    unitTest._isNotDiagonal = hook._isNotDiagonal;
    hook._isNotDiagonal = function(movableCoor, destinationCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotDiagonal(movableCoor, destinationCoor);
        }
        return unitTest._isNotDiagonal(movableCoor, destinationCoor);
    };

    /**
     * Checks if the movement isn't having length 1
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNot1PointWithMessage = hook._isNot1PointWithMessage;
    hook._isNot1PointWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNot1PointWithMessage(movableId, destCoor);
        }
        return unitTest._isNot1PointWithMessage(movableId, destCoor);
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
    unitTest._isNot1Point = hook._isNot1Point;
    hook._isNot1Point = function(movableCoor, destinationCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNot1Point(movableCoor, destinationCoor);
        }
        return unitTest._isNot1Point(movableCoor, destinationCoor);
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
    unitTest._isNotCastlingWithMessage = hook._isNotCastlingWithMessage;
    hook._isNotCastlingWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotCastlingWithMessage(movableId, destCoor);
        }
        return unitTest._isNotCastlingWithMessage(movableId, destCoor);
    };

    /**
     * Checks if the movement isn't using Castling
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {number} destXCoor - The destination x coordinate
     * @param {string} side - The side of the movable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNotCastling = hook._isNotCastling;
    hook._isNotCastling = function(movableId, destXCoor, side) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotCastling(movableId, destXCoor, side);
        }
        return unitTest._isNotCastling(movableId, destXCoor, side);
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
    unitTest._isNotCastlingYCoor = hook._isNotCastlingYCoor;
    hook._isNotCastlingYCoor = function(destYCoor, side) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotCastlingYCoor(destYCoor, side);
        }
        return unitTest._isNotCastlingYCoor(destYCoor, side);
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
    unitTest._isInvalidCastlingDistance = hook._isInvalidCastlingDistance;
    hook._isInvalidCastlingDistance = function(ox) {
        if (unitTest._isActive()) unitTest.hook._isInvalidCastlingDistance(ox);
        return unitTest._isInvalidCastlingDistance(ox);
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
    unitTest._castlingCoor = hook._castlingCoor;
    hook._castlingCoor = function(ox, side) {
        if (unitTest._isActive()) unitTest.hook._castlingCoor(ox, side);
        return unitTest._castlingCoor(ox, side);
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
    unitTest._hasCastlable = hook._hasCastlable;
    hook._hasCastlable = function(movableXCoor, destXCoor, castlableCoor, side) {
        if (unitTest._isActive()) {
            unitTest.hook._hasCastlable(movableXCoor, destXCoor, castlableCoor, side);
        }
        return unitTest._hasCastlable(movableXCoor, destXCoor, castlableCoor, side);
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
    unitTest._castlingId = hook._castlingId;
    hook._castlingId = function(ox, side) {
        if (unitTest._isActive()) unitTest.hook._castlingId(ox, side);
        return unitTest._castlingId(ox, side);
    };

    /**
     * Checks if the supposed castling path allows castling through it
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} castlableCoor - The castlable coordinates
     * @param {string} side - The side of the movable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isInvalidCastlingPath = hook._isInvalidCastlingPath;
    hook._isInvalidCastlingPath = function(movableCoor, castlableCoor, side) {
        if (unitTest._isActive()) {
            unitTest.hook._isInvalidCastlingPath(movableCoor, castlableCoor, side);
        }
        return unitTest._isInvalidCastlingPath(movableCoor, castlableCoor, side);
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
    unitTest._castlingPath = hook._castlingPath;
    hook._castlingPath = function(movableCoor, castlableCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._castlingPath(movableCoor, castlableCoor);
        }
        return unitTest._castlingPath(movableCoor, castlableCoor);
    };

    /**
     * Checks if any coordinates in the supposed castling path are checked
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {array} castlingPath - The list of coordinates under the castling
     * @param {string} side - The side of the movable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isOutOfThroughIntoCheck = hook._isOutOfThroughIntoCheck;
    hook._isOutOfThroughIntoCheck = function(castlingPath, side) {
        if (unitTest._isActive()) {
            unitTest.hook._isOutOfThroughIntoCheck(castlingPath, side);
        }
        return unitTest._isOutOfThroughIntoCheck(castlingPath, side);
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
    unitTest._isNot2PointStraightForwardWithMessage = hook._isNot2PointStraightForwardWithMessage;
    hook._isNot2PointStraightForwardWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNot2PointStraightForwardWithMessage(movableId, destCoor);
        }
        return unitTest._isNot2PointStraightForwardWithMessage(movableId, destCoor);
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
    unitTest._isNot2PointStraightForward = hook._isNot2PointStraightForward;
    hook._isNot2PointStraightForward = function(movableCoor, destCoor, side) {
        if (unitTest._isActive()) {
            unitTest.hook._isNot2PointStraightForward(movableCoor, destCoor, side);
        }
        return unitTest._isNot2PointStraightForward(movableCoor, destCoor, side);
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
    unitTest._isNot1PointForwardWithMessage = hook._isNot1PointForwardWithMessage;
    hook._isNot1PointForwardWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNot1PointForwardWithMessage(movableId, destCoor);
        }
        return unitTest._isNot1PointForwardWithMessage(movableId, destCoor);
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
    unitTest._isNot1PointForward = hook._isNot1PointForward;
    hook._isNot1PointForward = function(movableCoor, destCoor, side, absOx) {
        if (unitTest._isActive()) {
            unitTest.hook._isNot1PointForward(movableCoor, destCoor, side, absOx);
        }
        return unitTest._isNot1PointForward(movableCoor, destCoor, side, absOx);
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
    unitTest._expectedAbsOx = hook._expectedAbsOx;
    hook._expectedAbsOx = function(movableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook._expectedAbsOx(movableId, destinationId);
        }
        return unitTest._expectedAbsOx(movableId, destinationId);
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
    unitTest._isCapture = hook._isCapture;
    hook._isCapture = function(movableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook._isCapture(movableId, destinationId);
        }
        return unitTest._isCapture(movableId, destinationId);
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
    unitTest._isNotEnPassantWithMessage = hook._isNotEnPassantWithMessage;
    hook._isNotEnPassantWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotEnPassantWithMessage(movableId, destCoor);
        }
        return unitTest._isNotEnPassantWithMessage(movableId, destCoor);
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
    unitTest._isNotEnPassant = hook._isNotEnPassant;
    hook._isNotEnPassant = function(movableCoor, destCoor, side) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotEnPassant(movableCoor, destCoor, side);
        }
        return unitTest._isNotEnPassant(movableCoor, destCoor, side);
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
    unitTest._isNotEnPassantPosition = hook._isNotEnPassantPosition;
    hook._isNotEnPassantPosition = function(movableCoor, destCoor, side) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotEnPassantPosition(movableCoor, destCoor, side);
        }
        return unitTest._isNotEnPassantPosition(movableCoor, destCoor, side);
    };

    /**
     * Tests the _isInvalid function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isInvalid = function(movableId, destCoor) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._isInvalid');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isNotLineWithMessage function
     * Functional/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotLineWithMessage = function(movableId, destCoor) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isNotLineWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isNotLine function
     * Functional/Data coupling/No-op
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotLine = function(movableCoor, destinationCoor) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isNotLine');
        console.log('JSON.stringify(movableCoor): ' + JSON.stringify(movableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
        //
    };

    /**
     * Tests the _isNotStraightWithMessage function
     * Functional/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotStraightWithMessage = function(movableId, destCoor) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isNotStraightWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isNotStraight function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotStraight = function(movableCoor, destinationCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestCoor1 = { x: 1, y: 1 }, unitTestCoor2 = { x: 1, y: 8 };
        var unitTestCoor3 = { x: 8, y: 1 }, unitTestCoor4 = { x: 8, y: 8 };
        var unitTestIsNotStraight1 = unitTest._isNotStraight(unitTestCoor1, unitTestCoor2);
        var unitTestIsNotStraight2 = unitTest._isNotStraight(unitTestCoor2, unitTestCoor1);
        var unitTestIsNotStraight3 = unitTest._isNotStraight(unitTestCoor1, unitTestCoor3);
        var unitTestIsNotStraight4 = unitTest._isNotStraight(unitTestCoor3, unitTestCoor1);
        var unitTestIsNotStraight5 = unitTest._isNotStraight(unitTestCoor4, unitTestCoor1);
        var unitTestIsNotStraight6 = unitTest._isNotStraight(unitTestCoor1, unitTestCoor4);
        console.log('movableAbilities.unitTest.hook._isNotStraight');
        console.log('JSON.stringify(movableCoor): ' + JSON.stringify(movableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
        console.log('isNotStraight: ' + unitTest._isNotStraight(movableCoor, destinationCoor));
        if (unitTestIsNotStraight1) {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsNotStraight1);
        } else {
            console.log('Passed the 1st test!');
        }
        if (unitTestIsNotStraight2) {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsNotStraight2);
        } else {
            console.log('Passed the 2nd test!');
        }
        if (unitTestIsNotStraight3) {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsNotStraight3);
        } else {
            console.log('Passed the 3rd test!');
        }
        if (unitTestIsNotStraight4) {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsNotStraight4);
        } else {
            console.log('Passed the 4th test!');
        }
        if (unitTestIsNotStraight5) {
            console.log('Passed the 5th test!');
        } else {
            console.log('Failed the 5th test! Actual value: ' + unitTestIsNotStraight5);
        }
        if (unitTestIsNotStraight6) {
            console.log('Passed the 6th test!');
        } else {
            console.log('Failed the 6th test! Actual value: ' + unitTestIsNotStraight6);
        }
        //
    };

    /**
     * Tests the _isNotRiLikeWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotRiLikeWithMessage = function(movableId, destCoor) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isNotRiLikeWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isNotRiLike function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotRiLike = function(movableCoor, destinationCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestMovableCoor = { x: 5, y: 3 };
        var isRiLikeDestinationCoors = [
            { x: 7, y: 2 },
            { x: 7, y: 4 },
            { x: 6, y: 5 },
            { x: 4, y: 5 },
            { x: 3, y: 4 },
            { x: 3, y: 2 },
            { x: 4, y: 1 },
            { x: 6, y: 1 }
        ];
        var isNotRiLikeDestinationCoors = [];
        function xCoors(xCoor) {
            function yCoors(yCoor) {
                if (xCoor === unitTestMovableCoor.x && yCoor === unitTestMovableCoor.y) {
                    return;
                }
                function isRiLike(coor) {
                    return coor.x === xCoor && coor.y === yCoor;
                };
                if (isRiLikeDestinationCoors.some(isRiLike)) return;
                isNotRiLikeDestinationCoors.push({ x: xCoor, y: yCoor });
            }
            [1, 2, 3, 4, 5, 6, 7, 8].forEach(yCoors);
        };
        [1, 2, 3, 4, 5, 6, 7, 8].forEach(xCoors);
        function isNotRiLike(destinationCoor) {
            return unitTest._isNotRiLike(unitTestMovableCoor, destinationCoor);
        };
        var unitTestIsNotRiLike1 = isNotRiLike(isRiLikeDestinationCoors[0]);
        var unitTestIsNotRiLike2 = isNotRiLike(isRiLikeDestinationCoors[1]);
        var unitTestIsNotRiLike3 = isNotRiLike(isRiLikeDestinationCoors[2]);
        var unitTestIsNotRiLike4 = isNotRiLike(isRiLikeDestinationCoors[3]);
        var unitTestIsNotRiLike5 = isNotRiLike(isRiLikeDestinationCoors[4]);
        var unitTestIsNotRiLike6 = isNotRiLike(isRiLikeDestinationCoors[5]);
        var unitTestIsNotRiLike7 = isNotRiLike(isRiLikeDestinationCoors[6]);
        var unitTestIsNotRiLike8 = isNotRiLike(isRiLikeDestinationCoors[7]);
        var unitTestIsNotRiLike9 = isNotRiLikeDestinationCoors.every(isNotRiLike);
        console.log('movableAbilities.unitTest.hook._isNotRiLike');
        console.log('JSON.stringify(movableCoor): ' + JSON.stringify(movableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
        console.log('isNotRiLike: ' + unitTest._isNotRiLike(movableCoor, destinationCoor));
        if (unitTestIsNotRiLike1) {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsNotRiLike1);
        } else {
            console.log('Passed the 1st test!');
        }
        if (unitTestIsNotRiLike2) {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsNotRiLike2);
        } else {
            console.log('Passed the 2nd test!');
        }
        if (unitTestIsNotRiLike3) {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsNotRiLike3);
        } else {
            console.log('Passed the 3rd test!');
        }
        if (unitTestIsNotRiLike4) {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsNotRiLike4);
        } else {
            console.log('Passed the 4th test!');
        }
        if (unitTestIsNotRiLike5) {
            console.log('Failed the 5th test! Actual value: ' + unitTestIsNotRiLike5);
        } else {
            console.log('Passed the 5th test!');
        }
        if (unitTestIsNotRiLike6) {
            console.log('Failed the 6th test! Actual value: ' + unitTestIsNotRiLike6);
        } else {
            console.log('Passed the 6th test!');
        }
        if (unitTestIsNotRiLike7) {
            console.log('Failed the 7th test! Actual value: ' + unitTestIsNotRiLike7);
        } else {
            console.log('Passed the 7th test!');
        }
        if (unitTestIsNotRiLike8) {
            console.log('Failed the 8th test! Actual value: ' + unitTestIsNotRiLike8);
        } else {
            console.log('Passed the 8th test!');
        }
        if (unitTestIsNotRiLike9) {
            console.log('Passed the 9th test!');
        } else {
            console.log('Failed the 9th test! Actual value: ' + unitTestIsNotRiLike9);
        }
        //
    };

    /**
     * Tests the _isNotDiagonalWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotDiagonalWithMessage = function(movableId, destCoor) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isNotDiagonalWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isNotDiagonal function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotDiagonal = function(movableCoor, destinationCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestCoor1 = { x: 1, y: 1 }, unitTestCoor2 = { x: 1, y: 8 };
        var unitTestCoor3 = { x: 8, y: 1 }, unitTestCoor4 = { x: 8, y: 8 };
        var unitTestIsNotDiagonal1 = unitTest._isNotDiagonal(unitTestCoor1, unitTestCoor2);
        var unitTestIsNotDiagonal2 = unitTest._isNotDiagonal(unitTestCoor2, unitTestCoor1);
        var unitTestIsNotDiagonal3 = unitTest._isNotDiagonal(unitTestCoor1, unitTestCoor3);
        var unitTestIsNotDiagonal4 = unitTest._isNotDiagonal(unitTestCoor3, unitTestCoor1);
        var unitTestIsNotDiagonal5 = unitTest._isNotDiagonal(unitTestCoor4, unitTestCoor1);
        var unitTestIsNotDiagonal6 = unitTest._isNotDiagonal(unitTestCoor1, unitTestCoor4);
        console.log('movableAbilities.unitTest.hook._isNotDiagonal');
        console.log('JSON.stringify(movableCoor): ' + JSON.stringify(movableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
        console.log('isNotDiagonal: ' + unitTest._isNotDiagonal(movableCoor, destinationCoor));
        if (unitTestIsNotDiagonal1) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsNotDiagonal1);
        }
        if (unitTestIsNotDiagonal2) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsNotDiagonal2);
        }
        if (unitTestIsNotDiagonal3) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsNotDiagonal3);
        }
        if (unitTestIsNotDiagonal4) {
            console.log('Passed the 4th test!');
        } else {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsNotDiagonal4);
        }
        if (unitTestIsNotDiagonal5) {
            console.log('Failed the 5th test! Actual value: ' + unitTestIsNotDiagonal5);
        } else {
            console.log('Passed the 5th test!');
        }
        if (unitTestIsNotDiagonal6) {
            console.log('Failed the 6th test! Actual value: ' + unitTestIsNotDiagonal6);
        } else {
            console.log('Passed the 6th test!');
        }
        //
    };

    /**
     * Tests the _isNot1PointWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNot1PointWithMessage = function(movableId, destCoor) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isNot1PointWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isNot1Point function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNot1Point = function(movableCoor, destinationCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestMovableCoor = { x: 3, y: 3 };
        var unitTestIsNot1Point1 = unitTest._isNot1Point(unitTestMovableCoor, { x: 4, y: 3 });
        var unitTestIsNot1Point2 = unitTest._isNot1Point(unitTestMovableCoor, { x: 3, y: 4 });
        var unitTestIsNot1Point3 = unitTest._isNot1Point(unitTestMovableCoor, { x: 2, y: 3 });
        var unitTestIsNot1Point4 = unitTest._isNot1Point(unitTestMovableCoor, { x: 3, y: 2 });
        var unitTestIsNot1Point5 = unitTest._isNot1Point(unitTestMovableCoor, { x: 4, y: 2 });
        var unitTestIsNot1Point6 = unitTest._isNot1Point(unitTestMovableCoor, { x: 4, y: 4 });
        var unitTestIsNot1Point7 = unitTest._isNot1Point(unitTestMovableCoor, { x: 2, y: 4 });
        var unitTestIsNot1Point8 = unitTest._isNot1Point(unitTestMovableCoor, { x: 2, y: 2 });
        var unitTestIsNot1Point9 = unitTest._isNot1Point(unitTestMovableCoor, { x: 5, y: 3 });
        var unitTestIsNot1Point10 = unitTest._isNot1Point(unitTestMovableCoor, { x: 3, y: 5 });
        var unitTestIsNot1Point11 = unitTest._isNot1Point(unitTestMovableCoor, { x: 1, y: 3 });
        var unitTestIsNot1Point12 = unitTest._isNot1Point(unitTestMovableCoor, { x: 3, y: 1 });
        var unitTestIsNot1Point13 = unitTest._isNot1Point(unitTestMovableCoor, { x: 5, y: 1 });
        var unitTestIsNot1Point14 = unitTest._isNot1Point(unitTestMovableCoor, { x: 5, y: 5 });
        var unitTestIsNot1Point15 = unitTest._isNot1Point(unitTestMovableCoor, { x: 1, y: 5 });
        var unitTestIsNot1Point16 = unitTest._isNot1Point(unitTestMovableCoor, { x: 1, y: 1 });
        console.log('movableAbilities.unitTest.hook._isNot1Point');
        console.log('JSON.stringify(movableCoor): ' + JSON.stringify(movableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
        console.log('isNot1Point: ' + unitTest._isNot1Point(movableCoor, destinationCoor));
        if (unitTestIsNot1Point1) {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsNot1Point1);
        } else {
            console.log('Passed the 1st test!');
        }
        if (unitTestIsNot1Point2) {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsNot1Point2);
        } else {
            console.log('Passed the 2nd test!');
        }
        if (unitTestIsNot1Point3) {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsNot1Point3);
        } else {
            console.log('Passed the 3rd test!');
        }
        if (unitTestIsNot1Point4) {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsNot1Point4);
        } else {
            console.log('Passed the 4th test!');
        }
        if (unitTestIsNot1Point5) {
            console.log('Failed the 5th test! Actual value: ' + unitTestIsNot1Point5);
        } else {
            console.log('Passed the 5th test!');
        }
        if (unitTestIsNot1Point6) {
            console.log('Failed the 6th test! Actual value: ' + unitTestIsNot1Point6);
        } else {
            console.log('Passed the 6th test!');
        }
        if (unitTestIsNot1Point7) {
            console.log('Failed the 7th test! Actual value: ' + unitTestIsNot1Point7);
        } else {
            console.log('Passed the 7th test!');
        }
        if (unitTestIsNot1Point8) {
            console.log('Failed the 8th test! Actual value: ' + unitTestIsNot1Point8);
        } else {
            console.log('Passed the 8th test!');
        }
        if (unitTestIsNot1Point9) {
            console.log('Passed the 9th test!');
        } else {
            console.log('Failed the 9th test! Actual value: ' + unitTestIsNot1Point9);
        }
        if (unitTestIsNot1Point10) {
            console.log('Passed the 10th test!');
        } else {
            console.log('Failed the 10th test! Actual value: ' + unitTestIsNot1Point10);
        }
        if (unitTestIsNot1Point11) {
            console.log('Passed the 11th test!');
        } else {
            console.log('Failed the 11th test! Actual value: ' + unitTestIsNot1Point11);
        }
        if (unitTestIsNot1Point12) {
            console.log('Passed the 12th test!');
        } else {
            console.log('Failed the 12th test! Actual value: ' + unitTestIsNot1Point12);
        }
        if (unitTestIsNot1Point13) {
            console.log('Passed the 13th test!');
        } else {
            console.log('Failed the 13th test! Actual value: ' + unitTestIsNot1Point13);
        }
        if (unitTestIsNot1Point14) {
            console.log('Passed the 14th test!');
        } else {
            console.log('Failed the 14th test! Actual value: ' + unitTestIsNot1Point14);
        }
        if (unitTestIsNot1Point15) {
            console.log('Passed the 15th test!');
        } else {
            console.log('Failed the 15th test! Actual value: ' + unitTestIsNot1Point15);
        }
        if (unitTestIsNot1Point16) {
            console.log('Passed the 16th test!');
        } else {
            console.log('Failed the 16th test! Actual value: ' + unitTestIsNot1Point16);
        }
        //
    };

    /**
     * Tests the _isNotCastlingWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotCastlingWithMessage = function(movableId, destCoor) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isNotCastlingWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
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
    unitTest.hook._isNotCastling = function(movableId, destCoor, side) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isNotCastling');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        console.log('side: ' + side);
        console.log('isNotCastling: ' + unitTest._isNotCastling(movableId, destCoor, side));
        //
    };

    /**
     * Tests the _isNotCastlingYCoor function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {number} destYCoor - The destination y coordinate
     * @param {string} side - The side of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotCastlingYCoor = function(destYCoor, side) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._isNotCastlingYCoor');
        console.log('destYCoor: ' + destYCoor);
        console.log('side: ' + side);
        console.log('_isNotCastlingYCoor: ' + unitTest._isNotCastlingYCoor(destYCoor, side));
        //
    };

    /**
     * Tests the _isInvalidCastlingDistance function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {number} ox - The castling x offset
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isInvalidCastlingDistance = function(ox) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._isInvalidCastlingDistance');
        console.log('ox: ' + ox);
        console.log('isInvalidCastlingDistance: ' + unitTest._isInvalidCastlingDistance(ox));
        //
    };

    /**
     * Tests the _castlingCoor function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {number} ox - The castling x offset
     * @param {string} side - The side of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._castlingCoor = function(ox, side) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestOx1 = 2, unitTestOx2 = -2;
        var unitTestSide1 = 'White', unitTestSide2 = 'Black';
        var unitTestCastlingCoor1 = unitTest._castlingCoor(unitTestOx1, unitTestSide1);
        var unitTestCastlingCoor2 = unitTest._castlingCoor(unitTestOx2, unitTestSide1);
        var unitTestCastlingCoor3 = unitTest._castlingCoor(unitTestOx1, unitTestSide2);
        var unitTestCastlingCoor4 = unitTest._castlingCoor(unitTestOx2, unitTestSide2);
        console.log('movableAbilities.unitTest.hook._castlingCoor');
        console.log('ox: ' + ox);
        console.log('side: ' + side);
        console.log('castlingCoor: ' + unitTest._castlingCoor(ox, side));
        if (unitTestCastlingCoor1.x === 8 && unitTestCastlingCoor1.y === 1) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + JSON.stringify(unitTestCastlingCoor1));
        }
        if (unitTestCastlingCoor2.x === 1 && unitTestCastlingCoor2.y === 1) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + JSON.stringify(unitTestCastlingCoor2));
        }
        if (unitTestCastlingCoor3.x === 8 && unitTestCastlingCoor3.y === 8) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + JSON.stringify(unitTestCastlingCoor3));
        }
        if (unitTestCastlingCoor4.x === 1 && unitTestCastlingCoor4.y === 8) {
            console.log('Passed the 4th test!');
        } else {
            console.log('Failed the 4th test! Actual value: ' + JSON.stringify(unitTestCastlingCoor4));
        }
        //
    };

    /**
     * Tests the _hasCastlable function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {number} movableXCoor - The movable x coordinate
     * @param {number} destXCoor - The destination x coordinate
     * @param {object} castlableCoor - The castlable coordinates
     * @param {string} side - The side of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._hasCastlable = function(movableXCoor, destXCoor, castlableCoor, side) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._hasCastlable');
        console.log('movableXCoor: ' + movableXCoor);
        console.log('destXCoor: ' + destXCoor);
        console.log('JSON.stringify(castlableCoor): ' + JSON.stringify(castlableCoor));
        console.log('side: ' + side);
        console.log('hasCastlable: ' + unitTest._hasCastlable(movableXCoor, destXCoor, castlableCoor, side));
        //
    };

    /**
     * Tests the _castlingId function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {number} ox - The castling x offset
     * @param {string} side - The side of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._castlingId = function(ox, side) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestOx1 = 2, unitTestOx2 = -2;
        var unitTestSide1 = 'White', unitTestSide2 = 'Black';
        var unitTestCastlingId1 = unitTest._castlingId(unitTestOx1, unitTestSide1);
        var unitTestCastlingId2 = unitTest._castlingId(unitTestOx2, unitTestSide1);
        var unitTestCastlingId3 = unitTest._castlingId(unitTestOx1, unitTestSide2);
        var unitTestCastlingId4 = unitTest._castlingId(unitTestOx2, unitTestSide2);
        console.log('movableAbilities.unitTest.hook._castlingId');
        console.log('ox: ' + ox);
        console.log('side: ' + side);
        console.log('castlingId: ' + unitTest._castlingId(ox, side));
        if (unitTestCastlingId1 === 'White_Rook_2') {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestCastlingId1);
        }
        if (unitTestCastlingId2 === 'White_Rook_1') {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestCastlingId2);
        }
        if (unitTestCastlingId3 === 'Black_Rook_2') {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + unitTestCastlingId3);
        }
        if (unitTestCastlingId4 === 'Black_Rook_1') {
            console.log('Passed the 4th test!');
        } else {
            console.log('Failed the 4th test! Actual value: ' + unitTestCastlingId4);
        }
        //
    };

    /**
     * Tests the _isInvalidCastlingPath function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} castlableCoor - The castlable coordinates
     * @param {string} side - The side of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isInvalidCastlingPath = function(movableCoor, castlableCoor, side) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isInvalidCastlingPath');
        console.log('movableCoor: ' + movableCoor);
        console.log('JSON.stringify(castlableCoor): ' + JSON.stringify(castlableCoor));
        console.log('side: ' + side);
        console.log('hasCastlable: ' + unitTest._hasCastlable(movableCoor, castlableCoor, side));
        //
    };

    /**
     * Tests the _castlingPath function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} castlableCoor - The castlable coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._castlingPath = function(movableCoor, castlableCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestMovableCoor1 = { x: 5, y: 1 };
        var unitTestMovableCoor2 = { x: 5, y: 8 };
        var unitTestCastlingPath1 = unitTest._castlingPath(unitTestMovableCoor1, { x: 1, y: 1 });
        var unitTestCastlingPath2 = unitTest._castlingPath(unitTestMovableCoor1, { x: 8, y: 1 });
        var unitTestCastlingPath3 = unitTest._castlingPath(unitTestMovableCoor2, { x: 1, y: 8 });
        var unitTestCastlingPath4 = unitTest._castlingPath(unitTestMovableCoor2, { x: 8, y: 8 });
        console.log('movableAbilities.unitTest.hook._castlingPath');
        console.log('movableCoor: ' + movableCoor);
        console.log('castlableCoor: ' + castlableCoor);
        console.log('castlingPath: ' + unitTest._castlingPath(movableCoor, castlableCoor));
        function isValidCastlingPath(castlingPath) {
            if (castlingPath.length !== 3) return false;
            var movableYCoor = castlingPath[0].y;
            function isInvalidYCoor(castlingCoor) {
                return castlingCoor.y !== movableYCoor;
            };
            if (castlingPath.some(isInvalidYCoor)) return false;
            var castlableXCoor = castlingPath[2].x;
            var ox = castlableXCoor - 5, sign = ox / Math.abs(ox);
            if (castlingPath[0].x !== 5) return false;
            if (castlingPath[1].x !== 5 + sign) return false;
            return castlingPath[2].x === 5 + sign * 2;
        }
        if (isValidCastlingPath(unitTestCastlingPath1)) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + JSON.stringify(unitTestCastlingPath1));
        }
        if (isValidCastlingPath(unitTestCastlingPath2)) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + JSON.stringify(unitTestCastlingPath2));
        }
        if (isValidCastlingPath(unitTestCastlingPath3)) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + JSON.stringify(unitTestCastlingPath3));
        }
        if (isValidCastlingPath(unitTestCastlingPath4)) {
            console.log('Passed the 4th test!');
        } else {
            console.log('Failed the 4th test! Actual value: ' + JSON.stringify(unitTestCastlingPath4));
        }
        //
    };

    /**
     * Tests the _isOutOfThroughIntoCheck function
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {array} castlingPath - The list of coordinates under the castling
     * @param {string} side - The side of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isOutOfThroughIntoCheck = function(castlingPath, side) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._isOutOfThroughIntoCheck');
        console.log('JSON.stringify(castlingPath): ' + JSON.stringify(castlingPath));
        console.log('side: ' + side);
        console.log('isOutOfThroughIntoCheck: ' + unitTest._isOutOfThroughIntoCheck(castlingPath, side));
        //
    };

    /**
     * Tests the _isNot2PointStraightForwardWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNot2PointStraightForwardWithMessage = function(movableId, destCoor) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isNot2PointStraightForwardWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isNot2PointStraightForward function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destCoor - The destination coordinates
     * @param {string} side - The side of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNot2PointStraightForward = function(movableCoor, destCoor, side) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestSide1 = 'White', unitTestSide2 = 'Black';
        var unitTestMovableCoor = { x: 4, y: 4 };
        var unitTestDestCoor1 = { x: 4, y: 2 };
        var unitTestDestCoor2 = { x: 4, y: 6 };
        var unitTestIsNot2PointStraightForward1 = unitTest._isNot2PointStraightForward(unitTestMovableCoor, unitTestDestCoor1, unitTestSide1);
        var unitTestIsNot2PointStraightForward2 = unitTest._isNot2PointStraightForward(unitTestMovableCoor, { x: 4, y: 5 }, unitTestSide1);
        var unitTestIsNot2PointStraightForward3 = unitTest._isNot2PointStraightForward(unitTestMovableCoor, { x: 5, y: 6 }, unitTestSide1);
        var unitTestIsNot2PointStraightForward4 = unitTest._isNot2PointStraightForward(unitTestMovableCoor, unitTestDestCoor2, unitTestSide1);
        var unitTestIsNot2PointStraightForward5 = unitTest._isNot2PointStraightForward(unitTestMovableCoor, unitTestDestCoor2, unitTestSide2);
        var unitTestIsNot2PointStraightForward6 = unitTest._isNot2PointStraightForward(unitTestMovableCoor, { x: 4, y: 3 }, unitTestSide2);
        var unitTestIsNot2PointStraightForward7 = unitTest._isNot2PointStraightForward(unitTestMovableCoor, { x: 3, y: 2 }, unitTestSide2);
        var unitTestIsNot2PointStraightForward8 = unitTest._isNot2PointStraightForward(unitTestMovableCoor, unitTestDestCoor1, unitTestSide2);
        console.log('movableAbilities.unitTest.hook._isNot2PointStraightForward');
        console.log('JSON.stringify(movableCoor): ' + JSON.stringify(movableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destCoor));
        console.log('side: ' + side);
        console.log('isNot2PointStraightForward: ' + unitTest._isNot2PointStraightForward(movableCoor, destCoor, side));
        if (unitTestIsNot2PointStraightForward1) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsNot2PointStraightForward1);
        }
        if (unitTestIsNot2PointStraightForward2) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsNot2PointStraightForward2);
        }
        if (unitTestIsNot2PointStraightForward3) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsNot2PointStraightForward3);
        }
        if (unitTestIsNot2PointStraightForward4) {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsNot2PointStraightForward4);
        } else {
            console.log('Passed the 4th test!');
        }
        if (unitTestIsNot2PointStraightForward5) {
            console.log('Passed the 5th test!');
        } else {
            console.log('Failed the 5th test! Actual value: ' + unitTestIsNot2PointStraightForward5);
        }
        if (unitTestIsNot2PointStraightForward6) {
            console.log('Passed the 6th test!');
        } else {
            console.log('Failed the 6th test! Actual value: ' + unitTestIsNot2PointStraightForward6);
        }
        if (unitTestIsNot2PointStraightForward7) {
            console.log('Passed the 7th test!');
        } else {
            console.log('Failed the 7th test! Actual value: ' + unitTestIsNot2PointStraightForward7);
        }
        if (unitTestIsNot2PointStraightForward8) {
            console.log('Failed the 8th test! Actual value: ' + unitTestIsNot2PointStraightForward8);
        } else {
            console.log('Passed the 8th test!');
        }
        //
    };

    /**
     * Tests the _isNot1PointForwardWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNot1PointForwardWithMessage = function(movableId, destCoor) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isNot1PointForwardWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isNot1PointForward function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destCoor - The destination coordinates
     * @param {string} side - The side of the movable dom
     * @param {number} absOx - The expected absolute x offset of the movement
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNot1PointForward = function(movableCoor, destCoor, side, absOx) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestSide1 = 'White', unitTestSide2 = 'Black';
        var unitTestAbsOx1 = 1, unitTestAbsOx2 = 0;
        var unitTestMovableCoor = { x: 2, y: 3 };
        var unitTestDestCoor1 = { x: 2, y: 1 };
        var unitTestDestCoor2 = { x: 1, y: 2 };
        var unitTestDestCoor3 = { x: 2, y: 2 };
        var unitTestDestCoor4 = { x: 3, y: 2 };
        var unitTestDestCoor5 = { x: 2, y: 5 };
        var unitTestDestCoor6 = { x: 1, y: 4 };
        var unitTestDestCoor7 = { x: 2, y: 4 };
        var unitTestDestCoor8 = { x: 3, y: 4 };
        var unitTestIsNot1PointForward1 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor3, unitTestSide1, unitTestAbsOx1);
        var unitTestIsNot1PointForward2 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor3, unitTestSide1, unitTestAbsOx2);
        var unitTestIsNot1PointForward3 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor5, unitTestSide1, unitTestAbsOx1);
        var unitTestIsNot1PointForward4 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor5, unitTestSide1, unitTestAbsOx2);
        var unitTestIsNot1PointForward5 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor6, unitTestSide1, unitTestAbsOx1);
        var unitTestIsNot1PointForward6 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor6, unitTestSide1, unitTestAbsOx2);
        var unitTestIsNot1PointForward7 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor7, unitTestSide1, unitTestAbsOx1);
        var unitTestIsNot1PointForward8 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor7, unitTestSide1, unitTestAbsOx2);
        var unitTestIsNot1PointForward9 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor8, unitTestSide1, unitTestAbsOx1);
        var unitTestIsNot1PointForward10 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor8, unitTestSide1, unitTestAbsOx2);
        var unitTestIsNot1PointForward11 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor7, unitTestSide2, unitTestAbsOx1);
        var unitTestIsNot1PointForward12 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor7, unitTestSide2, unitTestAbsOx2);
        var unitTestIsNot1PointForward13 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor1, unitTestSide2, unitTestAbsOx1);
        var unitTestIsNot1PointForward14 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor1, unitTestSide2, unitTestAbsOx2);
        var unitTestIsNot1PointForward15 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor2, unitTestSide2, unitTestAbsOx1);
        var unitTestIsNot1PointForward16 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor2, unitTestSide2, unitTestAbsOx2);
        var unitTestIsNot1PointForward17 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor3, unitTestSide2, unitTestAbsOx1);
        var unitTestIsNot1PointForward18 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor3, unitTestSide2, unitTestAbsOx2);
        var unitTestIsNot1PointForward19 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor4, unitTestSide2, unitTestAbsOx1);
        var unitTestIsNot1PointForward20 = unitTest._isNot1PointForward(unitTestMovableCoor, unitTestDestCoor4, unitTestSide2, unitTestAbsOx2);
        console.log('movableAbilities.unitTest.hook._isNot1PointForward');
        console.log('JSON.stringify(movableCoor): ' + JSON.stringify(movableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destCoor));
        console.log('side: ' + side);
        console.log('absOx: ' + absOx);
        console.log('isNot1PointForward: ' + unitTest._isNot1PointForward(movableCoor, destCoor, side, absOx));
        if (unitTestIsNot1PointForward1) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsNot1PointForward1);
        }
        if (unitTestIsNot1PointForward2) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsNot1PointForward2);
        }
        if (unitTestIsNot1PointForward3) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsNot1PointForward3);
        }
        if (unitTestIsNot1PointForward4) {
            console.log('Passed the 4th test!');
        } else {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsNot1PointForward4);
        }
        if (unitTestIsNot1PointForward5) {
            console.log('Failed the 5th test! Actual value: ' + unitTestIsNot1PointForward5);
        } else {
            console.log('Passed the 5th test!');
        }
        if (unitTestIsNot1PointForward6) {
            console.log('Passed the 6th test!');
        } else {
            console.log('Failed the 6th test! Actual value: ' + unitTestIsNot1PointForward6);
        }
        if (unitTestIsNot1PointForward7) {
            console.log('Passed the 7th test!');
        } else {
            console.log('Failed the 7th test! Actual value: ' + unitTestIsNot1PointForward7);
        }
        if (unitTestIsNot1PointForward8) {
            console.log('Failed the 8th test! Actual value: ' + unitTestIsNot1PointForward8);
        } else {
            console.log('Passed the 8th test!');
        }
        if (unitTestIsNot1PointForward9) {
            console.log('Failed the 9th test! Actual value: ' + unitTestIsNot1PointForward9);
        } else {
            console.log('Passed the 9th test!');
        }
        if (unitTestIsNot1PointForward10) {
            console.log('Passed the 10th test!');
        } else {
            console.log('Failed the 10th test! Actual value: ' + unitTestIsNot1PointForward10);
        }
        if (unitTestIsNot1PointForward11) {
            console.log('Passed the 11th test!');
        } else {
            console.log('Failed the 11th test! Actual value: ' + unitTestIsNot1PointForward11);
        }
        if (unitTestIsNot1PointForward12) {
            console.log('Passed the 12th test!');
        } else {
            console.log('Failed the 12th test! Actual value: ' + unitTestIsNot1PointForward12);
        }
        if (unitTestIsNot1PointForward13) {
            console.log('Passed the 13th test!');
        } else {
            console.log('Failed the 13th test! Actual value: ' + unitTestIsNot1PointForward13);
        }
        if (unitTestIsNot1PointForward14) {
            console.log('Passed the 14th test!');
        } else {
            console.log('Failed the 14th test! Actual value: ' + unitTestIsNot1PointForward14);
        }
        if (unitTestIsNot1PointForward15) {
            console.log('Failed the 15th test! Actual value: ' + unitTestIsNot1PointForward15);
        } else {
            console.log('Passed the 15th test!');
        }
        if (unitTestIsNot1PointForward16) {
            console.log('Passed the 16th test!');
        } else {
            console.log('Failed the 16th test! Actual value: ' + unitTestIsNot1PointForward16);
        }
        if (unitTestIsNot1PointForward17) {
            console.log('Passed the 17th test!');
        } else {
            console.log('Failed the 17th test! Actual value: ' + unitTestIsNot1PointForward17);
        }
        if (unitTestIsNot1PointForward18) {
            console.log('Failed the 18th test! Actual value: ' + unitTestIsNot1PointForward18);
        } else {
            console.log('Passed the 18th test!');
        }
        if (unitTestIsNot1PointForward19) {
            console.log('Failed the 19th test! Actual value: ' + unitTestIsNot1PointForward19);
        } else {
            console.log('Passed the 19th test!');
        }
        if (unitTestIsNot1PointForward20) {
            console.log('Passed the 20th test!');
        } else {
            console.log('Failed the 20th test! Actual value: ' + unitTestIsNot1PointForward20);
        }
        //
    };

    /**
     * Tests the _isNot1PointForward function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._expectedAbsOx = function(movableId, destinationId) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._expectedAbsOx');
        console.log('movableId: ' + movableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the _isCapture function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isCapture = function(movableId, destinationId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isCapture');
        console.log('movableId: ' + movableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the _isNotEnPassantWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotEnPassantWithMessage = function(movableId, destCoor) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isNotEnPassantWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isNotEnPassant function
     * Functional cohesion/Stamp coupling/No-op
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destCoor - The destination coordinates
     * @param {string} side - The side of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotEnPassant = function(movableCoor, destCoor, side) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isNotEnPassant');
        console.log('JSON.stringify(movableCoor): ' + JSON.stringify(movableCoor));
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        console.log('side: ' + side);
        console.log('isNotEnPassant: ' + unitTest._isNotEnPassant(movableCoor, destCoor, side));
        //
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
    unitTest.hook._isNotEnPassantPosition = function(movableCoor, destCoor, side) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestMovableCoor1 = {x: 5, y: 4 };
        var unitTestMovableCoor2 = {x: 5, y: 5 };
        var unitTestDestCoor1 = {x: 4, y: 3 };
        var unitTestDestCoor2 = {x: 4, y: 6 };
        var unitTestSide1 = 'White', unitTestSide2 = 'Black';
        var unitTestIsNotEnPassantPosition1 = unitTest._isNotEnPassantPosition(unitTestMovableCoor1, unitTestDestCoor2, unitTestSide1);
        var unitTestIsNotEnPassantPosition2 = unitTest._isNotEnPassantPosition(unitTestMovableCoor2, unitTestDestCoor1, unitTestSide1);
        var unitTestIsNotEnPassantPosition3 = unitTest._isNotEnPassantPosition(unitTestMovableCoor2, {x: 3, y: 6 }, unitTestSide1);
        var unitTestIsNotEnPassantPosition4 = unitTest._isNotEnPassantPosition(unitTestMovableCoor2, unitTestDestCoor2, unitTestSide1);
        var unitTestIsNotEnPassantPosition5 = unitTest._isNotEnPassantPosition(unitTestMovableCoor2, {x: 6, y: 6 }, unitTestSide1);
        var unitTestIsNotEnPassantPosition6 = unitTest._isNotEnPassantPosition(unitTestMovableCoor2, unitTestDestCoor1, unitTestSide2);
        var unitTestIsNotEnPassantPosition7 = unitTest._isNotEnPassantPosition(unitTestMovableCoor1, unitTestDestCoor2, unitTestSide2);
        var unitTestIsNotEnPassantPosition8 = unitTest._isNotEnPassantPosition(unitTestMovableCoor1, {x: 3, y: 3 }, unitTestSide2);
        var unitTestIsNotEnPassantPosition9 = unitTest._isNotEnPassantPosition(unitTestMovableCoor1, unitTestDestCoor1, unitTestSide2);
        var unitTestIsNotEnPassantPosition10 = unitTest._isNotEnPassantPosition(unitTestMovableCoor1, {x: 6, y: 3 }, unitTestSide2);
        console.log('movableAbilities.hook._isNotEnPassantPosition');
        console.log('JSON.stringify(movableCoor): ' + JSON.stringify(movableCoor));
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        console.log('side: ' + side);
        console.log('isNotEnPassantPosition: ' + unitTest._isNotEnPassantPosition(movableCoor, destCoor, side));
        if (unitTestIsNotEnPassantPosition1) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsNotEnPassantPosition1);
        }
        if (unitTestIsNotEnPassantPosition2) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsNotEnPassantPosition2);
        }
        if (unitTestIsNotEnPassantPosition3) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsNotEnPassantPosition3);
        }
        if (unitTestIsNotEnPassantPosition4) {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsNotEnPassantPosition4);
        } else {
            console.log('Passed the 4th test!');
        }
        if (unitTestIsNotEnPassantPosition5) {
            console.log('Failed the 5th test! Actual value: ' + unitTestIsNotEnPassantPosition5);
        } else {
            console.log('Passed the 5th test!');
        }
        if (unitTestIsNotEnPassantPosition6) {
            console.log('Passed the 6th test!');
        } else {
            console.log('Failed the 6th test! Actual value: ' + unitTestIsNotEnPassantPosition6);
        }
        if (unitTestIsNotEnPassantPosition7) {
            console.log('Passed the 7th test!');
        } else {
            console.log('Failed the 7th test! Actual value: ' + unitTestIsNotEnPassantPosition7);
        }
        if (unitTestIsNotEnPassantPosition8) {
            console.log('Passed the 8th test!');
        } else {
            console.log('Failed the 8th test! Actual value: ' + unitTestIsNotEnPassantPosition8);
        }
        if (unitTestIsNotEnPassantPosition9) {
            console.log('Failed the 9th test! Actual value: ' + unitTestIsNotEnPassantPosition9);
        } else {
            console.log('Passed the 9th test!');
        }
        if (unitTestIsNotEnPassantPosition10) {
            console.log('Failed the 10th test! Actual value: ' + unitTestIsNotEnPassantPosition10);
        } else {
            console.log('Passed the 10th test!');
        }
        //
    };

})(chess.movableAbilities.hook, chess.unitTestSwitches, 
        chess.movableAbilities.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file movableAbilities.js from path js/chess/unitTests/');
//