// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading unitTestSuiteRunner.js!');
}
//

/**
 * Runs the whole unit test suite by running testing codes only
 * Functional cohesion/Data coupling
 * Script call
 * @author DoubleX
 * @param {object/NonNull} unitTestHook - The hook of the unit test suite to be
 *                                         run
 * @param {object/NonNull} args - The mapping from function names to the
 *                                 arguments
 * @since v1.0
 * @version v1.0
 */
chess.unitTestSuiteRunner.runUnitTestSuite = function(unitTestHook, args) {
    'use strict';
    var runUnitTestFunc = chess.runUnitTestFunc(unitTestHook, args);
    Object.keys(unitTestHook).forEach(runUnitTestFunc);
};

/**
 * Returns a function running a test with the specified argument mapping
 * Functional cohesion/Data coupling/Pure function
 * Script call
 * @author DoubleX
 * @param {object/NonNull} unitTestHook - The hook of the unit test suite to be
 *                                         run
 * @param {object/NonNull} args - The mapping from function names to the
 *                                 arguments
 * @return {function/NonNull} The requested function
 * @since v1.0
 * @version v1.0
 */
chess.unitTestSuiteRunner.runUnitTestFunc = function(unitTestHook, args) {
    'use strict';
    return function(functionName) {
        unitTestHook[functionName].apply(unitTestHook, args[functionName]);
    };
};

// Shows that this js files' loaded from its path
console.log('Loaded js file unitTestSuiteRunner.js from path js/');
//