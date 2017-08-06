// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading plugins.js!');
}
//

chess.plugins.chineseChess = {}; // The container of all Chinese Chess plugins
// The container of all setup codes requested by all Chinese Chess plugins
chess.pluginSetupCodes.chineseChess = {};
//
// The container of all switches of all Chinese Chess plugin unit test suites
chess.unitTestSwitches.plugins.chineseChess = {};
//

// Shows that this js files' loaded from its path
console.log('Loaded js file plugins.js from path js/chineseChess/plugins/');
//