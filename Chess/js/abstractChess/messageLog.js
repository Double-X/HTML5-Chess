// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading messageLog.js!');
}
//

// This implementation js file should be placed in abstractChess

/** The implementation of the message log
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 1
 * Number of functions: 4
 * Number of variables: 1
 * @author DoubleX
 * @param {object/NonNull} hook - The implementation container as the hook for
 *                                 plugins
 * @since v1.0
 * @version v1.0
 */
(function(hook) {

    'use strict';

    hook.MESSAGE_SEPARATOR = '\n'; // Marks the separator for different messages

    hook._messages = {}; // The container of all messages for each tag

    /**
     * Clears all the logged messages having the specified tag
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} tag - The messages having this tag to be cleared
     * @since v1.0
     * @version v1.0
     */
    hook.clearMessage = function(tag) { hook._messages[tag] = []; };

    /**
     * Push the specified message in the log
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} tag - The message tag to be pushed in the log
     * @param {string} content - The message content to be pushed in the log
     * @since v1.0
     * @version v1.0
     */
    hook.pushMessage = function(tag, content) {
        (hook._messages[tag] = hook._messages[tag] || []).push(content);
    };

    /**
     * Shows all the logged messages with the specified tag
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} tag - The messages having this tag to be shown
     * @since v1.0
     * @version v1.0
     */
    hook.showMessage = function(tag) {
        if (!hook._messages[tag] || hook._messages[tag].length <= 0) return;
        alert(hook._messages[tag].reduce(hook._formattedMessage, tag));
    };

    /**
     * Generates a formatted message to be shown
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string} message - The partially formatted message
     * @param {string} log - The unformatted log
     * @return {string} The formatted message having the formatted log
     * @since v1.0
     * @version v1.0
     */
    hook._formattedMessage = function(message, log) {
        return message + hook.MESSAGE_SEPARATOR + log;
    };

})(chess.messageLog.hook);

// Shows that this js files' loaded from its path
console.log('Loaded js file messageLog.js from path js/abstractChess/');
//