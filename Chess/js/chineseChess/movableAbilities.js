// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading movableAbilities.js!');
}
//

// This implementation js file should be placed in chineseChess

/** The implementation of the movable abilities
 * Sequential cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 11
 * Number of functions: 18
 * Number of variables: 0
 * @author DoubleX
 * @param {object} hook - The implementation container as the hook for plugins
 * @param {object} coordinatesAPI - The coordinates.api as a dependency
 * @param {object} domAPI - The dom.api as a dependency
 * @since v1.0
 * @version v1.0
 */
(function(hook, coordinatesAPI, domAPI) {

    'use strict';

    // Marks the non backward definitions
    hook.IS_BACKWARDS = {
        Red: function(oy) { return oy < 0; },
        Black: function(oy) { return oy > 0; }
    };
    //
    // The message part showing the piece moves across the river
    hook.MSG_ACROSS_RIVER = 'would be across the river!';
    //
    // The message part showing the piece moves backward
    hook.MSG_BACKWARD = 'is backward!';
    //
    // The message part showing the piece moves 1 point straight
    hook.MSG_NOT_1_POINT_STRAIGHT = 'is not a straight line with length 1!';
    //
    // The message part showing the piece isn't moving ri-like
    hook.MSG_NOT_RI_LIKE = 'is not Ri-like!';
    //
    // The message part showing the piece isn't moving along a straight line
    hook.MSG_NOT_STRAIGHT_LINE = 'is not a straight line!';
    //
    // The message part showing the piece's moving out of the palace
    hook.MSG_OUT_OF_PALACE = 'would be out of the palace!';
    //
    // The messasge part showing the piece moves horizontally behind the river
    hook.MSG_SIDE_BEHIND_RIVER = 'is horizontal before crossing the river!';
    //
    // Marks the palace coordinates
    hook.PALACE_COORS = { x: [4, 5, 6], y: [1, 2, 3, 8, 9, 10] };
    //
    hook.RIVER_Y_COOR = 5.5; // Marks the river middle y coordinate
    // Marks the movement abilities for each movable type
    hook.RULES = {
        Chariot: ['_isNotStraightWithMessage'],
        Horse: ['_isNotRiLikeWithMessage'],
        Elephant: [
            '_isNot2PointDiagonalWithMessage',
            '_isAcrossRiverWithMessage'
        ],
        Advisor: [
            '_isNot1PointDiagonalWithMessage',
            '_isOutOfPalaceWithMessage'
        ],
        General: [
            '_isNot1PointStraightWithMessage',
            '_isOutOfPalaceWithMessage'
        ],
        Cannon: ['_isNotStraightWithMessage'],
        Soldier: [
            '_isBackwardWithMessage',
            '_isNot1PointStraightWithMessage',
            '_isSideBehindRiverWithMessage'
        ]
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
        return hook.RULES[domAPI.type(movableId)].some(isInvalid);
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
     * Checks if the movement isn't diagonal with length being 2 points
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNot2PointDiagonalWithMessage = function(movableId, destCoor) {
        return hook._isNotXPointDiagonalWithMessage(movableId, destCoor, 2);
    };

    /**
     * Checks if the movement isn't diagonal with length being 1 point
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNot1PointDiagonalWithMessage = function(movableId, destCoor) {
        return hook._isNotXPointDiagonalWithMessage(movableId, destCoor, 1);
    };

    /**
     * Checks if the movement isn't diagonal with the specified length
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @param {number} length - The movement path length
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotXPointDiagonalWithMessage = function(movableId, destCoor, 
            length) {
        var movableCoor = coordinatesAPI.coordinates(movableId);
        if (hook._isNotXPointDiagonal(movableCoor, destCoor, length)) {
            var message = 'is not diagonal with length ' + length + '!';
            hook._pushMessage(movableId, destCoor, message);
            return true;
        }
        return false;
    };

    /**
     * Checks if the movement isn't diagonal with the specified length
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @param {number} length - The movement path length
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotXPointDiagonal = function(movableCoor, destinationCoor, length) {
        var ox = Math.abs(destinationCoor.x - movableCoor.x);
        var oy = Math.abs(destinationCoor.y - movableCoor.y);
        return ox !== length || oy !== length;
    };

    /**
     * Checks if the movement is across the river
     * Sequential cohesion/Stamp coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isAcrossRiverWithMessage = function(movableId, destCoor) {
        var movableYCoor = coordinatesAPI.coordinates(movableId).y;
        if (hook._isAcrossRiver(movableYCoor, destCoor.y)) {
            hook._pushMessage(movableId, destCoor, hook.MSG_ACROSS_RIVER);
            return true;
        }
        return false;
    };

    /**
     * Checks if the movement is across the river
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {number} movableYCoor - The movable dom y coordinate
     * @param {number} destinationYCoor - The destination y coordinate
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isAcrossRiver = function(movableYCoor, destinationYCoor) {
        var movableRiverOY = movableYCoor - hook.RIVER_Y_COOR;
        var destRiverOY = destinationYCoor - hook.RIVER_Y_COOR;
        // Operands with different signs must have a negative product
        return movableRiverOY * destRiverOY < 0;
        //
    };

    /**
     * Checks if the movement will lead to be movable being out of the palace
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isOutOfPalaceWithMessage = function(movableId, destCoor) {
        if (hook._isOutOfPalace(destCoor)) {
            hook._pushMessage(movableId, destCoor, hook.MSG_OUT_OF_PALACE);
            return true;
        }
        return false;
    };

    /**
     * Checks if the movement will lead to be movable being out of the palace
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} destinationCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isOutOfPalace = function(destinationCoor) {
        if (hook.PALACE_COORS.x.indexOf(destinationCoor.x) < 0) return true;
        return hook.PALACE_COORS.y.indexOf(destinationCoor.y) < 0;
    };

    /**
     * Checks if the movement is backward
     * Sequential cohesion/Stamp coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isBackwardWithMessage = function(movableId, destCoor) {
        var movableYCoor = coordinatesAPI.coordinates(movableId).y;
        var side = domAPI.side(movableId);
        if (hook._isBackward(movableYCoor, destCoor.y, side)) {
            hook._pushMessage(movableId, destCoor, hook.MSG_BACKWARD);
            return true;
        }
        return false;
    };

    /**
     * Checks if the movement isn't on a straight line with length being 1 point
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNot1PointStraightWithMessage = function(movableId, destCoor) {
        var movableCoor = coordinatesAPI.coordinates(movableId);
        if (!hook._isNot1PointStraight(movableCoor, destCoor)) return false;
        hook._pushMessage(movableId, destCoor, hook.MSG_NOT_1_POINT_STRAIGHT);
        return true;
    };

    /**
     * Checks if the movement isn't on a straight line with length being 1 point
     * Sequential cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNot1PointStraight = function(movableCoor, destinationCoor) {
        var ox = Math.abs(destinationCoor.x - movableCoor.x);
        var oy = Math.abs(destinationCoor.y - movableCoor.y);
        return ox + oy !== 1; // It returns true when exactly 1 of ox or oy is 1
    };

    /**
     * Checks if the movement is horizontal before crossing the river
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isSideBehindRiverWithMessage = function(movableId, destCoor) {
        var movableXCoor = coordinatesAPI.coordinates(movableId).x;
        var side = domAPI.side(movableId);
        if (hook._isSideBehindRiver(movableXCoor, destCoor, side)) {
            hook._pushMessage(movableId, destCoor, hook.MSG_SIDE_BEHIND_RIVER);
            return true;
        }
        return false;
    };

    /**
     * Checks if the movement is horizontal before crossing the river
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {number} movableXCoor - The movable dom x coordinate
     * @param {object} destCoor - The destination coordinates
     * @param {string} side - The side of the movable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isSideBehindRiver = function(movableXCoor, destCoor, side) {
        if (Math.abs(destCoor.x - movableXCoor) === 0) return false;
        // It checks whether the destination is moving forward from the river
        return hook.IS_BACKWARDS[side](destCoor.y - hook.RIVER_Y_COOR);
        //
    };

})(chess.movableAbilities.hook, chess.coordinates.api, chess.dom.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file movableAbilities.js from path js/chineseChess/');
//