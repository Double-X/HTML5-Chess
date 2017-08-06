// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading blockable.js!');
}
//

// This implementation js file should be placed in abstractChess

/** The implementation of the behaviors for checking against blockages
 * Sequential cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 3
 * Number of functions: 11
 * Number of variables: 0
 * @author DoubleX
 * @param {object/NonNull} hook - The implementation container as the hook for
 *                                 plugins
 * @param {object/NonNull} domAPI - The dom.api as a dependency
 * @param {object/NonNull} messageLogAPI - The messageLog.api as a dependency
 * @since v1.0
 * @version v1.0
 */
(function(hook, domAPI, messageLogAPI) {

    'use strict';

    // The message part showing that a blockable's blocking the movement path
    hook.BLOCK_MESSAGE = ' is blocking the movement path!';
    //
    hook.RULES = {}; // Dummy piece blocking rules to be replaced by real ones
    // Marks the message tag to be shown on the log
    hook.TAG = 'The below blocking rules are violated:';
    //

    /**
     * Checks if moving the blockable to the destination will be blocked
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} blockableId - The id of the blockableId dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook.isBlockedWithMessage = function(blockableId, destinationId) {
        var isBlocked = hook._isBlocked(blockableId, destinationId);
        if (isBlocked) messageLogAPI.showMessage(hook.TAG);
        messageLogAPI.clearMessage(hook.TAG);
        return isBlocked;
    };

    /**
     * Checks if moving the blockable to the destination will be blocked
     * Sequential cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} blockableId - The id of the blockableId dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook.isBlocked = function(blockableId, destinationId) {
        var isBlocked = hook._isBlocked(blockableId, destinationId);
        messageLogAPI.clearMessage(hook.TAG);
        return isBlocked;
    };

    /**
     * Checks if moving the blockable to the destination will be blocked
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} blockableId - The id of the blockableId dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isBlocked = function(blockableId, destinationId) {
        var isBlocked = hook._isBlockedFunc(blockableId, destinationId);
        return hook.RULES[domAPI.type(blockableId)].some(isBlocked);
    };

    /**
     * Returns a function checking whether a blocking rule's violated
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string/NonNull} blockableId - The id of the blockableId dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @return {function/NonNull} The requested function
     * @since v1.0
     * @version v1.0
     */
    hook._isBlockedFunc = function(blockableId, destinationId) {
        return function(rule) {
            return hook[rule](blockableId, destinationId);
        };
    };

    /**
     * Throws an error with the path with the specified start and end dom ids
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string} startDomId - The id of the dom as the start of the path
     * @param {string} endDomId - The id of the dom as the end of the path
     * @param {string} message - The specified parts of the error message
     * @since v1.0
     * @throws will throw an error with the specified path info and message
     * @version v1.0
     */
    hook._onPathError = function(startDomId, endDomId, message) {
        throw new Error(hook._pathErrorMessage(startDomId, endDomId, message));
    };

    /**
     * Returns the error message with the specified start and end dom ids
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string} startDomId - The id of the dom as the start of the path
     * @param {string} endDomId - The id of the dom as the end of the path
     * @param {string} message - The specified parts of the error message
     * @return {string/NonNull} The complete error message
     * @since v1.0
     * @version v1.0
     */
    hook._pathErrorMessage = function(startDomId, endDomId, message) {
        return "The path from " + startDomId + " to " + endDomId + message;
    };

    /**
     * Returns the list of dom ids from the specified list of coordinates
     * Functional cohesion/Data coupling/No side effects
     * @author DoubleX
     * @param {array/NonNull} coors - The list of coordinates
     * @return {array/NonNull} The requested list
     * @since v1.0
     * @version v1.0
     */
    hook._pathDomIds = function(coors) { return coors.map(domAPI.cellDomId); };

    /**
     * Checks if anything that can block a blockable's on the specified path
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {array/NonNull} domIds - The list of id of doms constituting the
     *                                  path
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isPathBlocked = function(domIds) {
        return hook._pathBlockables(domIds).length > 0;
    };

    /**
     * Returns the list of ids of all blockables in the specified dom id list
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {array/NonNull} domIds - The list of id of doms constituting the
     *                                  path
     * @return {array} The requested list
     * @since v1.0
     * @version v1.0
     */
    hook._pathBlockables = function(domIds) {
        return domIds.filter(hook._isPiece);
    };

    /**
     * Checks if the specified dom's a piece
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} domId - The id of the dom to be checked
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isPiece = function(domId) {
        var isBlocked = domAPI.isPiece(domId);
        if (isBlocked) {
            messageLogAPI.pushMessage(hook.TAG, hook._blockMessage(domId));
        }
        return isBlocked;
    };

    /**
     * Generates a message showing that the specified dom's blocking the path
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string} domId - The id of the dom blocking the path
     * @return {string/NonNull} The blocking message
     * @since v1.0
     * @version v1.0
     */
    hook._blockMessage = function(domId) { return domId + hook.BLOCK_MESSAGE; };

})(chess.blockable.hook, chess.dom.api, chess.messageLog.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file blockable.js from path js/abstractChess/');
//