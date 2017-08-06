// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading plugins.js!');
}
//

chess.plugins.abstractChess = {}; // The container of all Abstract Chess plugins
// The container of all setup codes requested by all Abstract Chess plugins
chess.pluginSetupCodes.abstractChess = {};
//
// The container of all switches of all Abstract Chess plugin unit test suites
chess.unitTestSwitches.plugins.abstractChess = {};
//

// Shows that this js files' loaded from its path
console.log('Loaded js file plugins.js from path js/abstractChess/plugins/');
//