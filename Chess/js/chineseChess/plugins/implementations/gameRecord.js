// This's an Chinese Chess plugin and must be put in the implementations folder

/** The implementation of the gameRecord plugin
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 9
 * Number of functions: 16
 * Number of variables: 0
 * @author DoubleX
 * @param {object} hook - The implementation container as the hook for plugins
 * @param {object} coordinatesAPI - The coordinates.api as a dependency
 * @param {object} domAPI - The dom.api as a dependency
 * @param {object} checkableHook - The checkable.hook as a dependency
 * @since v1.0
 * @version v1.0
 */
(function(hook, coordinatesAPI, domAPI, checkableHook) {

    'use strict';

    // Marks the list of formatted coordinates used in recording piece movements
    hook.FORMATTED_COORDINATES = [
        '\u4e00', // 一
        '\u4e8c', // 二
        '\u4e09', // 三
        '\u56db', // 四
        '\u4e94', // 五
        '\u516d', // 六
        '\u4e03', // 七
        '\u516b', // 八
        '\u4e5d' // 九
    ];
    //
    // Marks whether a piece type movement will have both movement components
    hook.HAS_BOTH_MOVEMENT_COMPONENTS = {
        Chariot: false,
        Horse: true,
        Elephant: true,
        Advisor: true,
        General: false,
        Cannon: false,
        Soldier: false
    };
    //
    hook.NUM_CHESSBOARD_COLS = 10; // The number of rows in the chessboard
    // The text used to indicate the specified piece's the most backward one
    hook.TEXT_BACK_POSITION = '\u5f8c'; // 後
    //
    // The text used to indicate a movement with a backward vertical component
    hook.TEXT_BACKWARD_MOVE = '\u9000'; // 退
    //
    // The text used to indicate a movement with a forward vertical component
    hook.TEXT_FORWARD_MOVE = '\u9032'; // 進
    //
    // The text used to indicate the specified piece's the most forward one
    hook.TEXT_FRONT_POSITION = '\u524d'; // 前
    //
    // The text used to indicate a purely horizontal movement
    hook.TEXT_HORIZONTAL_MOVE = '\u5e73'; // 平
    //
    // The text used to indicate the specified piece's one of the middle ones
    hook.TEXT_MID_POSITION = '\u4e2d'; // 中
    //

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
        if (!hook._hasSameColType(pieceId)) return hook._formattedCurrentMove;
        return hook._speciallyFormattedCurrentMove;
    };

    /**
     * Checks if the specified piece has the same type on the same column
     * Functional cohesion/Message coupling/Referentially transparent
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to be checked
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._hasSameColType = function(pieceId) {
        // hook._sameColTypePieces always contains the specified pieceId
        return hook._sameColTypePieces(pieceId).length > 1;
        //
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
    hook._formattedCurrentMove = function(pieceId, oldLocation, newLocation) {
        var side = domAPI.side(pieceId);
        var pieceText = domAPI.dom(pieceId).textContent;
        var yOffset = newLocation.y - oldLocation.y;
        var oldXText = hook._formattedXCoordinate(side, oldLocation.x);
        var newXText = hook._formattedXCoordinate(side, newLocation.x);
        if (yOffset === 0) {
            return hook._formattedHorizontalMove(pieceText, oldXText, newXText);
        }
        var verticalMove = hook._verticalMoveFunc(side, yOffset);
        if (hook.HAS_BOTH_MOVEMENT_COMPONENTS[domAPI.type(pieceId)]) {
            return hook[verticalMove](pieceText, oldXText, newXText);
        }
        var yOffsetText = hook._formattedAbsYOffset(side, Math.abs(yOffset));
        return hook[verticalMove](pieceText, oldXText, yOffsetText);
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
    hook._speciallyFormattedCurrentMove = function(pieceId, oldLocation, 
    newLocation) {
        var side = domAPI.side(pieceId);
        var posText = hook._verticalPositionText(pieceId);
        var pieceText = domAPI.dom(pieceId).textContent;
        var yOffset = newLocation.y - oldLocation.y;
        var newXText = hook._formattedXCoordinate(side, newLocation.x);
        if (yOffset === 0) {
            return hook._formattedHorizontalMove(posText, pieceText, newXText);
        }
        var verticalMove = hook._verticalMoveFunc(side, yOffset);
        if (hook.HAS_BOTH_MOVEMENT_COMPONENTS[domAPI.type(pieceId)]) {
            return hook[verticalMove](posText, pieceText, newXText);
        }
        var yOffsetText = hook._formattedAbsYOffset(side, Math.abs(yOffset));
        return hook[verticalMove](posText, pieceText, yOffsetText);
    };

    /**
     * Returns the string showing the vertical position of the specified piece
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its move recorded
     * @return {string} The formatted piece relative vertical position
     * @since v1.0
     * @version v1.0
     */
    hook._verticalPositionText = function(pieceId) {
        var sameColTypePieces = hook._sameColTypePieces(pieceId);
        var pieceCount = sameColTypePieces.length, side = domAPI.side(pieceId);
        sameColTypePieces.sort(hook._sameColTypePiecesSortFunc(side));
        var pieceIndex = sameColTypePieces.indexOf(pieceId);
        return hook._positionText(pieceIndex, pieceCount);
    };

    /**
     * Returns the string showing the position of the specified piece
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {number} pieceIndex - The vertical position index of the piece
     * @param {number} pieceCount - The no. of piece with same type on same col
     * @return {string} The formatted piece relative vertical position
     * @since v1.0
     * @version v1.0
     */
    hook._positionText = function(pieceIndex, pieceCount) {
        if (pieceIndex === 0) return hook.TEXT_FRONT_POSITION;
        if (pieceIndex === pieceCount - 1) return hook.TEXT_BACK_POSITION;
        // Having 4 soldiers on the same col's too rare and troublesome to solve
        return hook.TEXT_MID_POSITION;
        //
    };

    /**
     * Returns an array of pieces having the same col and type of the passed one
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to be compared with
     * @return {array} The requested array
     * @since v1.0
     * @version v1.0
     */
    hook._sameColTypePieces = function(pieceId) {
        var sameColTypes = checkableHook._checkableList[domAPI.side(pieceId)];
        sameColTypes = sameColTypes.filter(hook._isSameTypeFunc(pieceId));
        return sameColTypes.filter(hook._isSameColFunc(pieceId));
    };

    /**
     * Returns a function checking if the specified pieces are of the same type
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its type compared
     * @return {function} The requested function
     * @since v1.0
     * @version v1.0
     */
    hook._isSameTypeFunc = function(pieceId) {
        // Optimizes the time performances by reducing variable accesses
        var type = domAPI.type, pieceType = type(pieceId);
        //
        return function(pId) { return type(pId) === pieceType; };
    };

    /**
     * Returns a function checking if the specified pieces are on the same col
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its col compared
     * @return {function} The requested function
     * @since v1.0
     * @version v1.0
     */
    hook._isSameColFunc = function(pieceId) {
        // Optimizes the time performances by reducing variable accesses
        var coordinates = coordinatesAPI.coordinates;
        //
        var pieceX = coordinates(pieceId).x;
        return function(pId) { return coordinates(pId).x === pieceX; };
    };

    /**
     * Returns a function sorting the pieces according to the specified side
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} side - The side of all the pieces to be sorted
     * @return {function} The requested function
     * @since v1.0
     * @version v1.0
     */
    hook._sameColTypePiecesSortFunc = function(side) {
        // Optimizes the time performances by reducing variable accesses
        var coordinates = coordinatesAPI.coordinates;
        //
        var sign = side === hook.SIDES.startingSide ? -1 : 1;
        return function(a, b) {
            return (coordinates(a).y - coordinates(b).y) * sign;
        };
    };

    /**
     * Returns the formatted x coordinate with respect to the specified side
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} side - The side with its current movement to be recorded
     * @param {number} xCoor - The x coordinate to be formatted
     * @return {string} The formatted coordinate with respect to the side
     * @since v1.0
     * @version v1.0
     */
    hook._formattedXCoordinate = function(side, xCoor) {
        if (side === hook.SIDES.startingSide) {
            return hook.FORMATTED_COORDINATES[xCoor - 1];
        }
        return (hook.NUM_CHESSBOARD_COLS - xCoor).toString();
    };

    /**
     * Returns the formatted coor offset with respect to the specified side
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} side - The side with its current movement to be recorded
     * @param {number} absYOffset - The absolute y offset to be formatted
     * @return {string} The formatted coordinate with respect to the side
     * @since v1.0
     * @version v1.0
     */
    hook._formattedAbsYOffset = function(side, absYOffset) {
        if (side !== hook.SIDES.startingSide) return absYOffset.toString();
        return hook.FORMATTED_COORDINATES[absYOffset - 1];
    };

    /**
     * Returns the formatted record of a horizontal move by the specified piece
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} pieceText - The name of the specified piece
     * @param {object} oldXText - The old x coordinate text
     * @param {object} newXText - The new x coordinate text
     * @return {string} The formatted horizontal movement record
     * @since v1.0
     * @version v1.0
     */
    hook._formattedHorizontalMove = function(pieceText, oldXText, newXText) {
        return pieceText + oldXText + hook.TEXT_HORIZONTAL_MOVE + newXText;
    };

    /**
     * Returns the name of the vertical movement function to be called
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} side - The side with its current movement to be recorded
     * @param {number} yOffset - The y coordinate offset in the movement
     * @return {string} The vertical movement function name
     * @since v1.0
     * @version v1.0
     */
    hook._verticalMoveFunc = function(side, yOffset) {
        var sign = yOffset * (side === hook.SIDES.startingSide ? 1 : -1);
        return sign > 0 ? '_formattedForwardMove' : '_formattedBackwardMove';
    };

    /**
     * Returns the formatted record of a forward move by the specified piece
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} pieceText - The name of the specified piece
     * @param {object} oldXText - The old x coordinate text
     * @param {number} yOffset - The y coordinate offset in the movement
     * @return {string} The formatted vertical movement record
     * @since v1.0
     * @version v1.0
     */
    hook._formattedForwardMove = function(pieceText, oldXText, yOffset) {
        return pieceText + oldXText + hook.TEXT_FORWARD_MOVE + yOffset;
    };

    /**
     * Returns the formatted record of a backward move by the specified piece
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} pieceText - The name of the specified piece
     * @param {object} oldXText - The old x coordinate text
     * @param {number} yOffset - The y coordinate offset in the movement
     * @return {string} The formatted vertical movement record
     * @since v1.0
     * @version v1.0
     */
    hook._formattedBackwardMove = function(pieceText, oldXText, yOffset) {
        return pieceText + oldXText + hook.TEXT_BACKWARD_MOVE + yOffset;
    };

})(chess.plugins.abstractChess.gameRecord.hook, chess.coordinates.api, 
        chess.dom.api, chess.checkable.hook);