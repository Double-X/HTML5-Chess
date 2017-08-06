// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading blockable.js!');
}
//

// This implementation js file should be placed in chineseChess

/** The implementation of the behaviors for checking against blockages
 * Sequential cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 6
 * Number of functions: 13
 * Number of variables: 0
 * @author DoubleX
 * @param {object} hook - The implementation container as the hook for plugins
 * @param {object} coordinatesAPI - The coordinates.api as a dependency
 * @param {object} domAPI - The dom.api as a dependency
 * @param {object} messageLogAPI - The messageLog.api as a dependency
 * @since v1.0
 * @version v1.0
 */
(function(hook, coordinatesAPI, domAPI, messageLogAPI) {

    'use strict';

    // The message part showing that there's no path at all
    hook.HAS_NO_PATH = ' has no path!';
    //
    // The message part showing that a path is diagonal
    hook.IS_DIAGONAL = ' is diagonal!';
    //
    // The message part showing that a path isn't diagonal
    hook.IS_NOT_DIAGONAL = " isn't diagonal!";
    //
    // The message part showing that a path isn't straight
    hook.IS_NOT_STRAIGHT = " isn't straight!";
    //
    // Real blockable blocking rules replacing the dummy one
    hook.RULES = {
        Chariot: ['_isStraightBlocked'],
        Horse: ['_isNearStraightBlocked'],
        Elephant: ['_isNearDiagonalBlocked'],
        Advisor: [],
        General: [],
        Cannon: ['_isNonCaptureStraightBlocked', '_hasNotExact1Screen'],
        Soldier: []
    };
    //
    // The message part showing that a piece needs exactly 1 screen to capture
    hook.SCREEN_MESSAGE = " doesn't have exactly 1 screen to capture ";
    //

    /**
     * Checks if any piece's lying between the movement line without capturing
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNonCaptureStraightBlocked = function(blockableId, destinationId) {
        if (hook._isCapture(blockableId, destinationId)) return false;
        return hook._isStraightBlocked(blockableId, destinationId);
    };

    /**
     * Checks if exactly 1 screen's lying between the movement line
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._hasNotExact1Screen = function(blockableId, destinationId) {
        // No screen's allowed/needed is the movement isn't a capture
        if (!hook._isCapture(blockableId, destinationId)) return false;
        //
        var blockableCoor = coordinatesAPI.coordinates(blockableId);
        var destinationCoor = coordinatesAPI.coordinates(destinationId);
        var straightPath = hook._straightPath(blockableCoor, destinationCoor);
        var domIds = hook._pathDomIds(straightPath);
        var hasNotExact1Screen = hook._pathBlockables(domIds).length !== 1;
        if (hasNotExact1Screen) {
            hook._pushScreenMessage(blockableId, destinationId);
        }
        return hasNotExact1Screen;
    };

    /**
     * Checks if the blockable is capturing the piece at the destination
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isCapture = function(blockableId, destinationId) {
        if (!domAPI.isPiece(destinationId)) return false;
        return domAPI.isDifferentSide(blockableId, destinationId);
    };

    /**
     * Pushes the message showing that there's not exactly 1 screen on the path
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    hook._pushScreenMessage = function(blockableId, destinationId) {
        var message = blockableId + hook.SCREEN_MESSAGE + destinationId + '!';
        messageLogAPI.pushMessage(hook.TAG, message);
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
        var path = hook._straightPath(blockableCoor, destinationCoor);
        return hook._isPathBlocked(hook._pathDomIds(path));
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
        var blockableId = domAPI.cellDomId(blockableCoor);
        var destinationId = domAPI.cellDomId(destinationCoor);
        hook._checkStraightPath(ox, oy, blockableId, destinationId);
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
     * Checks if the path exists and is straight
     * Functional cohesion/Functional coupling/Idempotent
     * @author DoubleX
     * @param {number} ox - The x offset from the blockable to the destination
     * @param {number} oy - The y offset from the blockable to the destination
     * @param {string} blockableId - The id of the blockableId dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    hook._checkStraightPath = function(ox, oy, blockableId, destinationId) {
        // It's supposed to be impossible to happen under any valid circumstance
        if (ox !== 0 && oy !== 0) {
            hook._onPathError(blockableId, destinationId, hook.IS_NOT_STRAIGHT);
        } else if (ox === 0 && oy === 0) {
            hook._onPathError(blockableId, destinationId, hook.HAS_NO_PATH);
        }
        //
    };

    /**
     * Checks if any piece's at the nearest point on the straight path
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isNearStraightBlocked = function(blockableId, destinationId) {
        var blockableCoor = coordinatesAPI.coordinates(blockableId);
        var destinationCoor = coordinatesAPI.coordinates(destinationId);
        var path = hook._nearStraightPath(blockableCoor, destinationCoor);
        return hook._isPathBlocked(hook._pathDomIds(path));
    };

    /**
     * Generates the straight path with length 1 nearby the blockable
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} blockableCoor - The coordinates of the blockable dom
     * @param {object} destinationCoor - The coordinates of the destination dom
     * @return {array} The array of coordinates constituting the path
     * @since v1.0
     * @version v1.0
     */
    hook._nearStraightPath = function(blockableCoor, destinationCoor) {
        var ox = destinationCoor.x - blockableCoor.x;
        var oy = destinationCoor.y - blockableCoor.y;
        var blockableId = domAPI.cellDomId(blockableCoor);
        var destinationId = domAPI.cellDomId(destinationCoor);
        hook._checkNearStraightPath(ox, oy, blockableId, destinationId);
        var absOX = Math.abs(ox), absOY = Math.abs(oy), pathXCoor, pathYCoor;
        if (absOX > absOY) {
            pathXCoor = blockableCoor.x + ox / absOX;
            pathYCoor = blockableCoor.y;
        } else {
            pathXCoor = blockableCoor.x;
            pathYCoor = blockableCoor.y + oy / absOY;
        }
        return [{ x: pathXCoor, y: pathYCoor }];
    };

    /**
     * Checks if the path exists and is not diagonal
     * Functional cohesion/Functional coupling/Idempotent
     * @author DoubleX
     * @param {number} ox - The x offset from the blockable to the destination
     * @param {number} oy - The y offset from the blockable to the destination
     * @param {string} blockableId - The id of the blockableId dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    hook._checkNearStraightPath = function(ox, oy, blockableId, destinationId) {
        // It's supposed to be impossible to happen under any valid circumstance
        if (ox === 0 && oy === 0) {
            hook._onPathError(blockableId, destinationId, hook.HAS_NO_PATH);
        } else if (Math.abs(ox) === Math.abs(oy)) {
            hook._onPathError(blockableId, destinationId, hook.IS_DIAGONAL);
        }
        //
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
    hook._isNearDiagonalBlocked = function(blockableId, destinationId) {
        var blockableCoor = coordinatesAPI.coordinates(blockableId);
        var destinationCoor = coordinatesAPI.coordinates(destinationId);
        var path = hook._nearDiagonalPath(blockableCoor, destinationCoor);
        return hook._isPathBlocked(hook._pathDomIds(path));
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
    hook._nearDiagonalPath = function(blockableCoor, destinationCoor) {
        var ox = destinationCoor.x - blockableCoor.x;
        var oy = destinationCoor.y - blockableCoor.y;
        var blockableId = domAPI.cellDomId(blockableCoor);
        var destinationId = domAPI.cellDomId(destinationCoor);
        hook._checkNearDiagonalPath(ox, oy, blockableId, destinationId);
        var absOX = Math.abs(ox), absOY = Math.abs(oy);
        var blockXCoor = blockableCoor.x + ox / absOX;
        var blockYCoor = blockableCoor.y + oy / absOY;
        return [{ x: blockXCoor, y: blockYCoor }];
    };

    /**
     * Checks if the path exists and is diagonal
     * Functional cohesion/Functional coupling/Idempotent
     * @author DoubleX
     * @param {number} ox - The x offset from the blockable to the destination
     * @param {number} oy - The y offset from the blockable to the destination
     * @param {string} blockableId - The id of the blockableId dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    hook._checkNearDiagonalPath = function(ox, oy, blockableId, destinationId) {
        // It's supposed to be impossible to happen under any valid circumstance
        if (ox === 0 && oy === 0) {
            hook._onPathError(blockableId, destinationId, hook.HAS_NO_PATH);
        } else if (Math.abs(ox) !== Math.abs(oy)) {
            hook._onPathError(blockableId, destinationId, hook.IS_NOT_DIAGONAL);
        }
        //
    };

})(chess.blockable.hook, chess.coordinates.api, chess.dom.api, 
        chess.messageLog.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file blockable.js from path js/chineseChess/');
//