// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading movableAbilities.js!');
}
//

// This implementation js file should be placed in abstractChess

/** The implementation of the movable abilities
 * Sequential cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 3
 * Number of functions: 5
 * Number of variables: 0
 * @author DoubleX
 * @param {object/NonNull} hook - The implementation container as the hook for
 *                                 plugins
 * @param {object/NonNull} coordinatesAPI - The coordinates.api as a dependency
 * @param {object/NonNull} messageLogAPI - The messageLog.api as a dependency
 * @since v1.0
 * @version v1.0
 */
(function(hook, coordinatesAPI, messageLogAPI) {

    'use strict';

    // Dummy backward checking function to be replaced by real ones
    hook.IS_BACKWARDS = {};
    //
    hook.RULES = {}; // Dummy movable moving rules to be replaced by real ones
    // Marks the message tag to be shown on the log
    hook.TAG = 'The below movement rules are violated:';
    //

    /**
     * Checks if it's invalid to move the movable to the destination
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook.isInvalidWithMessage = function(movableId, destinationId) {
        var destCoor = coordinatesAPI.coordinates(destinationId);
        var isInvalid = hook._isInvalid(movableId, destCoor);
        if (isInvalid) messageLogAPI.showMessage(hook.TAG);
        messageLogAPI.clearMessage(hook.TAG);
        return isInvalid;
    };

    /**
     * Checks if it's invalid to move the movable to the destination
     * Sequential cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook.isInvalid = function(movableId, destinationId) {
        var destCoor = coordinatesAPI.coordinates(destinationId);
        var isInvalid = hook._isInvalid(movableId, destCoor);
        messageLogAPI.clearMessage(hook.TAG);
        return isInvalid;
    };

    /**
     * Returns a function checking whether the specified movable rule's violated
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @param {object/NonNull} destCoor - The destination coordinates
     * @return {function/NonNull} The requested function
     * @since v1.0
     * @version v1.0
     */
    hook._isInvalidFunc = function(movableId, destCoor) {
        return function(rule) { return hook[rule](movableId, destCoor); };
    };

    /**
     * Checks if the movement is backward
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {number} movableYCoor - The movable dom y coordinate
     * @param {number} destinationYCoor - The destination y coordinate
     * @param {string/NonNull} side - The side of the movable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isBackward = function(movableYCoor, destinationYCoor, side) {
        return (hook.IS_BACKWARDS[side](destinationYCoor - movableYCoor));
    };

    /**
     * Pushes the specified message to the log
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @param {string} violation - The rule violation message
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._pushMessage = function(movableId, destCoor, violation) {
        var message = 'The movement of ' + movableId;
        message += ' to the destination coordinate ';
        message += coordinatesAPI.formattedCoordinates(destCoor) + ' ';
        messageLogAPI.pushMessage(hook.TAG, message + violation);
    };

})(chess.movableAbilities.hook, chess.coordinates.api, chess.messageLog.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file movableAbilities.js from path js/abstractChess/');
//