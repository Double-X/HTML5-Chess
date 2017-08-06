// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading movableRules.js!');
}
//

// This implementation js file should be placed in abstractChess

/** The implementation of the behaviors for checking against movable rules
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 2
 * Number of functions: 3
 * Number of variables: 0
 * @author DoubleX
 * @param {object/NonNull} hook - The implementation container as the hook for
 *                                 plugins
 * @param {object/NonNull} blockableAPI - The blockable.api as a dependency
 * @param {object/NonNull} movableAbilitiesAPI - The movableAbilities.api as
 *                                                dependency
 * @since v1.0
 * @version v1.0
 */
(function(hook, blockableAPI, movableAbilitiesAPI) {

    'use strict';

    // Stores all functions to be called when checking against movement rules
    hook.RULES_WITH_MESSAGE = [
        // This ordering must be maintained or errors can be thrown
        movableAbilitiesAPI.isInvalidWithMessage,
        blockableAPI.isBlockedWithMessage
        //
    ];

    // Stores all functions to be called when checking against movement rules
    hook.RULES = [
        // This ordering must be maintained or errors can be thrown
        movableAbilitiesAPI.isInvalid,
        blockableAPI.isBlocked
        //
    ];

    /**
     * Checks if moving the movable to the destination will violate any rules
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook.isAgainstRulesWithMessage = function(movableId, destinationId) {
        var isAgainstRule = hook._isAgainstRuleFunc(movableId, destinationId);
        return (hook.RULES_WITH_MESSAGE.some(isAgainstRule));
    };

    /**
     * Checks if moving the movable to the destination will violate any rules
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook.isAgainstRules = function(movableId, destinationId) {
        var isAgainstRule = hook._isAgainstRuleFunc(movableId, destinationId);
        return (hook.RULES.some(isAgainstRule));
    };

    /**
     * Returns a function calling the specified rule with the needed arguments
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @return {function} The requested function
     * @since v1.0
     * @version v1.0
     */
    hook._isAgainstRuleFunc = function(movableId, destinationId) {
        return function(rule) { return rule(movableId, destinationId); };
    };

})(chess.movableRules.hook, chess.blockable.api, chess.movableAbilities.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file movableRules.js from path js/abstractChess/');
//