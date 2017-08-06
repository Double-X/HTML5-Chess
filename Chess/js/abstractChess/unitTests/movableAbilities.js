// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading movableAbilities.js!');
}
//

// This unit test js file should be placed in abstractChess/unitTests

/** The movableAbilities implementation unit test suite
 * Sequential cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 1
 * @author DoubleX
 * @param {object} hook - The implementation container to be unit tested
 * @param {object} unitTestSwitches - The switch setting the unit test status
 * @param {object} unitTest - The unit test container extending the hook
 * @since v1.0
 * @version v1.0
 */
(function(hook, unitTestSwitches, unitTest) {

    'use strict';

    // Marks all sides needed by unit tests
    hook.SIDES = {
        startingSide: chess.currentSide.hook._currentSide(),
        followingSide: chess.currentSide.api.oppositeSide()
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
    unitTest._isActive = function() { return unitTestSwitches.movableAbilities; };

    /**
     * Checks if it's invalid to move the movable to the destination
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest.isInvalidWithMessage = hook.isInvalidWithMessage;
    hook.isInvalidWithMessage = function(movableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook.isInvalidWithMessage(movableId, destinationId);
        }
        return unitTest.isInvalidWithMessage(movableId, destinationId);
    };

    /**
     * Checks if it's invalid to move the movable to the destination
     * Sequential cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest.isInvalid = hook.isInvalid;
    hook.isInvalid = function(movableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook.isInvalid(movableId, destinationId);
        }
        return unitTest.isInvalid(movableId, destinationId);
    };

    /**
     * Returns a function checking whether the specified movable rule's violated
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {function} The requested function
     * @since v1.0
     * @version v1.0
     */
    unitTest._isInvalidFunc = hook._isInvalidFunc;
    hook._isInvalidFunc = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isInvalidFunc(movableId, destCoor);
        }
        return unitTest._isInvalidFunc(movableId, destCoor);
    };

    /**
     * Checks if the movement is backward
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {number} movableYCoor - The movable dom y coordinate
     * @param {number} destinationYCoor - The destination y coordinate
     * @param {string} side - The side of the movable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isBackward = hook._isBackward;
    hook._isBackward = function(movableYCoor, destinationYCoor, side) {
        if (unitTest._isActive()) {
            unitTest.hook._isBackward(movableYCoor, destinationYCoor, side);
        }
        return unitTest._isBackward(movableYCoor, destinationYCoor, side);
    };

    /**
     * Pushes the specified message to the log
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @param {string} violation - The rule violation message
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._pushMessage = hook._pushMessage;
    hook._pushMessage = function(movableId, destCoor, violation) {
        if (unitTest._isActive()) {
            unitTest.hook._pushMessage(movableId, destCoor, violation);
        }
        unitTest._pushMessage(movableId, destCoor, violation);
    };

    /**
     * Tests the isInvalidWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.isInvalidWithMessage = function(movableId, destinationId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook.isInvalid');
        console.log('movableId: ' + movableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the isInvalid function
     * Sequential cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.isInvalid = function(movableId, destinationId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook.isInvalid');
        console.log('movableId: ' + movableId);
        console.log('destinationId: ' + destinationId);
        console.log('IsInvalid: ' + unitTest.isInvalid(movableId, destinationId));
        //
    };

    /**
     * Tests the _isInvalidFunc function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isInvalidFunc = function(movableId, destCoor) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._isInvalidFunc');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isBackward function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {number} movableYCoor - The movable dom y coordinate
     * @param {number} destinationYCoor - The destination y coordinate
     * @param {string} side - The side of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isBackward = function(movableYCoor, destinationYCoor, side) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestYCoor1 = 5, unitTestYCoor2 = 6;
        var unitTestSide1 = hook.SIDES.startingSide, unitTestSide2 = hook.SIDES.followingSide;
        var unitTestIsBackward1 = unitTest._isBackward(unitTestYCoor1, unitTestYCoor2, unitTestSide1);
        var unitTestIsBackward2 = unitTest._isBackward(unitTestYCoor2, unitTestYCoor1, unitTestSide1);
        var unitTestIsBackward3 = unitTest._isBackward(unitTestYCoor1, unitTestYCoor2, unitTestSide2);
        var unitTestIsBackward4 = unitTest._isBackward(unitTestYCoor2, unitTestYCoor1, unitTestSide2);
        console.log('movableAbilities.unitTest.hook._isBackward');
        console.log('movableYCoor: ' + movableYCoor);
        console.log('destinationYCoor: ' + destinationYCoor);
        console.log('side: ' + side);
        console.log('isBackward: ' + unitTest._isBackward(movableYCoor, destinationYCoor, side));
        if (unitTestIsBackward1) {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsBackward1);
        } else {
            console.log('Passed the 1st test!');
        }
        if (unitTestIsBackward2) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsBackward2);
        }
        if (unitTestIsBackward3) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsBackward3);
        }
        if (unitTestIsBackward4) {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsBackward4);
        } else {
            console.log('Passed the 4th test!');
        }
        //
    };

    /**
     * Tests the _pushMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @param {string} violation - The rule violation message
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._pushMessage = function(movableId, destCoor, violation) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._pushMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        console.log('violation: ' + violation);
        //
    };

})(chess.movableAbilities.hook, chess.unitTestSwitches, 
        chess.movableAbilities.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file movableAbilities.js from path js/abstractChess/unitTests/');
//