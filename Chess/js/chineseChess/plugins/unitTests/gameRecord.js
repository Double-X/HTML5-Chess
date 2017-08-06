// This's a Chinese Chess plugin and must be put in the unitTests folder

/** The gameRecord plugin implementation unit test suite
 * Functional cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 7
 * @author DoubleX
 * @param {object} hook - The implementation container to be unit tested
 * @param {object} unitTest - The unit test container extending the hook
 * @since v1.0
 * @version v1.0
 */
(function(hook, unitTest) {

    'use strict';

    /**
     * Returns a function returning the formatted current movement record
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its move recorded
     * @return {function} The requested function
     * @since v1.0
     * @version v1.0
     */
    unitTest._formattedCurrentMoveFunc = hook._formattedCurrentMoveFunc;
    hook._formattedCurrentMoveFunc = function(pieceId) {
        if (unitTest._isActive()) {
            unitTest.hook._formattedCurrentMoveFunc(pieceId);
        }
        return unitTest._formattedCurrentMoveFunc(pieceId);
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
    unitTest._hasSameColType = hook._hasSameColType;
    hook._hasSameColType = function(pieceId) {
        if (unitTest._isActive()) unitTest.hook._hasSameColType(pieceId);
        return unitTest._hasSameColType(pieceId);
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
    unitTest._formattedCurrentMove = hook._formattedCurrentMove;
    hook._formattedCurrentMove = function(pieceId, oldLocation, newLocation) {
        if (unitTest._isActive()) {
            unitTest.hook._formattedCurrentMove(pieceId, oldLocation, newLocation);
        }
        return unitTest._formattedCurrentMove(pieceId, oldLocation, newLocation);
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
    unitTest._speciallyFormattedCurrentMove = hook._speciallyFormattedCurrentMove;
    hook._speciallyFormattedCurrentMove = function(pieceId, oldLocation, 
    newLocation) {
        if (unitTest._isActive()) {
            unitTest.hook._speciallyFormattedCurrentMove(pieceId, oldLocation, newLocation);
        }
        return unitTest._speciallyFormattedCurrentMove(pieceId, oldLocation, newLocation);
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
    unitTest._verticalPositionText = hook._verticalPositionText;
    hook._verticalPositionText = function(pieceId) {
        if (unitTest._isActive()) unitTest.hook._verticalPositionText(pieceId);
        return unitTest._verticalPositionText(pieceId);
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
    unitTest._positionText = hook._positionText;
    hook._positionText = function(pieceIndex, pieceCount) {
        if (unitTest._isActive()) {
            unitTest.hook._positionText(pieceIndex, pieceCount);
        }
        return unitTest._positionText(pieceIndex, pieceCount);
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
    unitTest._sameColTypePieces = hook._sameColTypePieces;
    hook._sameColTypePieces = function(pieceId) {
        if (unitTest._isActive()) unitTest.hook._sameColTypePieces(pieceId);
        return unitTest._sameColTypePieces(pieceId);
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
    unitTest._isSameTypeFunc = hook._isSameTypeFunc;
    hook._isSameTypeFunc = function(pieceId) {
        if (unitTest._isActive()) unitTest.hook._isSameTypeFunc(pieceId);
        return unitTest._isSameTypeFunc(pieceId);
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
    unitTest._isSameColFunc = hook._isSameColFunc;
    hook._isSameColFunc = function(pieceId) {
        if (unitTest._isActive()) unitTest.hook._isSameColFunc(pieceId);
        return unitTest._isSameColFunc(pieceId);
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
    unitTest._sameColTypePiecesSortFunc = hook._sameColTypePiecesSortFunc;
    hook._sameColTypePiecesSortFunc = function(side) {
        if (unitTest._isActive()) {
            unitTest.hook._sameColTypePiecesSortFunc(side);
        }
        return unitTest._sameColTypePiecesSortFunc(side);
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
    unitTest._formattedXCoordinate = hook._formattedXCoordinate;
    hook._formattedXCoordinate = function(side, xCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._formattedXCoordinate(side, xCoor);
        }
        return unitTest._formattedXCoordinate(side, xCoor);
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
    unitTest._formattedAbsYOffset = hook._formattedAbsYOffset;
    hook._formattedAbsYOffset = function(side, absYOffset) {
        if (unitTest._isActive()) {
            unitTest.hook._formattedAbsYOffset(side, absYOffset);
        }
        return unitTest._formattedAbsYOffset(side, absYOffset);
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
    unitTest._formattedHorizontalMove = hook._formattedHorizontalMove;
    hook._formattedHorizontalMove = function(pieceText, oldXText, newXText) {
        if (unitTest._isActive()) {
            unitTest.hook._formattedHorizontalMove(pieceText, oldXText, newXText);
        }
        return unitTest._formattedHorizontalMove(pieceText, oldXText, newXText);
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
    unitTest._verticalMoveFunc = hook._verticalMoveFunc;
    hook._verticalMoveFunc = function(side, yOffset) {
        if (unitTest._isActive()) {
            unitTest.hook._verticalMoveFunc(side, yOffset);
        }
        return unitTest._verticalMoveFunc(side, yOffset);
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
    unitTest._formattedForwardMove = hook._formattedForwardMove;
    hook._formattedForwardMove = function(pieceText, oldXText, yOffset) {
        // Ensures the output's the expected one with respect of the given input
        if (unitTest._isActive()) {
            unitTest.hook._formattedForwardMove(pieceText, oldXText, yOffset);
        }
        //
        return unitTest._formattedForwardMove(pieceText, oldXText, yOffset);
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
    unitTest._formattedBackwardMove = hook._formattedBackwardMove;
    hook._formattedBackwardMove = function(pieceText, oldXText, yOffset) {
        if (unitTest._isActive()) {
            unitTest.hook._formattedBackwardMove(pieceText, oldXText, yOffset);
        }
        return unitTest._formattedBackwardMove(pieceText, oldXText, yOffset);
    };

    /**
     * Tests the _formattedCurrentMoveFunc function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its move recorded
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._formattedCurrentMoveFunc = function(pieceId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.gameRecord.unitTest.hook._formattedCurrentMoveFunc pieceId: ' + pieceId);
        //
    };

    /**
     * Tests the _hasSameColType function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to be checked
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._hasSameColType = function(pieceId) {
        // The function's too trivial to be unit tested
        console.log('plugins.gameRecord.unitTest.hook._hasSameColType');
        console.log('pieceId: ' + pieceId);
        console.log('hasSameColType: ' + unitTest._hasSameColType(pieceId));
        //
    };

    /**
     * Tests the _formattedCurrentMove function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its move recorded
     * @param {object} oldLocation - The piece old location
     * @param {object} newLocation - The piece new location
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._formattedCurrentMove = function(pieceId, oldLocation, newLocation) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.gameRecord.unitTest.hook._formattedCurrentMove');
        console.log('pieceId: ' + pieceId);
        console.log('oldLocation: ' + oldLocation);
        console.log('newLocation: ' + newLocation);
        console.log('formattedCurrentMove: ' + unitTest._formattedCurrentMove(pieceId, oldLocation, newLocation));
        //
    };

    /**
     * Tests the _speciallyFormattedCurrentMove function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its move recorded
     * @param {object} oldLocation - The piece old location
     * @param {object} newLocation - The piece new location
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._speciallyFormattedCurrentMove = function(pieceId, oldLocation, 
    newLocation) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.gameRecord.unitTest.hook._speciallyFormattedCurrentMove');
        console.log('pieceId: ' + pieceId);
        console.log('oldLocation: ' + oldLocation);
        console.log('newLocation: ' + newLocation);
        console.log('speciallyFormattedCurrentMove: ' + unitTest._speciallyFormattedCurrentMove(pieceId, oldLocation, newLocation));
        //
    };

    /**
     * Tests the _verticalPositionText function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its move recorded
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._verticalPositionText = function(pieceId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.gameRecord.unitTest.hook._verticalPositionText');
        console.log('pieceId: ' + pieceId);
        console.log('verticalPositionText: ' + unitTest._verticalPositionText(pieceId));
        //
    };

    /**
     * Tests the _positionText function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {number} pieceIndex - The vertical position index of the piece
     * @param {number} pieceCount - The no. of piece with same type on same col
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._positionText = function(pieceIndex, pieceCount) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestPieceCount = 5;
        var unitTestPositionText1 = unitTest._positionText(0, unitTestPieceCount);
        var unitTestPositionText2 = unitTest._positionText(1, unitTestPieceCount);
        var unitTestPositionText3 = unitTest._positionText(2, unitTestPieceCount);
        var unitTestPositionText4 = unitTest._positionText(3, unitTestPieceCount);
        var unitTestPositionText5 = unitTest._positionText(4, unitTestPieceCount);
        console.log('plugins.gameRecord.unitTest.hook._positionText');
        console.log('pieceIndex: ' + pieceIndex);
        console.log('pieceCount: ' + pieceCount);
        console.log('positionText: ' + unitTest._positionText(pieceIndex, pieceCount));
        if (unitTestPositionText1 === hook.TEXT_FRONT_POSITION) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestPositionText1);
        }
        if (unitTestPositionText2 === hook.TEXT_MID_POSITION) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestPositionText2);
        }
        if (unitTestPositionText3 === hook.TEXT_MID_POSITION) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + unitTestPositionText3);
        }
        if (unitTestPositionText4 === hook.TEXT_MID_POSITION) {
            console.log('Passed the 4th test!');
        } else {
            console.log('Failed the 4th test! Actual value: ' + unitTestPositionText4);
        }
        if (unitTestPositionText5 === hook.TEXT_BACK_POSITION) {
            console.log('Passed the 5th test!');
        } else {
            console.log('Failed the 5th test! Actual value: ' + unitTestPositionText5);
        }
        //
    };

    /**
     * Tests the _sameColTypePieces function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to be compared with
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._sameColTypePieces = function(pieceId) {
        // The function's too trivial to be unit tested
        console.log('plugins.gameRecord.unitTest.hook._sameColTypePieces');
        console.log('pieceId: ' + pieceId);
        console.log('sameColTypePieces: ' + unitTest._sameColTypePieces(pieceId));
        //
    };

    /**
     * Tests the _isSameTypeFunc function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its type compared
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isSameTypeFunc = function(pieceId) {
        // The function's too trivial to be unit tested
        console.log('plugins.gameRecord.unitTest.hook._isSameTypeFunc pieceId: ' + pieceId);
        //
    };

    /**
     * Tests the _isSameColFunc function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its col compared
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isSameColFunc = function(pieceId) {
        // The function's too trivial to be unit tested
        console.log('plugins.gameRecord.unitTest.hook._isSameColFunc pieceId: ' + pieceId);
        //
    };

    /**
     * Tests the _sameColTypePiecesSortFunc function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side of all the pieces to be sorted
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._sameColTypePiecesSortFunc = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.gameRecord.unitTest.hook._sameColTypePiecesSortFunc side: ' + side);
        //
    };

    /**
     * Tests the _formattedXCoordinate function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its current movement to be recorded
     * @param {number} xCoor - The x coordinate to be formatted
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._formattedXCoordinate = function(side, xCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestXCoor = 1;
        var unitTestFroamttedXCoordinate1 = unitTest._formattedXCoordinate('Red', unitTestXCoor);
        var unitTestFroamttedXCoordinate2 = unitTest._formattedXCoordinate('Black', unitTestXCoor);
        console.log('plugins.gameRecord.unitTest.hook._formattedXCoordinate');
        console.log('side: ' + side);
        console.log('xCoor: ' + xCoor);
        console.log('formattedXCoordinate: ' + unitTest._formattedXCoordinate(side, xCoor));
        if (unitTestFroamttedXCoordinate1 === '\u4e00') {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestFroamttedXCoordinate1);
        }
        if (unitTestFroamttedXCoordinate2 === '9') {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestFroamttedXCoordinate2);
        }
        //
    };

    /**
     * Tests the _formattedXCoordinate function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its current movement to be recorded
     * @param {number} absYOffset - The absolute y offset to be formatted
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._formattedAbsYOffset = function(side, absYOffset) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestAbsYOffset = 1;
        var unitTestFormattedAbsYOffset1 = unitTest._formattedAbsYOffset('Red', unitTestAbsYOffset);
        var unitTestFormattedAbsYOffset2 = unitTest._formattedAbsYOffset('Black', unitTestAbsYOffset);
        console.log('plugins.gameRecord.unitTest.hook._formattedAbsYOffset');
        console.log('side: ' + side);
        console.log('absYOffset: ' + absYOffset);
        console.log('formattedAbsYOffset: ' + unitTest._formattedAbsYOffset(side, absYOffset));
        if (unitTestFormattedAbsYOffset1 === '\u4e00') {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestFormattedAbsYOffset1);
        }
        if (unitTestFormattedAbsYOffset2 === '1') {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestFormattedAbsYOffset2);
        }
        //
    };

    /**
     * Tests the _formattedHorizontalMove function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceText - The name of the specified piece
     * @param {object} oldXText - The old x coordinate text
     * @param {object} newXText - The new x coordinate text
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._formattedHorizontalMove = function(pieceText, oldXText, newXText) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestFormattedHorizontalMove1 = unitTest._formattedHorizontalMove('?', '\u4e00', '九');
        var unitTestFormattedHorizontalMove2 = unitTest._formattedHorizontalMove('車', '1', '9');
        console.log('plugins.gameRecord.unitTest.hook._formattedHorizontalMove');
        console.log('pieceText: ' + pieceText);
        console.log('oldXText: ' + oldXText);
        console.log('newXText: ' + newXText);
        console.log('formattedHorizontalMove: ' + unitTest._formattedHorizontalMove(pieceText, oldXText, newXText));
        if (unitTestFormattedHorizontalMove1 === '?\u4e00' + hook.TEXT_HORIZONTAL_MOVE + '九') {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestFormattedHorizontalMove1);
        }
        if (unitTestFormattedHorizontalMove2 === '車1' + hook.TEXT_HORIZONTAL_MOVE + '9') {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestFormattedHorizontalMove2);
        }
        //
    };

    /**
     * Tests the _verticalMoveFunc function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its current movement to be recorded
     * @param {number} yOffset - The y coordinate offset in the movement
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._verticalMoveFunc = function(side, yOffset) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestSide1 = 'Red', unitTestSide2 = 'Black';
        var unitTestYOffset1 = 1, unitTestYOffset2 = -1;
        var unitTestVerticalMoveFunc1 = unitTest._verticalMoveFunc(unitTestSide1, unitTestYOffset1);
        var unitTestVerticalMoveFunc2 = unitTest._verticalMoveFunc(unitTestSide1, unitTestYOffset2);
        var unitTestVerticalMoveFunc3 = unitTest._verticalMoveFunc(unitTestSide2, unitTestYOffset1);
        var unitTestVerticalMoveFunc4 = unitTest._verticalMoveFunc(unitTestSide2, unitTestYOffset2);
        var expectedVerticalMoveFunc1 = '_formattedForwardMove';
        var expectedVerticalMoveFunc2 = '_formattedBackwardMove';
        console.log('plugins.gameRecord.unitTest.hook._verticalMoveFunc');
        console.log('side: ' + side);
        console.log('yOffset: ' + yOffset);
        console.log('verticalMoveFunc: ' + unitTest._verticalMoveFunc(side, yOffset));
        if (unitTestVerticalMoveFunc1 === expectedVerticalMoveFunc1) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestVerticalMoveFunc1);
        }
        if (unitTestVerticalMoveFunc2 === expectedVerticalMoveFunc2) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestVerticalMoveFunc2);
        }
        if (unitTestVerticalMoveFunc3 === expectedVerticalMoveFunc2) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + unitTestVerticalMoveFunc3);
        }
        if (unitTestVerticalMoveFunc4 === expectedVerticalMoveFunc1) {
            console.log('Passed the 4th test!');
        } else {
            console.log('Failed the 4th test! Actual value: ' + unitTestVerticalMoveFunc4);
        }
        //
    };

    /**
     * Tests the _formattedForwardMove function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceText - The name of the specified piece
     * @param {object} oldXText - The old x coordinate text
     * @param {number} yOffset - The y coordinate offset in the movement
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._formattedForwardMove = function(pieceText, oldXText, yOffset) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestFormattedForwardMove1 = unitTest._formattedForwardMove('?', '\u4e00', '九');
        var unitTestFormattedForwardMove2 = unitTest._formattedForwardMove('車', '1', '9');
        console.log('plugins.gameRecord.unitTest.hook._formattedForwardMove');
        console.log('pieceText: ' + pieceText);
        console.log('oldXText: ' + oldXText);
        console.log('yOffset: ' + yOffset);
        console.log('formattedForwardMove: ' + unitTest._formattedForwardMove(pieceText, oldXText, yOffset));
        if (unitTestFormattedForwardMove1 === '?\u4e00' + hook.TEXT_FORWARD_MOVE + '九') {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestFormattedForwardMove1);
        }
        if (unitTestFormattedForwardMove2 === '車1' + hook.TEXT_FORWARD_MOVE + '9') {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestFormattedForwardMove2);
        }
        //
    };

    /**
     * Tests the _formattedBackwardMove function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceText - The name of the specified piece
     * @param {object} oldXText - The old x coordinate text
     * @param {number} yOffset - The y coordinate offset in the movement
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._formattedBackwardMove = function(pieceText, oldXText, yOffset) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestFormattedBackwardMove1 = unitTest._formattedBackwardMove('?', '\u4e00', '九');
        var unitTestFormattedBackwardMove2 = unitTest._formattedBackwardMove('車', '1', '9');
        console.log('plugins.gameRecord.unitTest.hook._formattedBackwardMove');
        console.log('pieceText: ' + pieceText);
        console.log('oldXText: ' + oldXText);
        console.log('yOffset: ' + yOffset);
        console.log('formattedBackwardMove: ' + unitTest._formattedBackwardMove(pieceText, oldXText, yOffset));
        if (unitTestFormattedBackwardMove1 === '?\u4e00' + hook.TEXT_BACKWARD_MOVE + '九') {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestFormattedBackwardMove1);
        }
        if (unitTestFormattedBackwardMove2 === '車1' + hook.TEXT_BACKWARD_MOVE + '9') {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestFormattedBackwardMove2);
        }
        //
    };

})(chess.plugins.abstractChess.gameRecord.hook, 
        chess.plugins.abstractChess.gameRecord.unitTest);