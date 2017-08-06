// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading plugins.js!');
}
//

chess.plugins.chess = {}; // The container of all Chess plugins
// The container of all setup codes requested by all Chess plugins
chess.pluginSetupCodes.chess = {};
//
// The container of all switches of all Chess plugin unit test suites
chess.unitTestSwitches.plugins.chess = {};
//

// Shows that this js files' loaded from its path
console.log('Loaded js file plugins.js from path js/chess/plugins/');
//