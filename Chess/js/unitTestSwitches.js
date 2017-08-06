// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading unitTestSwitches.js!');
}
//

// The unit test suite switches
chess.unitTestSwitches = {
    coordinates: false,
    dom: false,
    highlightable: false,
    messageLog: false,
    movableRules: false,
    space: false,
    blockable: false,
    checkable: false,
    currentSide: false,
    movable: false,
    movableAbilities: false,
    selectable: false,
    promotable: false,
    specialMoveRecords: false,
    plugins: {} // The container of all unit test suite switches for all plugins
};

// Shows that this js files' loaded from its path
console.log('Loaded js file unitTestSwitches.js from path js/');
//