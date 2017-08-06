// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading pluginLoader.js!');
}
//

/**
 * Checks whether all plugins have their needed plugins already loaded before
 * Functional cohesion/Data coupling/Idempotent
 * @author DoubleX
 * @param {array/NonNull} plugins - The list of containers as the plugin
 *                                   objects
 * @since v1.0
 * @version v1.0
 */
chess.pluginLoader.checkAllNeededPlugins = function(plugins) {
    'use strict';
    function checkNeededPlugins(plugin) {
        // Optimizes the time performances by reducing variable accesses
        var neededPlugins = plugins[plugin].neededPlugins;
        //
        function checkNeededPlugin(neededPlugin) {
            if (neededPlugins[neededPlugin]) return;
            console.log('Plugin ' + plugin + ' needs plugin ' + neededPlugin);
        };
        Object.keys(neededPlugins).forEach(checkNeededPlugin);
    };
    Object.keys(plugins).forEach(checkNeededPlugins);
};

/**
 * Loads all the specified plugins from the specified paths and their base path
 * Functional cohesion/Data coupling
 * @author DoubleX
 * @param {string} basePath - The relative file path leading to the plugin path
 * @param {object/NonNull} pluginPaths - The relative file path having all
 *                                        plugin names
 * @since v1.0
 * @version v1.0
 */
chess.pluginLoader.loadAllPlugins = function(basePath, pluginPaths) {
    'use strict';
    // The mapping from the plugin components to their corresponding file paths
    var componentPaths = {
        // This ordering must be kept or errors will probably occur
        declarations: basePath + 'declarations/',
        apis: basePath + 'apis/',
        configurations: basePath + 'configurations/',
        implementations: basePath + 'implementations/',
        unitTests: basePath + 'unitTests/',
        compatibilities: basePath + 'compatibilities/'
        //
    };
    //
    // Optimizes the time performances by reducing variable accesses
    var func = chess.pluginLoader.loadPlugins;
    //
    function loadPlugins(component) {
        func(pluginPaths[component], componentPaths[component]);
    };
    Object.keys(componentPaths).forEach(loadPlugins);
};

/**
 * Loads all the specified plugins from the specified path
 * Functional cohesion/Data coupling
 * @author DoubleX
 * @param {array/NonNull} plugins - The list of plugin js file name without
 *                                   extensions
 * @param {string} path - The relative file path having all the plugin js files
 * @since v1.0
 * @version v1.0
 */
chess.pluginLoader.loadPlugins = function(plugins, path) {
    'use strict';
    // This line also ensures all plugin components are loaded sequentially
    console.log('Loading all plugins from path ' + path + '...');
    //
    // Optimizes the time performances by reducing variable accesses
    var func = chess.pluginLoader.loadPlugin;
    //
    function loadPlugin(plugin) { func(plugin, path); };
    plugins.forEach(loadPlugin);
    // This line also ensures all plugin components are loaded sequentially
    console.log('Loaded all plugins from path ' + path);
    //
};

/**
 * Loads the specified plugin from the specified path
 * Functional cohesion/Data coupling
 * @author DoubleX
 * @param {string} plugin - The plugin js file name without extensions
 * @param {string} path - The relative file path having all the plugin js files
 * @since v1.0
 * @version v1.0
 */
chess.pluginLoader.loadPlugin = function(plugin, path) {
    'use strict';
    var element = document.createElement('script');
    element.type = 'application/javascript';
    element.src = path + plugin + '.js';
    document.body.appendChild(element);
    // This line also ensures all plugin components are loaded sequentially
    console.log('Loaded plugin ' + plugin + ' from path ' + path);
    //
};

// Shows that this js files' loaded from its path
console.log('Loaded js file pluginLoader.js from path js/');
//