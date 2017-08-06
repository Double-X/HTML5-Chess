// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading blockable.js!');
}
//

// This implementation js file should be placed in chess

/** The implementation of the behaviors for checking against blockages
 * Sequential cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 1
 * Number of functions: 6
 * Number of variables: 0
 * @author DoubleX
 * @param {object} hook - The implementation container as the hook for plugins
 * @param {object} coordinatesAPI - The coordinates.api as a dependency
 * @since v1.0
 * @version v1.0
 */
(function(hook, coordinatesAPI) {

    'use strict';

    // Real blockable blocking rules replacing the dummy one
    hook.RULES = {
        Rook: ['_isStraightBlocked'],
        Horse: [],
        Bishop: ['_isDiagonalBlocked'],
        King: [],
        Queen: ['_isStraightBlocked', '_isDiagonalBlocked'],
        Pawn: ['_isStraightBlocked']
    };

    /**
     * Checks if any piece's lying between the movement line
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isStraightBlocked = function(blockableId, destinationId) {
        var blockableCoor = coordinatesAPI.coordinates(blockableId);
        var destinationCoor = coordinatesAPI.coordinates(destinationId);
        if (hook._isNotStraight(blockableCoor, destinationCoor)) return false;
        var path = hook._straightPath(blockableCoor, destinationCoor);
        return hook._isPathBlocked(hook._pathDomIds(path));
    };

    /**
     * Checks if the path isn't straight
     * Functional cohesion/Stamp coupling/Idempotent
     * @author DoubleX
     * @param {object} blockableCoor - The coordinates of the blockable dom
     * @param {object} destinationCoor - The coordinates of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotStraight = function(blockableCoor, destinationCoor) {
        var ox = destinationCoor.x - blockableCoor.x;
        var oy = destinationCoor.y - blockableCoor.y;
        return ox !== 0 && oy !== 0 || ox === 0 && oy === 0;
    };

    /**
     * Generates the straight path between the blockable and the destination
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} blockableCoor - The coordinates of the blockable dom
     * @param {object} destinationCoor - The coordinates of the destination dom
     * @return {array} The array of coordinates constituting the path
     * @since v1.0
     * @version v1.0
     */
    hook._straightPath = function(blockableCoor, destinationCoor) {
        var blockableXCoor = blockableCoor.x, blockableYCoor = blockableCoor.y;
        var destXCoor = destinationCoor.x, destYCoor = destinationCoor.y;
        var ox = destXCoor - blockableXCoor, oy = destYCoor - blockableYCoor;
        var pathCoors = [];
        if (ox !== 0) {
            var s = ox / Math.abs(ox);
            for (var x = blockableXCoor + s; x * s < destXCoor * s; x += s) {
                pathCoors.push({ x: x, y: blockableYCoor });
            }
        } else {
            var s = oy / Math.abs(oy);
            for (var y = blockableYCoor + s; y * s < destYCoor * s; y += s) {
                pathCoors.push({ x: blockableXCoor, y: y });
            }
        }
        return pathCoors;
    };

    /**
     * Checks if any piece's at the nearest point on the diagonal path
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isDiagonalBlocked = function(blockableId, destinationId) {
        var blockableCoor = coordinatesAPI.coordinates(blockableId);
        var destinationCoor = coordinatesAPI.coordinates(destinationId);
        if (hook._isNotDiagonal(blockableCoor, destinationCoor)) return false;
        var path = hook._diagonalPath(blockableCoor, destinationCoor);
        return hook._isPathBlocked(hook._pathDomIds(path));
    };

    /**
     * Checks if the path isn't diagonal
     * Functional cohesion/Functional coupling/Idempotent
     * @author DoubleX
     * @param {object} blockableCoor - The coordinates of the blockable dom
     * @param {object} destinationCoor - The coordinates of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNotDiagonal = function(blockableCoor, destinationCoor) {
        var blockableXCoor = blockableCoor.x, blockableYCoor = blockableCoor.y;
        var destXCoor = destinationCoor.x, destYCoor = destinationCoor.y;
        var ox = destXCoor - blockableXCoor, oy = destYCoor - blockableYCoor;
        return Math.abs(ox) !== Math.abs(oy) || ox === 0 && oy === 0;
    };

    /**
     * Generates the diagonal path with length 1 nearby the blockable
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} blockableCoor - The coordinates of the blockable dom
     * @param {object} destinationCoor - The coordinates of the destination dom
     * @return {array} The array of coordinates constituting the path
     * @since v1.0
     * @version v1.0
     */
    hook._diagonalPath = function(blockableCoor, destinationCoor) {
        var blockableXCoor = blockableCoor.x, blockableYCoor = blockableCoor.y;
        var destXCoor = destinationCoor.x, destYCoor = destinationCoor.y;
        var ox = destXCoor - blockableCoor.x, oy = destYCoor - blockableCoor.y;
        var pathCoors = [];
        var sx = ox / Math.abs(ox), sy = oy / Math.abs(oy);
        var x = blockableXCoor + sx, y = blockableYCoor + sy;
        function isEnd(x, y) {
            return x * sx < destXCoor * sx || y * sy < destYCoor * sy;
        };
        for (; isEnd(x, y); x += sx, y += sy) {
            pathCoors.push({ x: x, y: y });
        }
        return pathCoors;
    };

})(chess.blockable.hook, chess.coordinates.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file blockable.js from path js/chess/');
//