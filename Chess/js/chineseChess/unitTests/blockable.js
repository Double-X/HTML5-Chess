// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading blockable.js!');
}
//

// This unit test js file should be placed in chineseChess/unitTests

/** The blockable implementation unit test suite
 * Sequential cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 4
 * @author DoubleX
 * @param {object} hook - The implementation container to be unit tested
 * @param {object} unitTestSwitches - The switch setting the unit test status
 * @param {object} unitTest - The unit test container extending the hook
 * @since v1.0
 * @version v1.0
 */
(function(hook, unitTestSwitches, unitTest) {

    'use strict';

    // The mocks replacing the corresponding real api dependencies
    var mocks = {
        messageLogAPI: {
            pushMessage: function(tag, content) {
                mocks.messageLogAPI.isPushMessageCalled = true;
            },
            isPushMessageCalled: false
        }
    };
    //

    /**
     * Checks if the unit tests should be run
     * Functional cohesion/Message coupling/Referentially transparent
     * @author DoubleX
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isActive = function() { return unitTestSwitches.blockable; };

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
    unitTest._isNonCaptureStraightBlocked = hook._isNonCaptureStraightBlocked;
    hook._isNonCaptureStraightBlocked = function(blockableId, destinationId) {
        // The function's about control flow and shouldn't be unit tested
        if (unitTest._isActive()) {
            unitTest.hook._isNonCaptureStraightBlocked(blockableId, destinationId);
        }
        return unitTest._isNonCaptureStraightBlocked(blockableId, destinationId);
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
    unitTest._hasNotExact1Screen = hook._hasNotExact1Screen;
    hook._hasNotExact1Screen = function(blockableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook._hasNotExact1Screen(blockableId, destinationId);
        }
        return unitTest._hasNotExact1Screen(blockableId, destinationId);
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
    unitTest._isCapture = hook._isCapture;
    hook._isCapture = function(blockableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook._isCapture(blockableId, destinationId);
        }
        return unitTest._isCapture(blockableId, destinationId);
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
    unitTest._pushScreenMessage = hook._pushScreenMessage;
    hook._pushScreenMessage = function(blockableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook._pushScreenMessage(blockableId, destinationId);
        }
        unitTest._pushScreenMessage(blockableId, destinationId);
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
    unitTest._isStraightBlocked = hook._isStraightBlocked;
    hook._isStraightBlocked = function(blockableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook._isStraightBlocked(blockableId, destinationId);
        }
        return unitTest._isStraightBlocked(blockableId, destinationId);
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
    unitTest._straightPath = hook._straightPath;
    hook._straightPath = function(blockableCoor, destinationCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._straightPath(blockableCoor, destinationCoor);
        }
        return unitTest._straightPath(blockableCoor, destinationCoor);
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
    unitTest._checkStraightPath = hook._checkStraightPath;
    hook._checkStraightPath = function(ox, oy, blockableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook._checkStraightPath(ox, oy, blockableId, destinationId);
        }
        unitTest._checkStraightPath(ox, oy, blockableId, destinationId);
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
    unitTest._isNearStraightBlocked = hook._isNearStraightBlocked;
    hook._isNearStraightBlocked = function(blockableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook._isNearStraightBlocked(blockableId, destinationId);
        }
        return unitTest._isNearStraightBlocked(blockableId, destinationId);
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
    unitTest._nearStraightPath = hook._nearStraightPath;
    hook._nearStraightPath = function(blockableCoor, destinationCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._nearStraightPath(blockableCoor, destinationCoor);
        }
        return unitTest._nearStraightPath(blockableCoor, destinationCoor);
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
    unitTest._checkNearStraightPath = hook._checkNearStraightPath;
    hook._checkNearStraightPath = function(ox, oy, blockableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook._checkNearStraightPath(ox, oy, blockableId, destinationId);
        }
        unitTest._checkNearStraightPath(ox, oy, blockableId, destinationId);
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
    unitTest._isNearDiagonalBlocked = hook._isNearDiagonalBlocked;
    hook._isNearDiagonalBlocked = function(blockableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook._isNearDiagonalBlocked(blockableId, destinationId);
        }
        return unitTest._isNearDiagonalBlocked(blockableId, destinationId);
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
    unitTest._nearDiagonalPath = hook._nearDiagonalPath;
    hook._nearDiagonalPath = function(blockableCoor, destinationCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._nearDiagonalPath(blockableCoor, destinationCoor);
        }
        return unitTest._nearDiagonalPath(blockableCoor, destinationCoor);
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
    unitTest._checkNearDiagonalPath = hook._checkNearDiagonalPath;
    hook._checkNearDiagonalPath = function(ox, oy, blockableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook._checkNearDiagonalPath(ox, oy, blockableId, destinationId);
        }
        unitTest._checkNearDiagonalPath(ox, oy, blockableId, destinationId);
    };

    /**
     * Tests the _isNonCaptureStraightBlocked function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNonCaptureStraightBlocked = function(blockableId, destinationId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('blockable.unitTest.hook._isNonCaptureStraightBlocked');
        console.log('blockableId: ' + blockableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the _hasNotExact1Screen function
     * Sequential cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._hasNotExact1Screen = function(blockableId, destinationId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('blockable.unitTest.hook._hasNotExact1Screen');
        console.log('blockableId: ' + blockableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the _isCapture function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isCapture = function(blockableId, destinationId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('blockable.unitTest.hook._isCapture');
        console.log('blockableId: ' + blockableId);
        console.log('destinationId: ' + destinationId);
        console.log('isCapture: ' + unitTest._isCapture(blockableId, destinationId));
        //
    };

    /**
     * Tests the _pushScreenMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._pushScreenMessage = function(blockableId, destinationId) {
        // It's actually a functional test using mocked dependencies via seams
        var realPushMessage = chess.messageLog.api.pushMessage;
        chess.messageLog.api.pushMessage = mocks.messageLogAPI.pushMessage;
        unitTest._pushScreenMessage(blockableId, destinationId);
        console.log('blockable.unitTest.hook._pushScreenMessage');
        console.log('blockableId: ' + blockableId);
        console.log('destinationId: ' + destinationId);
        if (mocks.messageLogAPI.isPushMessageCalled) {
            console.log('Passed!');
        } else {
            console.log('Failed! Actual value: ' + mocks.messageLogAPI.isPushMessageCalled);
        }
        mocks.messageLogAPI.isPushMessageCalled = false;
        chess.messageLog.api.pushMessage = realPushMessage;
        //
    };

    /**
     * Tests the _isStraightBlocked function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isStraightBlocked = function(blockableId, destinationId) {
        // The function's too trivial to be unit tested
        console.log('blockable.unitTest.hook._isStraightBlocked');
        console.log('blockableId: ' + blockableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the _straightPath function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} blockableCoor - The coordinates of the blockable dom
     * @param {object} destinationCoor - The coordinates of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._straightPath = function(blockableCoor, destinationCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestBlockableCoor1 = { x: 1, y: 1 };
        var unitTestStraightPath1 = unitTest._straightPath(unitTestBlockableCoor1, { x: 1, y: 10 });
        var unitTestStraightPath2 = unitTest._straightPath(unitTestBlockableCoor1, { x: 9, y: 1 });
        var unitTestBlockableCoor2 = { x: 9, y: 10 };
        var unitTestStraightPath3 = unitTest._straightPath(unitTestBlockableCoor2, { x: 9, y: 1 });
        var unitTestStraightPath4 = unitTest._straightPath(unitTestBlockableCoor2, { x: 1, y: 10 });
        function isSameXCoor(xCoor) {
            return function(coor) { return coor.x === xCoor; };
        };
        function isSameYCoor(yCoor) {
            return function(coor) { return coor.y === yCoor; };
        };
        console.log('blockable.unitTest.hook._straightPath');
        console.log('JSON.stringify(blockableCoor): ' + JSON.stringify(blockableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
        if (unitTestStraightPath1.every(isSameXCoor(1))) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + JSON.stringify(unitTestStraightPath1));
        }
        if (unitTestStraightPath2.every(isSameYCoor(1))) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + JSON.stringify(unitTestStraightPath2));
        }
        if (unitTestStraightPath3.every(isSameXCoor(9))) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + JSON.stringify(unitTestStraightPath3));
        }
        if (unitTestStraightPath4.every(isSameYCoor(10))) {
            console.log('Passed the 4th test!');
        } else {
            console.log('Failed the 4th test! Actual value: ' + JSON.stringify(unitTestStraightPath4));
        }
        //
    };

    /**
     * Tests the _checkStraightPath function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {number} ox - The x offset from the blockable to the destination
     * @param {number} oy - The y offset from the blockable to the destination
     * @param {string} blockableId - The id of the blockableId dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._checkStraightPath = function(ox, oy, blockableId, destinationId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('blockable.unitTest.hook._checkStraightPath');
        console.log('ox: ' + ox);
        console.log('oy: ' + oy);
        console.log('blockableId: ' + blockableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the _isNearStraightBlocked function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNearStraightBlocked = function(blockableId, destinationId) {
        // The function's too trivial to be unit tested
        console.log('blockable.unitTest.hook._isNearStraightBlocked');
        console.log('blockableId: ' + blockableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the _nearStraightPath function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} blockableCoor - The coordinates of the blockable dom
     * @param {object} destinationCoor - The coordinates of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._nearStraightPath = function(blockableCoor, destinationCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestBlockableCoor = { x: 5, y: 3 };
        var unitTestNearStraightPath1 = unitTest._nearStraightPath(unitTestBlockableCoor, { x: 4, y: 1 })[0];
        var unitTestNearStraightPath2 = unitTest._nearStraightPath(unitTestBlockableCoor, { x: 6, y: 1 })[0];
        var unitTestNearStraightPath3 = unitTest._nearStraightPath(unitTestBlockableCoor, { x: 7, y: 2 })[0];
        var unitTestNearStraightPath4 = unitTest._nearStraightPath(unitTestBlockableCoor, { x: 7, y: 4 })[0];
        var unitTestNearStraightPath5 = unitTest._nearStraightPath(unitTestBlockableCoor, { x: 6, y: 5 })[0];
        var unitTestNearStraightPath6 = unitTest._nearStraightPath(unitTestBlockableCoor, { x: 4, y: 5 })[0];
        var unitTestNearStraightPath7 = unitTest._nearStraightPath(unitTestBlockableCoor, { x: 3, y: 4 })[0];
        var unitTestNearStraightPath8 = unitTest._nearStraightPath(unitTestBlockableCoor, { x: 3, y: 2 })[0];
        console.log('blockable.unitTest.hook._nearStraightPath');
        console.log('JSON.stringify(blockableCoor): ' + JSON.stringify(blockableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
        if (unitTestNearStraightPath1.x === 5 && unitTestNearStraightPath1.y === 2) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + JSON.stringify(unitTestNearStraightPath1));
        }
        if (unitTestNearStraightPath2.x === 5 && unitTestNearStraightPath2.y === 2) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + JSON.stringify(unitTestNearStraightPath2));
        }
        if (unitTestNearStraightPath3.x === 6 && unitTestNearStraightPath3.y === 3) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + JSON.stringify(unitTestNearStraightPath3));
        }
        if (unitTestNearStraightPath4.x === 6 && unitTestNearStraightPath4.y === 3) {
            console.log('Passed the 4th test!');
        } else {
            console.log('Failed the 4th test! Actual value: ' + JSON.stringify(unitTestNearStraightPath4));
        }
        if (unitTestNearStraightPath5.x === 5 && unitTestNearStraightPath5.y === 4) {
            console.log('Passed the 5th test!');
        } else {
            console.log('Failed the 5th test! Actual value: ' + JSON.stringify(unitTestNearStraightPath5));
        }
        if (unitTestNearStraightPath6.x === 5 && unitTestNearStraightPath6.y === 4) {
            console.log('Passed the 6th test!');
        } else {
            console.log('Failed the 6th test! Actual value: ' + JSON.stringify(unitTestNearStraightPath6));
        }
        if (unitTestNearStraightPath7.x === 4 && unitTestNearStraightPath7.y === 3) {
            console.log('Passed the 7th test!');
        } else {
            console.log('Failed the 7th test! Actual value: ' + JSON.stringify(unitTestNearStraightPath7));
        }
        if (unitTestNearStraightPath8.x === 4 && unitTestNearStraightPath8.y === 3) {
            console.log('Passed the 8th test!');
        } else {
            console.log('Failed the 8th test! Actual value: ' + JSON.stringify(unitTestNearStraightPath8));
        }
        //
    };

    /**
     * Tests the _checkNearStraightPath function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {number} ox - The x offset from the blockable to the destination
     * @param {number} oy - The y offset from the blockable to the destination
     * @param {string} blockableId - The id of the blockableId dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._checkNearStraightPath = function(ox, oy, blockableId, destinationId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('blockable.unitTest.hook._checkNearStraightPath');
        console.log('ox: ' + ox);
        console.log('oy: ' + oy);
        console.log('blockableId: ' + blockableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the _isNearDiagonalBlocked function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNearDiagonalBlocked = function(blockableId, destinationId) {
        // The function's too trivial to be unit tested
        console.log('blockable.unitTest.hook._isNearDiagonalBlocked');
        console.log('blockableId: ' + blockableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the _nearDiagonalPath function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} blockableCoor - The coordinates of the blockable dom
     * @param {object} destinationCoor - The coordinates of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._nearDiagonalPath = function(blockableCoor, destinationCoor) {
        // Ensures the output's the expected one with respect of the given input
            var unitTestBlockableCoor = { x: 5, y: 3 };
            var unitTestNearDiagonalPath1 = unitTest._nearDiagonalPath(unitTestBlockableCoor, { x: 3, y: 1 })[0];
            var unitTestNearDiagonalPath2 = unitTest._nearDiagonalPath(unitTestBlockableCoor, { x: 7, y: 1 })[0];
            var unitTestNearDiagonalPath3 = unitTest._nearDiagonalPath(unitTestBlockableCoor, { x: 3, y: 5 })[0];
            var unitTestNearDiagonalPath4 = unitTest._nearDiagonalPath(unitTestBlockableCoor, { x: 7, y: 5 })[0];
            console.log('blockable.unitTest.hook._nearDiagonalPath');
            console.log('JSON.stringify(blockableCoor): ' + JSON.stringify(blockableCoor));
            console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
            if (unitTestNearDiagonalPath1.x === 4 && unitTestNearDiagonalPath1.y === 2) {
                console.log('Passed the 1st test!');
            } else {
                console.log('Failed the 1st test! Actual value: ' + JSON.stringify(unitTestNearDiagonalPath1));
            }
            if (unitTestNearDiagonalPath2.x === 6 && unitTestNearDiagonalPath2.y === 2) {
                console.log('Passed the 2nd test!');
            } else {
                console.log('Failed the 2nd test! Actual value: ' + JSON.stringify(unitTestNearDiagonalPath2));
            }
            if (unitTestNearDiagonalPath3.x === 4 && unitTestNearDiagonalPath3.y === 4) {
                console.log('Passed the 3rd test!');
            } else {
                console.log('Failed the 3rd test! Actual value: ' + JSON.stringify(unitTestNearDiagonalPath3));
            }
            if (unitTestNearDiagonalPath4.x === 6 && unitTestNearDiagonalPath4.y === 4) {
                console.log('Passed the 4th test!');
            } else {
                console.log('Failed the 4th test! Actual value: ' + JSON.stringify(unitTestNearDiagonalPath4));
            }
        //
    };

    /**
     * Tests the _checkNearDiagonalPath function
     * Functional cohesion/Functional coupling/No-op
     * @author DoubleX
     * @param {number} ox - The x offset from the blockable to the destination
     * @param {number} oy - The y offset from the blockable to the destination
     * @param {string} blockableId - The id of the blockableId dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._checkNearDiagonalPath = function(ox, oy, blockableId, destinationId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('blockable.unitTest.hook._checkNearDiagonalPath');
        console.log('ox: ' + ox);
        console.log('oy: ' + oy);
        console.log('blockableId: ' + blockableId);
        console.log('destinationId: ' + destinationId);
        //
    };

})(chess.blockable.hook, chess.unitTestSwitches, chess.blockable.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file blockable.js from path js/chineseChess/unitTests/');
//