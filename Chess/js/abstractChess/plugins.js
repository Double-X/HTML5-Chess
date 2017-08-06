// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading plugins.js!');
}
//

// This Abstract Chess plugin reader should be placed in abstractChess

chess.pluginPaths.abstractChess = {

    // The list of the declaration module from all plugins to be loaded
    declarations: [
        // Enter the declaration js file name without the file extension here
        'timer',
        'gameRecord'
        //
    ],
    //

    // The list of the api module from all plugins to be loaded
    apis: [
        // Enter the api js file name without the file extension here
        'timer',
        'gameRecord'
        //
    ],
    //

    // The list of the configuration module from all plugins to be loaded
    configurations: [
        // Enter the configuration js file name without the file extension here
        'timer',
        'gameRecord'
        //
    ],
    //

    // The list of the implementation module from all plugins to be loaded
    implementations: [
        // Enter the implementation js file name without the file extension here
        'timer',
        'gameRecord'
        //
    ],
    //

    // The list of the unit test module from all plugins to be loaded
    unitTests: [
        // Enter the unit test js file name without the file extension here
        'timer',
        'gameRecord'
        //
    ],
    //

    // The list of the compatibility module from all plugins to be loaded
    compatibilities: [
        // Enter the compatibility js file name without the file extension here
        //
    ]
    //

};

chess.pluginLoader.loadAllPlugins('js/abstractChess/plugins/', 
        chess.pluginPaths.abstractChess);
chess.pluginLoader.checkAllNeededPlugins(chess.plugins.abstractChess);

// Shows that this js files' loaded from its path
console.log('Loaded js file plugins.js from path js/abstractChess/');
//