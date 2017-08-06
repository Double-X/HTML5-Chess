// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading pluginSetupCodeRunner.js!');
}
//

/**
 * Runs all setup codes requested by all plugins
 * Functional cohesion/Data coupling
 * @author DoubleX
 * @param {object/NonNull} pluginCodes - The mapping of all setup codes for all
 *                                        plugins
 * @since v1.0
 * @version v1.0
 */
chess.pluginSetupCodeRunner.runAllPluginSetupCodes = function(pluginCodes) {
    'use strict';
    console.log('Running all setup codes requested by all plugins...');
    var func = chess.pluginSetupCodeRunner.runPluginSetupCodes(pluginCodes);
    Object.keys(pluginCodes).forEach(func);
    console.log('Run all setup codes requested by all plugins');
};

/**
 * Returns a function running all setup codes requested by the specified plugin
 * Functional cohesion/Data coupling/No side effects
 * @author DoubleX
 * @param {object/NonNull} pluginCodes - The mapping of all setup codes for all
 *                                        plugins
 * @since v1.0
 * @version v1.0
 */
chess.pluginSetupCodeRunner.runPluginSetupCodes = function(pluginCodes) {
    'use strict';
    var func = chess.pluginSetupCodeRunner.runPluginSetupCode;
    return function(plugin) {
        console.log('Running all setup codes requested by plugin ' + plugin + '...');
        pluginCodes[plugin].forEach(func);
        console.log('Run all setup codes requested by plugin ' + plugin);
    };
};

/**
 * Runs the specified setup code taking no arguments
 * Functional cohesion/Data coupling
 * @author DoubleX
 * @param {function/NonNull} code - The specified setup code taking no
 *                                   arguments
 * @since v1.0
 * @version v1.0
 */
chess.pluginSetupCodeRunner.runPluginSetupCode = function(code) {
    console.log('Running the setup code ' + code + '...');
    code();
    console.log('Run the setup code ' + code);
};

// Shows that this js files' loaded from its path
console.log('Loaded js file pluginSetupCodeRunner.js from path js/');
//