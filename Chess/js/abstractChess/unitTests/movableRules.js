// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading movableRules.js!');
}
//

// This unit test js file should be placed in abstractChess/unitTests

/** The movableRules implementation unit test suite
 * Functional cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 0
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
    unitTest._isActive = function() { return unitTestSwitches.movableRules; };  

    /**
     * Checks if moving the movable to the destination will violate any rules
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest.isAgainstRulesWithMessage = hook.isAgainstRulesWithMessage;
    hook.isAgainstRulesWithMessage = function(movableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook.isAgainstRulesWithMessage(movableId, destinationId);
        }
        return unitTest.isAgainstRulesWithMessage(movableId, destinationId);
    };

    /**
     * Checks if moving the movable to the destination will violate any rules
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest.isAgainstRules = hook.isAgainstRules;
    hook.isAgainstRules = function(movableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook.isAgainstRules(movableId, destinationId);
        }
        return unitTest.isAgainstRules(movableId, destinationId);
    };

    /**
     * Returns a function calling the specified rule with the needed arguments
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @return {function} The requested function
     * @since v1.0
     * @version v1.0
     */
    unitTest._isAgainstRuleFunc = hook._isAgainstRuleFunc;
    hook._isAgainstRuleFunc = function(movableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook._isAgainstRuleFunc(movableId, destinationId);
        }
        return unitTest._isAgainstRuleFunc(movableId, destinationId);
    };

    /**
     * Tests the isAgainstRulesWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.isAgainstRulesWithMessage = function(movableId, destinationId) {
        // The function's too trivial to be unit tested
        console.log('movableRules.unitTest.hook.isAgainstRulesWithMessage');
        console.log('movableId: ' + movableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the isAgainstRules function
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.isAgainstRules = function(movableId, destinationId) {
        // The function's too trivial to be unit tested
        console.log('movableRules.unitTest.hook.isAgainstRules');
        console.log('movableId: ' + movableId);
        console.log('destinationId: ' + destinationId);
        console.log('isAgainstRulesWithMessage: ' + unitTest.isAgainstRules(movableId, destinationId));
        //
    };

    /**
     * Tests the _isAgainstRuleFunc function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isAgainstRuleFunc = function(movableId, destinationId) {
        // The function's too trivial to be unit tested
        console.log('movableRules.unitTest.hook._isAgainstRuleFunc');
        console.log('movableId: ' + movableId);
        console.log('destinationId: ' + destinationId);
        //
    };

})(chess.movableRules.hook, chess.unitTestSwitches, 
        chess.movableRules.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file movableRules.js from path js/abstractChess/unitTests/');
//