// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading pluginSetupCodes.js!');
}
//

// Runs all setup coees requested by all Chess plugins
chess.pluginSetupCodeRunner.runAllPluginSetupCodes(chess.pluginSetupCodes.chess);
//

// Shows that this js files' loaded from its path
console.log('Loaded js file pluginSetupCodes.js from path js/chess/plugins/');
//