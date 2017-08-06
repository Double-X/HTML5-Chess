// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading blockable.js!');
}
//

// This unit test js file should be placed in chess/unitTests

/** The blockable implementation unit test suite
 * Sequential cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 4
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
    unitTest._isActive = function() { return unitTestSwitches.blockable; };

    /**
     * Checks if any piece's lying between the movement line
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isStraightBlocked = hook._isStraightBlocked;
    hook._isStraightBlocked = function(blockableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook._isStraightBlocked(blockableId, destinationId);
        }
        return unitTest._isStraightBlocked(blockableId, destinationId);
    };

    /**
     * Checks if the path isn't straight
     * Functional cohesion/Stamp coupling/Idempotent
     * @author DoubleX
     * @param {object} blockableCoor - The coordinates of the blockable dom
     * @param {object} destinationCoor - The coordinates of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNotStraight = hook._isNotStraight;
    hook._isNotStraight = function(blockableCoor, destinationCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotStraight(blockableCoor, destinationCoor);
        }
        return unitTest._isNotStraight(blockableCoor, destinationCoor);
    };

    /**
     * Generates the straight path between the blockable and the destination
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} blockableCoor - The coordinates of the blockable dom
     * @param {object} destinationCoor - The coordinates of the destination dom
     * @return {array} The array of coordinates constituting the path
     * @since v1.0
     * @version v1.0
     */
    unitTest._straightPath = hook._straightPath;
    hook._straightPath = function(blockableCoor, destinationCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._straightPath(blockableCoor, destinationCoor);
        }
        return unitTest._straightPath(blockableCoor, destinationCoor);
    };

    /**
     * Checks if any piece's at the nearest point on the diagonal path
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isDiagonalBlocked = hook._isDiagonalBlocked;
    hook._isDiagonalBlocked = function(blockableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook._isDiagonalBlocked(blockableId, destinationId);
        }
        return unitTest._isDiagonalBlocked(blockableId, destinationId);
    };

    /**
     * Checks if the path isn't diagonal
     * Functional cohesion/Functional coupling/Idempotent
     * @author DoubleX
     * @param {object} blockableCoor - The coordinates of the blockable dom
     * @param {object} destinationCoor - The coordinates of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNotDiagonal = hook._isNotDiagonal;
    hook._isNotDiagonal = function(blockableCoor, destinationCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotDiagonal(blockableCoor, destinationCoor);
        }
        return unitTest._isNotDiagonal(blockableCoor, destinationCoor);
    };

    /**
     * Generates the diagonal path with length 1 nearby the blockable
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} blockableCoor - The coordinates of the blockable dom
     * @param {object} destinationCoor - The coordinates of the destination dom
     * @return {array} The array of coordinates constituting the path
     * @since v1.0
     * @version v1.0
     */
    unitTest._diagonalPath = hook._diagonalPath;
    hook._diagonalPath = function(blockableCoor, destinationCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._diagonalPath(blockableCoor, destinationCoor);
        }
        return unitTest._diagonalPath(blockableCoor, destinationCoor);
    };

    /**
     * Tests the _isStraightBlocked function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isStraightBlocked = function(blockableId, destinationId) {
        // The function's too trivial to be unit tested
        console.log('blockable.unitTest.hook._isStraightBlocked');
        console.log('blockableId: ' + blockableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the _isNotStraight function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} blockableCoor - The coordinates of the blockable dom
     * @param {object} destinationCoor - The coordinates of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotStraight = function(blockableCoor, destinationCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestBlockableCoor = { x: 1, y: 1 };
        var unitTestIsNotStraight1 = unitTest._isNotStraight(unitTestBlockableCoor, unitTestBlockableCoor);
        var unitTestIsNotStraight2 = unitTest._isNotStraight(unitTestBlockableCoor, { x: 8, y: 1 });
        var unitTestIsNotStraight3 = unitTest._isNotStraight(unitTestBlockableCoor, { x: 1, y: 8 });
        var unitTestIsNotStraight4 = unitTest._isNotStraight(unitTestBlockableCoor, { x: 8, y: 8 });
        console.log('blockable.unitTest.hook._isNotStraight');
        console.log('JSON.stringify(blockableCoor): ' + JSON.stringify(blockableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
        console.log('isNotStraight: ' + unitTest._isNotStraight(blockableCoor, destinationCoor));
        if (unitTestIsNotStraight1) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsNotStraight1);
        }
        if (unitTestIsNotStraight2) {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsNotStraight2);
        } else {
            console.log('Passed the 2nd test!');
        }
        if (unitTestIsNotStraight3) {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsNotStraight3);
        } else {
            console.log('Passed the 3rd test!');
        }
        if (unitTestIsNotStraight4) {
            console.log('Passed the 4th test!');
        } else {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsNotStraight4);
        }
        //
    };

    /**
     * Tests the _straightPath function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} blockableCoor - The coordinates of the blockable dom
     * @param {object} destinationCoor - The coordinates of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._straightPath = function(blockableCoor, destinationCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestBlockableCoor1 = { x: 1, y: 1 };
        var unitTestStraightPath1 = unitTest._straightPath(unitTestBlockableCoor1, { x: 1, y: 8 });
        var unitTestStraightPath2 = unitTest._straightPath(unitTestBlockableCoor1, { x: 8, y: 1 });
        var unitTestBlockableCoor2 = { x: 8, y: 8 };
        var unitTestStraightPath3 = unitTest._straightPath(unitTestBlockableCoor2, { x: 8, y: 1 });
        var unitTestStraightPath4 = unitTest._straightPath(unitTestBlockableCoor2, { x: 1, y: 8 });
        function isSameXCoor(xCoor) {
            return function(coor) { return coor.x === xCoor; };
        };
        function isSameYCoor(yCoor) {
            return function(coor) { return coor.y === yCoor; };
        };
        console.log('blockable.unitTest.hook._straightPath');
        console.log('JSON.stringify(blockableCoor): ' + JSON.stringify(blockableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
        console.log('straightPath: ' + JSON.stringify(unitTest._straightPath(blockableCoor, destinationCoor)));
        if (unitTestStraightPath1.every(isSameXCoor(1))) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + JSON.stringify(unitTestStraightPath1));
        }
        if (unitTestStraightPath2.every(isSameYCoor(1))) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + JSON.stringify(unitTestStraightPath2));
        }
        if (unitTestStraightPath3.every(isSameXCoor(9))) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + JSON.stringify(unitTestStraightPath3));
        }
        if (unitTestStraightPath4.every(isSameYCoor(10))) {
            console.log('Passed the 4th test!');
        } else {
            console.log('Failed the 4th test! Actual value: ' + JSON.stringify(unitTestStraightPath4));
        }
        //
    };

    /**
     * Tests the _isDiagonalBlocked function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} blockableId - The id of the blockable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isDiagonalBlocked = function(blockableId, destinationId) {
        // The function's too trivial to be unit tested
        console.log('blockable.unitTest.hook._isDiagonalBlocked');
        console.log('blockableId: ' + blockableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the _isNotDiagonal function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} blockableCoor - The coordinates of the blockable dom
     * @param {object} destinationCoor - The coordinates of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotDiagonal = function(blockableCoor, destinationCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestBlockableCoor = { x: 1, y: 1 };
        var unitTestIsNotDiagonal1 = unitTest._isNotDiagonal(unitTestBlockableCoor, unitTestBlockableCoor);
        var unitTestIsNotDiagonal2 = unitTest._isNotDiagonal(unitTestBlockableCoor, { x: 8, y: 1 });
        var unitTestIsNotDiagonal3 = unitTest._isNotDiagonal(unitTestBlockableCoor, { x: 1, y: 8 });
        var unitTestIsNotDiagonal4 = unitTest._isNotDiagonal(unitTestBlockableCoor, { x: 8, y: 8 });
        console.log('blockable.unitTest.hook._isNotDiagonal');
        console.log('JSON.stringify(blockableCoor): ' + JSON.stringify(blockableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
        console.log('isNotDiagonal: ' + unitTest._isNotDiagonal(blockableCoor, destinationCoor));
        if (unitTestIsNotDiagonal1) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsNotDiagonal1);
        }
        if (unitTestIsNotDiagonal2) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsNotDiagonal2);
        }
        if (unitTestIsNotDiagonal3) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsNotDiagonal3);
        }
        if (unitTestIsNotDiagonal4) {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsNotDiagonal4);
        } else {
            console.log('Passed the 4th test!');
        }
        //
    };

    /**
     * Tests the _diagonalPath function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} blockableCoor - The coordinates of the blockable dom
     * @param {object} destinationCoor - The coordinates of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._diagonalPath = function(blockableCoor, destinationCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestBlockableCoor1 = { x: 1, y: 1 };
        var unitTestBlockableCoor2 = { x: 8, y: 1 };
        var unitTestBlockableCoor3 = { x: 1, y: 8 };
        var unitTestBlockableCoor4 = { x: 8, y: 8 };
        var unitTestDiagonalPath1 = unitTest._diagonalPath(unitTestBlockableCoor1, unitTestBlockableCoor4);
        var unitTestDiagonalPath2 = unitTest._diagonalPath(unitTestBlockableCoor4, unitTestBlockableCoor1);
        var unitTestDiagonalPath3 = unitTest._diagonalPath(unitTestBlockableCoor2, unitTestBlockableCoor3);
        var unitTestDiagonalPath4 = unitTest._diagonalPath(unitTestBlockableCoor4, unitTestBlockableCoor2);
        var unitTestSlope1 = 1, unitTestSlope2 = -1;
        function slope(startCoor, endCoor) {
            return (endCoor.y - startCoor.y) / (endCoor.x - startCoor.x);
        }
        function isSameSlope(startCoor, endCoor, unitTestSlope) {
            return function(coor) {
                if (coor.x === endCoor.x && coor.y === endCoor.y) return true;
                if (coor.x === startCoor.x && coor.y === startCoor.y) {
                    return true;
                }
                if (slope(coor, startCoor) !== unitTestSlope) return false;
                return slope(coor, endCoor) === unitTestSlope;
            };
        };
        console.log('blockable.unitTest.hook._diagonalPath');
        console.log('JSON.stringify(blockableCoor): ' + JSON.stringify(blockableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
        console.log('diagonalPath: ' + JSON.stringify(unitTest._diagonalPath(blockableCoor, destinationCoor)));
        if (unitTestDiagonalPath1.every(isSameSlope(unitTestBlockableCoor1, unitTestBlockableCoor4, unitTestSlope1))) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + JSON.stringify(unitTestDiagonalPath1));
        }
        if (unitTestDiagonalPath2.every(isSameSlope(unitTestBlockableCoor4, unitTestBlockableCoor1, unitTestSlope1))) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + JSON.stringify(unitTestDiagonalPath2));
        }
        if (unitTestDiagonalPath3.every(isSameSlope(unitTestBlockableCoor2, unitTestBlockableCoor3, unitTestSlope2))) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + JSON.stringify(unitTestDiagonalPath3));
        }
        if (unitTestDiagonalPath4.every(isSameSlope(unitTestBlockableCoor3, unitTestBlockableCoor2, unitTestSlope2))) {
            console.log('Passed the 4th test!');
        } else {
            console.log('Failed the 4th test! Actual value: ' + JSON.stringify(unitTestDiagonalPath4));
        }
        //
    };

})(chess.blockable.hook, chess.unitTestSwitches, chess.blockable.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file blockable.js from path js/chess/unitTests/');
//