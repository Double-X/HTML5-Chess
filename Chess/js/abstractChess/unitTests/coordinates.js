// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading coordinates.js!');
}
//

// This unit test js file should be placed in abstractChess/unitTests

/** The coordinates implementation unit test suite
 * Functional cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 3
 * @author DoubleX
 * @param {object} hook - The implementation container to be unit tested
 * @param {object} unitTestSwitches - The switch setting the unit test status
 * @param {object} unitTest - The unit test container extending the hook
 * @since v1.0
 * @version v1.0
 */
(function(hook, unitTestSwitches, unitTest) {

    'use strict';

    /**
     * Checks if the unit tests should be run
     * Functional cohesion/Message coupling/Referentially transparent
     * @author DoubleX
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isActive = function() { return unitTestSwitches.coordinates; };

    /**
     * Returns the coordinates of a specified dom
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {string} domId - The id of the dom to return its coordinates
     * @return {object} The dom coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.coordinates = hook.coordinates;
    hook.coordinates = function(domId) {
        if (unitTest._isActive()) unitTest.hook.coordinates(domId);
        return unitTest.coordinates(domId);
    };

    /**
     * Returns the coordinates in the string form
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {number} xCoor - The x coordinate
     * @param {number} yCoor - The y coordinate
     * @return {string} The coordinates in the string form
     * @since v1.0
     * @version v1.0
     */
    unitTest.coordinatesString = hook.coordinatesString;
    hook.coordinatesString = function(xCoor, yCoor) {
        if (unitTest._isActive()) unitTest.hook.coordinatesString(xCoor, yCoor);
        return unitTest.coordinatesString(xCoor, yCoor);
    };

    /**
     * Returns the formatted version of the specified coordinates
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} coordinates - The dom's new coordinates
     * @return {object} The formatted version
     * @since v1.0
     * @version v1.0
     */
    unitTest.formattedCoordinates = hook.formattedCoordinates;
    hook.formattedCoordinates = function(coordinates) {
        if (unitTest._isActive()) {
            unitTest.hook.formattedCoordinates(coordinates);
        }
        return unitTest.formattedCoordinates(coordinates);
    };

    /**
     * Sets the coordinates of the specified dom to be the specified coordinates
     * Functional cohesion/Stamp coupling/Idempotent
     * @author DoubleX
     * @param {string} domId - The id of the dom to have its coordinates set
     * @param {object} coordinates - The dom's new coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.setCoordinates = hook.setCoordinates;
    hook.setCoordinates = function(domId, coordinates) {
        if (unitTest._isActive()) {
            unitTest.hook.setCoordinates(domId, coordinates);
        }
        unitTest.setCoordinates(domId, coordinates);
    };

    /**
     * Tests the coordinates function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} domId - The id of the dom to return its coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.coordinates = function(domId) {
        // The function's too trivial to be unit tested
        console.log('coordinates.unitTest.hook.coordinates');
        console.log('domId: ' + domId);
        console.log('JSON.stringify(coordinates): ' + JSON.stringify(unitTest.coordinates(domId)));
        //
    };

    /**
     * Tests the coordinatesString function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {number} xCoor - The x coordinate
     * @param {number} yCoor - The y coordinate
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.coordinatesString = function(xCoor, yCoor) {
        // Ensures the output's the expected one with respect of the given input
        var coor = unitTest.coordinatesString(4, 3);
        console.log('coordinates.unitTest.hook.coordinatesString');
        console.log('xCoor: ' + xCoor);
        console.log('yCoor: ' + yCoor);
        if (coor === '{"x":4,"y":3}') {
            console.log('Passed!');
        } else {
            console.log('Failed! Actual value: ' + coor);
        }
        //
    };

    /**
     * Tests the formattedCoordinates function
     * Functional cohesion/Stamp coupling/No-op
     * @author DoubleX
     * @param {object} coordinates - The dom's new coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.formattedCoordinates = function(coordinates) {
        // Ensures the output's the expected one with respect of the given input
        var formattedUnitTestCoor = unitTest.formattedCoordinates({ x: 2, y: 10 });
        console.log('coordinates.unitTest.hook.formattedCoordinates');
        console.log('coordinates.x: ' + coordinates.x);
        console.log('coordinates.y: ' + coordinates.y);
        if (formattedUnitTestCoor === '(2, 10)') {
            console.log('Passed!');
        } else {
            console.log('Failed! Actual value: ' + formattedUnitTestCoor);
        }
        //
    };

    /**
     * Tests the setCoordinates function
     * Functional cohesion/Stamp coupling/Idempotent
     * @author DoubleX
     * @param {string} domId - The id of the dom to have its coordinates set
     * @param {object} coordinates - The dom's new coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.setCoordinates = function(domId, coordinates) {
        // Ensures the given dom having fake coordinates has the expected value
        unitTest.setCoordinates(domId, { x: 4, y: 3 });
        var value = hook.dom(domId).value;
        console.log('coordinates.unitTest.hook.setCoordinates');
        console.log('domId: ' + domId);
        console.log('coordinates.x: ' + coordinates.x);
        console.log('coordinates.y: ' + coordinates.y);
        if (value === '{"x":4,"y":3}') {
            console.log('Passed!');
        } else {
            console.log('Failed! Actual value: ' + value);
        }
        //
    };

})(chess.coordinates.hook, chess.unitTestSwitches, chess.coordinates.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file coordinates.js from path js/abstractChess/unitTests/');
//