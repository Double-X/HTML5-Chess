// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading coordinates.js!');
}
//

// This implementation js file should be placed in abstractChess

/** The implementation of the coordinates abilities
 * Functional cohesion/Data coupling/Idempotent
 * On GMT 1000 27 Jan 2017
 * Number of constants: 0
 * Number of functions: 4
 * Number of variables: 0
 * @author DoubleX
 * @param {object/NonNull} hook - The implementation container as the hook for
 *                                 plugins
 * @param {object/NonNull} domAPI - The dom.api as a dependency
 * @since v1.0
 * @version v1.0
 */
(function(hook, domAPI) {

    'use strict';

    /**
     * Returns the coordinates of a specified dom
     * Functional cohesion/Stamp coupling/No side effects
     * @author DoubleX
     * @param {string/NonNull} domId - The id of the dom to return its
     *                                  coordinates
     * @return {object} The dom coordinates
     * @since v1.0
     * @version v1.0
     */
    hook.coordinates = function(domId) {
        return JSON.parse(domAPI.dom(domId).value);
    };

    /**
     * Returns the coordinates in the string form
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {number} xCoor - The x coordinate
     * @param {number} yCoor - The y coordinate
     * @return {string/NonNull} The coordinates in the string form
     * @since v1.0
     * @version v1.0
     */
    hook.coordinatesString = function(xCoor, yCoor) {
        return '{"x":' + xCoor + ',"y":' + yCoor + '}';
    };

    /**
     * Returns the formatted version of the specified coordinates
     * Functional cohesion/Stamp coupling/Pure function
     * @author DoubleX
     * @param {object/NonNull} coordinates - The dom's new coordinates
     * @return {string/NonNull} The formatted version
     * @since v1.0
     * @version v1.0
     */
    hook.formattedCoordinates = function(coordinates) {
        return '(' + coordinates.x + ', ' + coordinates.y + ')';
    };

    /**
     * Sets the coordinates of the specified dom to be the specified coordinates
     * Functional cohesion/Stamp coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} domId - The id of the dom to have its
     *                                  coordinates set
     * @param {object/NonNull} coordinates - The dom's new coordinates
     * @since v1.0
     * @version v1.0
     */
    hook.setCoordinates = function(domId, coordinates) {
        domAPI.dom(domId).value = JSON.stringify(coordinates);
    };

})(chess.coordinates.hook, chess.dom.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file coordinates.js from path js/abstractChess/');
//