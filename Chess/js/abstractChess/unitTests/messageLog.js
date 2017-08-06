// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading messageLog.js!');
}
//

// This unit test js file should be placed in abstractChess/unitTests

/** The messageLog implementation unit test suite
 * Functional cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 2
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
    unitTest._isActive = function() { return unitTestSwitches.messageLog; };

    /**
     * Clears all the logged messages having the specified tag
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} tag - The message tag to be pushed in the log
     * @since v1.0
     * @version v1.0
     */
    unitTest.clearMessage = hook.clearMessage;
    hook.clearMessage = function(tag) {
        if (unitTest._isActive()) {
            // Ensures hook.pushMessage has the expected side effect
            console.log('messageLog.unitTest.hook.clearMessage');
            console.log('tag: ' + tag);
            if (hook._messages[tag].length <= 0) {
                console.log('Passed!');
            } else {
                console.log("Failed! All messages having this tag should be cleared but isn't!");
            }
            //
        }
        unitTest.clearMessage(tag);
    };

    /**
     * Push the specified message in the log
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} tag - The message tag to be pushed in the log
     * @param {string} content - The message content to be pushed in the log
     * @since v1.0
     * @version v1.0
     */
    unitTest.pushMessage = hook.pushMessage;
    hook.pushMessage = function(tag, content) {
        unitTest.pushMessage(tag, content);
        if (unitTest._isActive()) {
            // Ensures hook.pushMessage has the expected side effect
            console.log('messageLog.unitTest.hook.pushMessage');
            console.log('tag: ' + tag);
            console.log('content: ' + content);
            if (hook._messages[tag].indexOf(content) >= 0) {
                console.log('Passed!');
            } else {
                console.log("Failed! content should be pushed but isn't!");
            }
            //
        }
    };

    /**
     * Shows all the logged messages with the specified tag
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} tag - The message tag to be pushed in the log
     * @since v1.0
     * @version v1.0
     */
    unitTest.showMessage = hook.showMessage;
    hook.showMessage = function(tag) {
        if (unitTest._isActive()) unitTest.hook.showMessage(tag);
        unitTest.showMessage(tag);
    };

    /**
     * Generates a formatted message to be shown
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} message - The partially formatted message
     * @param {string} log - The unformatted log
     * @return {string} The formatted message having the formatted log
     * @since v1.0
     * @version v1.0
     */
    unitTest._formattedMessage = hook._formattedMessage;
    hook._formattedMessage = function(message, log) {
        if (unitTest._isActive()) unitTest.hook._formattedMessage(message, log);
        return unitTest._formattedMessage(message, log);
    };

    /**
     * Tests the showMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} tag - The message tag to be pushed in the log
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.showMessage = function(tag) {
        // The function's too trivial to be unit tested
        console.log('messageLog.unitTest.hook._showMessage tag: ' + tag);
        //
    };

    /**
     * Tests the _formattedMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} message - The partially formatted message
     * @param {string} log - The unformatted log
     * @return {string} The formatted message having the formatted log
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._formattedMessage = function(message, log) {
        // The function's too trivial to be unit tested
        console.log('messageLog.unitTest.hook._formattedMessage');
        console.log('message: ' + message);
        console.log('log: ' + log);
        console.log('formattedMessage: ' + unitTest._formattedMessage(message, log));
        //
    };

})(chess.messageLog.hook, chess.unitTestSwitches, chess.messageLog.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file messageLog.js from path js/abstractChess/unitTests/');
//