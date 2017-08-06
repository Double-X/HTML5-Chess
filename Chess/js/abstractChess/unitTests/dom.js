// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading dom.js!');
}
//

// This unit test js file should be placed in abstractChess/unitTests

/** The dom implementation unit test suite
 * Functional cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 6
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
    unitTest._isActive = function() { return unitTestSwitches.dom; };

    /**
     * Returns the id of the table cell dom having the specified coordinate
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {object} coordinates - The dom coordinates
     * @return {string} The id of the matching dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.cellDomId = hook.cellDomId;
    hook.cellDomId = function(coordinates) {
        if (unitTest._isActive()) unitTest.hook.cellDomId(coordinates);
        return unitTest.cellDomId(coordinates);
    };

    /**
     * Returns the dom with the specified dom id
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} domId - The id of the dom
     * @return {dom} The dom having the specified id
     * @since v1.0
     * @version v1.0
     */
    unitTest.dom = hook.dom;
    hook.dom = function(domId) {
        if (unitTest._isActive()) unitTest.hook.dom(domId);
        return unitTest.dom(domId);
    };

    /**
     * Checks if the 2 doms are on different sides
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} dom1Id - The id of the 1st dom
     * @param {string} dom2Id - The id of the 2nd dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest.isDifferentSide = hook.isDifferentSide;
    hook.isDifferentSide = function(dom1Id, dom2Id) {
        if (unitTest._isActive()) unitTest.hook.isDifferentSide(dom1Id, dom2Id);
        return unitTest.isDifferentSide(dom1Id, dom2Id);
    };

    /**
     * Checks if the dom's a piece
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} domId - The id of the dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest.isPiece = hook.isPiece;
    hook.isPiece = function(domId) {
        if (unitTest._isActive()) unitTest.hook.isPiece(domId);
        return unitTest.isPiece(domId);
    };

    /**
     * Returns the dom side
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} domId - The id of the dom
     * @return {string} The side of the selectable
     * @since v1.0
     * @version v1.0
     */
    unitTest.side = hook.side;
    hook.side = function(domId) {
        if (unitTest._isActive()) unitTest.hook.side(domId);
        return unitTest.side(domId);
    };

    /**
     * Returns the dom type
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} domId - The id of the dom
     * @return {string} The type of the dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.type = hook.type;
    hook.type = function(domId) {
        if (unitTest._isActive()) unitTest.hook.type(domId);
        return unitTest.type(domId);
    };

    /**
     * Returns the dom id part with the specified index
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} domId - The id of the dom
     * @param {number} index - The index of the requested dom id part
     * @return {string} The part of the dom id
     * @since v1.0
     * @version v1.0
     */
    unitTest._idPart = hook._idPart;
    hook._idPart = function(domId, index) {
        if (unitTest._isActive()) unitTest.hook._idPart(domId, index);
        return unitTest._idPart(domId, index);
    };

    /**
     * Tests the cellDomId function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} coordinates - The dom coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.cellDomId = function(coordinates) {
        // Ensures the output's the expected one with respect of the given input
        var cellDomId = unitTest.cellDomId(coordinates);
        var cellDomCoordinates = chess.coordinates.api.coordinates(cellDomId);
        console.log('dom.unitTest.hook.cellDomId');
        console.log('JSON.stringify(coordinates): ' + JSON.stringify(coordinates));
        console.log('cellDomId: ' + cellDomId);
        if (cellDomCoordinates.x === coordinates.x && cellDomCoordinates.y === coordinates.y) {
            console.log('Passed!');
        } else {
            console.log('Failed! Actual value: ' + JSON.stringify(cellDomCoordinates));
        }
        //
    };

    /**
     * Tests the dom function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} domId - The id of the dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.dom = function(domId) {
        // Ensures the output's the expected one with respect of the given input
        var dom = unitTest.dom(domId);
        console.log('dom.unitTest.hook.dom');
        console.log('domId: ' + domId);
        console.log('dom: ' + dom);
        if (dom.id === domId) {
            console.log('Passed!');
        } else {
            console.log('Failed! Actual value: ' + dom.id);
        }
        //
    };

    /**
     * Tests the isDifferentSide function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} dom1Id - The id of the 1st dom
     * @param {string} dom2Id - The id of the 2nd dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.isDifferentSide = function(dom1Id, dom2Id) {
        // Ensures the output's the expected one with respect of the given input
        var isUnitTestDifferentSide1 = unitTest.isDifferentSide('Red_Chariot_1', 'Red_Cannon_2');
        var isUnitTestDifferentSide2 = unitTest.isDifferentSide('Red_Chariot_1', 'Black_Chariot_1');
        console.log('dom.unitTest.hook.isDifferentSide');
        console.log('dom1Id: ' + dom1Id);
        console.log('dom2Id: ' + dom2Id);
        console.log('isDifferentSide: ' + unitTest.isDifferentSide(dom1Id, dom2Id));
        if (isUnitTestDifferentSide1) {
            console.log('Failed the 1st test! Actual value: ' + isUnitTestDifferentSide1);
        } else {
            console.log('Passed the 1st test!');
        }
        if (isUnitTestDifferentSide2) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + isUnitTestDifferentSide2);
        }
        //
    };

    /**
     * Tests the isPiece function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} domId - The id of the dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.isPiece = function(domId) {
        // The function's too trivial to be unit tested
        console.log('dom.unitTest.hook.isPiece');
        console.log('domId: ' + domId);
        console.log('isPiece: ' + unitTest.isPiece(domId));
        //
    };

    /**
     * Tests the side function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} domId - The id of the dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.side = function(domId) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestSide = unitTest.side('Red_Chariot_1');
        console.log('dom.unitTest.hook.side');
        console.log('domId: ' + domId);
        console.log('side: ' + unitTest.side(domId));
        if (unitTestSide === 'Red') {
            console.log('Passed!');
        } else {
            console.log('Failed! Actual value: ' + unitTestSide);
        }
        //
    };

    /**
     * Tests the type function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} domId - The id of the dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.type = function(domId) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestType = unitTest.type('Red_Chariot_1');
        console.log('dom.unitTest.hook.type');
        console.log('domId: ' + domId);
        console.log('type: ' + unitTest.type(domId));
        if (unitTestType === 'Chariot') {
            console.log('Passed!');
        } else {
            console.log('Failed! Actual value: ' + unitTestType);
        }
        //
    };

    /**
     * Tests the _idPart function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} domId - The id of the dom
     * @param {number} index - The index of the requested dom id part
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._idPart = function(domId, index) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestDomId = 'Red_General';
        var unitTestIdPart1 = unitTest._idPart(unitTestDomId, 0);
        var unitTestIdPart2 = unitTest._idPart(unitTestDomId, 1);
        console.log('dom.unitTest.hook._idPart');
        console.log('domId: ' + domId);
        console.log('index: ' + index);
        console.log('idPart: ' + unitTest._idPart(domId, index));
        if (unitTestIdPart1 === 'Red') {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestIdPart1);
        }
        if (unitTestIdPart2 === 'General') {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIdPart2);
        }
        //
    };

})(chess.dom.hook, chess.unitTestSwitches, chess.dom.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file dom.js from path js/abstractChess/unitTests/');
//