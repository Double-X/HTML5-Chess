// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading pluginSetupCodes.js!');
}
//

// Runs all setup codes requested by all Abstract Chess plugins
chess.pluginSetupCodeRunner.runAllPluginSetupCodes(chess.pluginSetupCodes.abstractChess);
//

// Shows that this js files' loaded from its path
console.log('Loaded js file pluginSetupCodes.js from path js/abstractChess/plugins/');
//