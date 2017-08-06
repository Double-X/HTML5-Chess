// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading integrationTestSuiteRunner.js!');
}
//

// Marks the number of milliseconds as delay accumlated by all received messages
chess.integrationTestSuiteRunner._cumulativeDelay = 0;
//

/**
 * Runs the whole specified integration test suite
 * Functional cohesion/Data coupling
 * Script call
 * @author DoubleX
 * @param {array/NonNull} messageQueue - The list of messages-milliseconds
 *                                        delay pairs
 * @since v1.0
 * @version v1.0
 */
chess.integrationTestSuiteRunner.runIntegrationTestSuite = function(messageQueue) {
    'use strict';
    chess.integrationTestSuiteRunner._cumulativeDelay = 0;
    messageQueue.forEach(chess.integrationTestSuiteRunner.sendMessage);
    chess.integrationTestSuiteRunner._cumulativeDelay = 0;
};

/**
 * Sends the specified message having function fn, argument arg and delay delay
 * Functional cohesion/Stamp coupling
 * Script call
 * @author DoubleX
 * @param {object/NonNull} message - The container of function, argument and
 *                                    delay
 * @since v1.0
 * @version v1.0
 */
chess.integrationTestSuiteRunner.sendMessage = function(message) {
    'use strict';
    var receiveMessage = chess.integrationTestSuiteRunner.receiveMessage;
    receiveMessage(message.fn, message.arg, message.delay);
};

/**
 * Receives the specified asynchronous message to call the specified function
 * Functional cohesion/Data coupling
 * Script call
 * @author DoubleX
 * @param {function/NonNull} fn - The function taking 1 argument giving a
 *                                 selectable id
 * @param {string} arg - The argument of the specified function
 * @param {number} delay - The number of milliseconds to be delayed
 * @since v1.0
 * @version v1.0
 */
chess.integrationTestSuiteRunner.receiveMessage = function(fn, arg, delay) {
    'use strict';
    chess.integrationTestSuiteRunner._cumulativeDelay += delay;
    var cumulativeDelay = chess.integrationTestSuiteRunner._cumulativeDelay;
    function toggle(){ chess.selectable.api.toggle(fn(arg)); };
    setTimeout(toggle, cumulativeDelay);
};

// Shows that this js files' loaded from its path
console.log('Loaded js file integrationTestSuiteRunner.js from path js/');
//