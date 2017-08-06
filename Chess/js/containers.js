/** @namespace */
var chess = {

    /* api is the public interface used by the clients and other containers
     * hook is the set of hooking points used by the container developers only
     * unitTest is the unit test suite for hook
     */

    // The container of the coordinate behaviors
    coordinates: { api: {}, hook: {}, unitTest: { hook: {} } },
    //

    // The container of dom accessing behaviors
    dom: { api: {}, hook: {}, unitTest: { hook: {} } },
    //

    // The container of the behaviors for highlighting highlightables
    highlightable: { api: {}, hook: {}, unitTest: { hook: {} } },
    //

    // The container of the behaviors for logging messages
    messageLog: { api: {}, hook: {}, unitTest: { hook: {} } },
    //

    // The container of the behaviors for moving movables
    movable: { api: {}, hook: {}, unitTest: { hook: {} } },
    //

    // The container of the behaviors for moving movables
    movableRules: { api: {}, hook: {}, unitTest: { hook: {} } },
    //

    // The container of the behaviors for selecting selectables
    selectable: { api: {}, hook: {}, unitTest: { hook: {} } },
    //

    // The container of creating new spaces
    space: { api: {}, hook: {}, unitTest: { hook: {} } },
    //

    // The container of the behaviors for blocking blockables
    blockable: { api: {}, hook: {}, unitTest: { hook: {} } },
    //

    // The container of the behaviors for checking checkables
    checkable: { api: {}, hook: {}, unitTest: { hook: {} } },
    //

    // The container of the behaviors for accessing the current side
    currentSide: { api: {}, hook: {}, unitTest: { hook: {} } },
    //

    // The container of the piece movement abilities
    movableAbilities: { api: {}, hook: {}, unitTest: { hook: {} } },
    //

    integrationTests: {}, // The container of integration test suites

    // The container of integration test running functionalities
    integrationTestSuiteRunner: {},
    //

    pluginLoader: {}, // The container of plugin loading functionalities

    plugins: {}, // The container of plugins

    pluginPaths: {}, // The container of plugin paths

    pluginSetupCodeRunner: {}, // The container of plugin setup functionalities

    pluginSetupCodes: {}, // The container of all setup codes of all plugins

    // The container of unit test running functionalities
    unitTestSuiteRunner: {}
    //

};

// Shows that this js files' loaded from its path
console.log('Loaded js file containers.js from path js/');
//