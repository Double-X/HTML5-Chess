// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading movableAbilities.js!');
}
//

// This unit test js file should be placed in chineseChess/unitTests

/** The movableAbilities implementation unit test suite
 * Sequential cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 7
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
    unitTest._isActive = function() { return unitTestSwitches.movableAbilities; };

    /**
     * Checks if it's invalid to move the movable to the destination
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isInvalid = hook._isInvalid;
    hook._isInvalid = function(movableId, destCoor) {
        if (unitTest._isActive()) unitTest.hook._isInvalid(movableId, destCoor);
        return unitTest._isInvalid(movableId, destCoor);
    };

    /**
     * Checks if the movement isn't on a straight line
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNotStraightWithMessage = hook._isNotStraightWithMessage;
    hook._isNotStraightWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotStraightWithMessage(movableId, destCoor);
        }
        return unitTest._isNotStraightWithMessage(movableId, destCoor);
    };

    /**
     * Checks if the movement isn't on a straight line
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNotStraight = hook._isNotStraight;
    hook._isNotStraight = function(movableCoor, destinationCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotStraight(movableCoor, destinationCoor);
        }
        return unitTest._isNotStraight(movableCoor, destinationCoor);
    };

    /**
     * Checks if the movement isn't like the Chinese Ri character
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNotRiLikeWithMessage = hook._isNotRiLikeWithMessage;
    hook._isNotRiLikeWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotRiLikeWithMessage(movableId, destCoor);
        }
        return unitTest._isNotRiLikeWithMessage(movableId, destCoor);
    };

    /**
     * Checks if the movement isn't like the Chinese Ri character
     * Sequential cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNotRiLike = hook._isNotRiLike;
    hook._isNotRiLike = function(movableCoor, destinationCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotRiLike(movableCoor, destinationCoor);
        }
        return unitTest._isNotRiLike(movableCoor, destinationCoor);
    };

    /**
     * Checks if the movement isn't diagonal with length being 2 points
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNot2PointDiagonalWithMessage = hook._isNot2PointDiagonalWithMessage;
    hook._isNot2PointDiagonalWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNot2PointDiagonalWithMessage(movableId, destCoor);
        }
        return unitTest._isNot2PointDiagonalWithMessage(movableId, destCoor);
    };

    /**
     * Checks if the movement isn't diagonal with length being 1 point
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNot1PointDiagonalWithMessage = hook._isNot1PointDiagonalWithMessage;
    hook._isNot1PointDiagonalWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNot1PointDiagonalWithMessage(movableId, destCoor);
        }
        return unitTest._isNot1PointDiagonalWithMessage(movableId, destCoor);
    };

    /**
     * Checks if the movement isn't diagonal with the specified length
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @param {number} length - The movement path length
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNotXPointDiagonalWithMessage = hook._isNotXPointDiagonalWithMessage;
    hook._isNotXPointDiagonalWithMessage = function(movableId, destCoor, 
            length) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotXPointDiagonalWithMessage(movableId, destCoor, length);
        }
        return unitTest._isNotXPointDiagonalWithMessage(movableId, destCoor, length);
    };

    /**
     * Checks if the movement isn't diagonal with the specified length
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @param {number} length - The movement path length
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNotXPointDiagonal = hook._isNotXPointDiagonal;
    hook._isNotXPointDiagonal = function(movableCoor, destinationCoor, length) {
        if (unitTest._isActive()) {
            unitTest.hook._isNotXPointDiagonal(movableCoor, destinationCoor, length);
        }
        return unitTest._isNotXPointDiagonal(movableCoor, destinationCoor, length);
    };

    /**
     * Checks if the movement is across the river
     * Sequential cohesion/Stamp coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isAcrossRiverWithMessage = hook._isAcrossRiverWithMessage;
    hook._isAcrossRiverWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isAcrossRiverWithMessage(movableId, destCoor);
        }
        return unitTest._isAcrossRiverWithMessage(movableId, destCoor);
    };

    /**
     * Checks if the movement is across the river
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {number} movableYCoor - The movable dom y coordinate
     * @param {number} destinationYCoor - The destination y coordinate
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isAcrossRiver = hook._isAcrossRiver;
    hook._isAcrossRiver = function(movableYCoor, destinationYCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isAcrossRiver(movableYCoor, destinationYCoor);
        }
        return unitTest._isAcrossRiver(movableYCoor, destinationYCoor);
    };

    /**
     * Checks if the movement will lead to be movable being out of the palace
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isOutOfPalaceWithMessage = hook._isOutOfPalaceWithMessage;
    hook._isOutOfPalaceWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isOutOfPalaceWithMessage(movableId, destCoor);
        }
        return unitTest._isOutOfPalaceWithMessage(movableId, destCoor);
    };

    /**
     * Checks if the movement will lead to be movable being out of the palace
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} destinationCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isOutOfPalace = hook._isOutOfPalace;
    hook._isOutOfPalace = function(destinationCoor) {
        if (unitTest._isActive()) unitTest.hook._isOutOfPalace(destinationCoor);
        return unitTest._isOutOfPalace(destinationCoor);
    };

    /**
     * Checks if the movement isn't on a straight line with length being 1 point
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNot1PointStraightWithMessage = hook._isNot1PointStraightWithMessage;
    hook._isNot1PointStraightWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNot1PointStraightWithMessage(movableId, destCoor);
        }
        return unitTest._isNot1PointStraightWithMessage(movableId, destCoor);
    };

    /**
     * Checks if the movement isn't on a straight line with length being 1 point
     * Sequential cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNot1PointStraight = hook._isNot1PointStraight;
    hook._isNot1PointStraight = function(movableCoor, destinationCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isNot1PointStraight(movableCoor, destinationCoor);
        }
        return unitTest._isNot1PointStraight(movableCoor, destinationCoor);
    };

    /**
     * Checks if the movement is backward
     * Sequential cohesion/Stamp coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isBackwardWithMessage = hook._isBackwardWithMessage;
    hook._isBackwardWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isBackwardWithMessage(movableId, destCoor);
        }
        return unitTest._isBackwardWithMessage(movableId, destCoor);
    };

    /**
     * Checks if the movement is horizontal before crossing the river
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isSideBehindRiverWithMessage = hook._isSideBehindRiverWithMessage;
    hook._isSideBehindRiverWithMessage = function(movableId, destCoor) {
        if (unitTest._isActive()) {
            unitTest.hook._isSideBehindRiverWithMessage(movableId, destCoor);
        }
        return unitTest._isSideBehindRiverWithMessage(movableId, destCoor);
    };

    /**
     * Checks if the movement is horizontal before crossing the river
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {number} movableXCoor - The movable dom x coordinate
     * @param {object} destCoor - The destination coordinates
     * @param {string} side - The side of the movable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isSideBehindRiver = hook._isSideBehindRiver;
    hook._isSideBehindRiver = function(movableXCoor, destCoor, side) {
        if (unitTest._isActive()) {
            unitTest.hook._isSideBehindRiver(movableXCoor, destCoor, side);
        }
        return unitTest._isSideBehindRiver(movableXCoor, destCoor, side);
    };

    /**
     * Tests the _isInvalid function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isInvalid = function(movableId, destCoor) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._isInvalid');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isNotStraightWithMessage function
     * Functional/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotStraightWithMessage = function(movableId, destCoor) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isNotStraightWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isNotStraight function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotStraight = function(movableCoor, destinationCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestMovableCoor1 = { x: 1, y: 1 };
        var unitTestMovableCoor2 = { x: 1, y: 10 };
        var unitTestMovableCoor3 = { x: 9, y: 1 };
        var unitTestMovableCoor4 = { x: 9, y: 10 };
        var unitTestIsNotStraight1 = unitTest._isNotStraight(unitTestMovableCoor1, unitTestMovableCoor2);
        var unitTestIsNotStraight2 = unitTest._isNotStraight(unitTestMovableCoor2, unitTestMovableCoor1);
        var unitTestIsNotStraight3 = unitTest._isNotStraight(unitTestMovableCoor1, unitTestMovableCoor3);
        var unitTestIsNotStraight4 = unitTest._isNotStraight(unitTestMovableCoor3, unitTestMovableCoor1);
        var unitTestIsNotStraight5 = unitTest._isNotStraight(unitTestMovableCoor4, unitTestMovableCoor1);
        var unitTestIsNotStraight6 = unitTest._isNotStraight(unitTestMovableCoor1, unitTestMovableCoor4);
        console.log('movableAbilities.unitTest.hook._isNotStraight');
        console.log('JSON.stringify(movableCoor): ' + JSON.stringify(movableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
        console.log('isNotStraight: ' + unitTest._isNotStraight(movableCoor, destinationCoor));
        if (unitTestIsNotStraight1) {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsNotStraight1);
        } else {
            console.log('Passed the 1st test!');
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
            console.log('Failed the 4th test! Actual value: ' + unitTestIsNotStraight4);
        } else {
            console.log('Passed the 4th test!');
        }
        if (unitTestIsNotStraight5) {
            console.log('Passed the 5th test!');
        } else {
            console.log('Failed the 5th test! Actual value: ' + unitTestIsNotStraight5);
        }
        if (unitTestIsNotStraight6) {
            console.log('Passed the 6th test!');
        } else {
            console.log('Failed the 6th test! Actual value: ' + unitTestIsNotStraight6);
        }
        //
    };

    /**
     * Tests the _isNotRiLikeWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotRiLikeWithMessage = function(movableId, destCoor) {
        // The function's about control flow and shouldn't be unit tested
        if (unitTest._isActive()) {
        console.log('movableAbilities.unitTest.hook._isNotRiLikeWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        }
        //
    };

    /**
     * Tests the _isNotRiLike function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotRiLike = function(movableCoor, destinationCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestMovableCoor = { x: 5, y: 3 };
        var isRiLikeDestinationCoors = [
            { x: 7, y: 2 },
            { x: 7, y: 4 },
            { x: 6, y: 5 },
            { x: 4, y: 5 },
            { x: 3, y: 4 },
            { x: 3, y: 2 },
            { x: 4, y: 1 },
            { x: 6, y: 1 }
        ];
        var isNotRiLikeDestinationCoors = [];
        function xCoors(xCoor) {
            function yCoors(yCoor) {
                if (xCoor === unitTestMovableCoor.x && yCoor === unitTestMovableCoor.y) {
                    return;
                }
                function isRiLike(coor) {
                    return coor.x === xCoor && coor.y === yCoor;
                };
                if (isRiLikeDestinationCoors.some(isRiLike)) return;
                isNotRiLikeDestinationCoors.push({ x: xCoor, y: yCoor });
            }
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(yCoors);
        };
        [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(xCoors);
        function isNotRiLike(destinationCoor) {
            return unitTest._isNotRiLike(unitTestMovableCoor, destinationCoor);
        };
        var unitTestIsNotRiLike1 = isNotRiLike(isRiLikeDestinationCoors[0]);
        var unitTestIsNotRiLike2 = isNotRiLike(isRiLikeDestinationCoors[1]);
        var unitTestIsNotRiLike3 = isNotRiLike(isRiLikeDestinationCoors[2]);
        var unitTestIsNotRiLike4 = isNotRiLike(isRiLikeDestinationCoors[3]);
        var unitTestIsNotRiLike5 = isNotRiLike(isRiLikeDestinationCoors[4]);
        var unitTestIsNotRiLike6 = isNotRiLike(isRiLikeDestinationCoors[5]);
        var unitTestIsNotRiLike7 = isNotRiLike(isRiLikeDestinationCoors[6]);
        var unitTestIsNotRiLike8 = isNotRiLike(isRiLikeDestinationCoors[7]);
        var unitTestIsNotRiLike9 = isNotRiLikeDestinationCoors.every(isNotRiLike);
        console.log('movableAbilities.unitTest.hook._isNotRiLike');
        console.log('JSON.stringify(movableCoor): ' + JSON.stringify(movableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
        console.log('isNotRiLike: ' + unitTest._isNotRiLike(movableCoor, destinationCoor));
        if (unitTestIsNotRiLike1) {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsNotRiLike1);
        } else {
            console.log('Passed the 1st test!');
        }
        if (unitTestIsNotRiLike2) {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsNotRiLike2);
        } else {
            console.log('Passed the 2nd test!');
        }
        if (unitTestIsNotRiLike3) {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsNotRiLike3);
        } else {
            console.log('Passed the 3rd test!');
        }
        if (unitTestIsNotRiLike4) {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsNotRiLike4);
        } else {
            console.log('Passed the 4th test!');
        }
        if (unitTestIsNotRiLike5) {
            console.log('Failed the 5th test! Actual value: ' + unitTestIsNotRiLike5);
        } else {
            console.log('Passed the 5th test!');
        }
        if (unitTestIsNotRiLike6) {
            console.log('Failed the 6th test! Actual value: ' + unitTestIsNotRiLike6);
        } else {
            console.log('Passed the 6th test!');
        }
        if (unitTestIsNotRiLike7) {
            console.log('Failed the 7th test! Actual value: ' + unitTestIsNotRiLike7);
        } else {
            console.log('Passed the 7th test!');
        }
        if (unitTestIsNotRiLike8) {
            console.log('Failed the 8th test! Actual value: ' + unitTestIsNotRiLike8);
        } else {
            console.log('Passed the 8th test!');
        }
        if (unitTestIsNotRiLike9) {
            console.log('Passed the 9th test!');
        } else {
            console.log('Failed the 9th test! Actual value: ' + unitTestIsNotRiLike9);
        }
        //
    };

    /**
     * Tests the _isNot2PointDiagonalWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNot2PointDiagonalWithMessage = function(movableId, destCoor) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._isNot2PointDiagonalWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isNot1PointDiagonalWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNot1PointDiagonalWithMessage = function(movableId, destCoor) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._isNot1PointDiagonalWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isNotXPointDiagonalWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @param {number} length - The movement path length
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotXPointDiagonalWithMessage = function(movableId, destCoor, 
            length) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isNotXPointDiagonalWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isNotXPointDiagonal function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @param {number} length - The movement path length
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotXPointDiagonal = function(movableCoor, destinationCoor, length) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestMovableCoor = { x: 5, y: 3 }, unitTestLength = 2;
        var unitTestIsNotXPointDiagonal1 = unitTest._isNotXPointDiagonal(unitTestMovableCoor, { x: 7, y: 1 }, unitTestLength);
        var unitTestIsNotXPointDiagonal2 = unitTest._isNotXPointDiagonal(unitTestMovableCoor, { x: 7, y: 5 }, unitTestLength);
        var unitTestIsNotXPointDiagonal3 = unitTest._isNotXPointDiagonal(unitTestMovableCoor, { x: 3, y: 5 }, unitTestLength);
        var unitTestIsNotXPointDiagonal4 = unitTest._isNotXPointDiagonal(unitTestMovableCoor, { x: 3, y: 1 }, unitTestLength);
        var unitTestIsNotXPointDiagonal5 = unitTest._isNotXPointDiagonal(unitTestMovableCoor, { x: 6, y: 2 }, unitTestLength);
        var unitTestIsNotXPointDiagonal6 = unitTest._isNotXPointDiagonal(unitTestMovableCoor, { x: 6, y: 4 }, unitTestLength);
        var unitTestIsNotXPointDiagonal7 = unitTest._isNotXPointDiagonal(unitTestMovableCoor, { x: 4, y: 4 }, unitTestLength);
        var unitTestIsNotXPointDiagonal8 = unitTest._isNotXPointDiagonal(unitTestMovableCoor, { x: 4, y: 2 }, unitTestLength);
        var unitTestIsNotXPointDiagonal9 = unitTest._isNotXPointDiagonal(unitTestMovableCoor, { x: 7, y: 3 }, unitTestLength);
        var unitTestIsNotXPointDiagonal10 = unitTest._isNotXPointDiagonal(unitTestMovableCoor, { x: 5, y: 5 }, unitTestLength);
        var unitTestIsNotXPointDiagonal11 = unitTest._isNotXPointDiagonal(unitTestMovableCoor, { x: 3, y: 3 }, unitTestLength);
        var unitTestIsNotXPointDiagonal12 = unitTest._isNotXPointDiagonal(unitTestMovableCoor, { x: 5, y: 1 }, unitTestLength);
        console.log('movableAbilities.unitTest.hook._isNotXPointDiagonal');
        console.log('JSON.stringify(movableCoor): ' + JSON.stringify(movableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
        console.log('isNotXPointDiagonal: ' + unitTest._isNotXPointDiagonal(movableCoor, destinationCoor, length));
        console.log('length: ' + length);
        if (unitTestIsNotXPointDiagonal1) {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsNotXPointDiagonal1);
        } else {
            console.log('Passed the 1st test!');
        }
        if (unitTestIsNotXPointDiagonal2) {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsNotXPointDiagonal2);
        } else {
            console.log('Passed the 2nd test!');
        }
        if (unitTestIsNotXPointDiagonal3) {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsNotXPointDiagonal3);
        } else {
            console.log('Passed the 3rd test!');
        }
        if (unitTestIsNotXPointDiagonal4) {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsNotXPointDiagonal4);
        } else {
            console.log('Passed the 4th test!');
        }
        if (unitTestIsNotXPointDiagonal5) {
            console.log('Passed the 5th test!');
        } else {
            console.log('Failed the 5th test! Actual value: ' + unitTestIsNotXPointDiagonal5);
        }
        if (unitTestIsNotXPointDiagonal6) {
            console.log('Passed the 6th test!');
        } else {
            console.log('Failed the 6th test! Actual value: ' + unitTestIsNotXPointDiagonal6);
        }
        if (unitTestIsNotXPointDiagonal7) {
            console.log('Passed the 7th test!');
        } else {
            console.log('Failed the 7th test! Actual value: ' + unitTestIsNotXPointDiagonal7);
        }
        if (unitTestIsNotXPointDiagonal8) {
            console.log('Passed the 8th test!');
        } else {
            console.log('Failed the 8th test! Actual value: ' + unitTestIsNotXPointDiagonal8);
        }
        if (unitTestIsNotXPointDiagonal9) {
            console.log('Passed the 9th test!');
        } else {
            console.log('Failed the 9th test! Actual value: ' + unitTestIsNotXPointDiagonal9);
        }
        if (unitTestIsNotXPointDiagonal10) {
            console.log('Passed the 10th test!');
        } else {
            console.log('Failed the 10th test! Actual value: ' + unitTestIsNotXPointDiagonal10);
        }
        if (unitTestIsNotXPointDiagonal11) {
            console.log('Passed the 11th test!');
        } else {
            console.log('Failed the 11th test! Actual value: ' + unitTestIsNotXPointDiagonal11);
        }
        if (unitTestIsNotXPointDiagonal12) {
            console.log('Passed the 12th test!');
        } else {
            console.log('Failed the 12th test! Actual value: ' + unitTestIsNotXPointDiagonal12);
        }
        //
    };

    /**
     * Tests the _isAcrossRiverWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isAcrossRiverWithMessage = function(movableId, destCoor) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isAcrossRiverWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isAcrossRiver function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {number} movableYCoor - The movable dom y coordinate
     * @param {number} destinationYCoor - The destination y coordinate
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isAcrossRiver = function(movableYCoor, destinationYCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestYCoor1 = 4, unitTestYCoor2 = 5;
        var unitTestYCoor3 = 6, unitTestYCoor4 = 7;
        var unitTestIsAcrossRiver1 = unitTest._isAcrossRiver(unitTestYCoor1, unitTestYCoor2);
        var unitTestIsAcrossRiver2 = unitTest._isAcrossRiver(unitTestYCoor2, unitTestYCoor1);
        var unitTestIsAcrossRiver3 = unitTest._isAcrossRiver(unitTestYCoor2, unitTestYCoor3);
        var unitTestIsAcrossRiver4 = unitTest._isAcrossRiver(unitTestYCoor3, unitTestYCoor2);
        var unitTestIsAcrossRiver5 = unitTest._isAcrossRiver(unitTestYCoor3, unitTestYCoor4);
        var unitTestIsAcrossRiver6 = unitTest._isAcrossRiver(unitTestYCoor4, unitTestYCoor3);
        console.log('movableAbilities.unitTest.hook._isAcrossRiver');
        console.log('movableYCoor: ' + movableYCoor);
        console.log('destinationYCoor: ' + destinationYCoor);
        console.log('isAcrossRiver: ' + unitTest._isAcrossRiver(movableYCoor, destinationYCoor));
        if (unitTestIsAcrossRiver1) {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsAcrossRiver1);
        } else {
            console.log('Passed the 1st test!');
        }
        if (unitTestIsAcrossRiver2) {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsAcrossRiver2);
        } else {
            console.log('Passed the 2nd test!');
        }
        if (unitTestIsAcrossRiver3) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsAcrossRiver3);
        }
        if (unitTestIsAcrossRiver4) {
            console.log('Passed the 4th test!');
        } else {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsAcrossRiver4);
        }
        if (unitTestIsAcrossRiver5) {
            console.log('Failed the 5th test! Actual value: ' + unitTestIsAcrossRiver5);
        } else {
            console.log('Passed the 5th test!');
        }
        if (unitTestIsAcrossRiver6) {
            console.log('Failed the 6th test! Actual value: ' + unitTestIsAcrossRiver6);
        } else {
            console.log('Passed the 6th test!');
        }
        //
    };

    /**
     * Tests the _isOutOfPalaceWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isOutOfPalaceWithMessage = function(movableId, destCoor) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isOutOfPalaceWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isOutOfPalace function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} destinationCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isOutOfPalace = function(destinationCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestIsOutOfPalace1 = unitTest._isOutOfPalace({ x: 4, y: 1});
        var unitTestIsOutOfPalace2 = unitTest._isOutOfPalace({ x: 6, y: 1});
        var unitTestIsOutOfPalace3 = unitTest._isOutOfPalace({ x: 4, y: 3});
        var unitTestIsOutOfPalace4 = unitTest._isOutOfPalace({ x: 6, y: 3});
        var unitTestIsOutOfPalace5 = unitTest._isOutOfPalace({ x: 3, y: 2});
        var unitTestIsOutOfPalace6 = unitTest._isOutOfPalace({ x: 5, y: 4});
        var unitTestIsOutOfPalace7 = unitTest._isOutOfPalace({ x: 7, y: 2});
        console.log('movableAbilities.unitTest.hook._isOutOfPalace');
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
        console.log('isOutOfPalace: ' + unitTest._isOutOfPalace(destinationCoor));
        if (unitTestIsOutOfPalace1) {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsOutOfPalace1);
        } else {
            console.log('Passed the 1st test!');
        }
        if (unitTestIsOutOfPalace2) {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsOutOfPalace2);
        } else {
            console.log('Passed the 2nd test!');
        }
        if (unitTestIsOutOfPalace3) {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsOutOfPalace3);
        } else {
            console.log('Passed the 3rd test!');
        }
        if (unitTestIsOutOfPalace4) {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsOutOfPalace4);
        } else {
            console.log('Passed the 4th test!');
        }
        if (unitTestIsOutOfPalace5) {
            console.log('Passed the 5th test!');
        } else {
            console.log('Failed the 5th test! Actual value: ' + unitTestIsOutOfPalace5);
        }
        if (unitTestIsOutOfPalace6) {
            console.log('Passed the 6th test!');
        } else {
            console.log('Failed the 6th test! Actual value: ' + unitTestIsOutOfPalace6);
        }
        if (unitTestIsOutOfPalace7) {
            console.log('Passed the 7th test!');
        } else {
            console.log('Failed the 7th test! Actual value: ' + unitTestIsOutOfPalace7);
        }
        //
    };

    /**
     * Tests the _isNot1PointStraightWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNot1PointStraightWithMessage = function(movableId, destCoor) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isNot1PointStraightWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isNot1PointStraight function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} movableCoor - The movable dom coordinates
     * @param {object} destinationCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNot1PointStraight = function(movableCoor, destinationCoor) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestMovableCoor = { x: 5, y: 3 };
        var unitTestIsNot1PointStraight1 = unitTest._isNot1PointStraight(unitTestMovableCoor, { x: 5, y: 2 });
        var unitTestIsNot1PointStraight2 = unitTest._isNot1PointStraight(unitTestMovableCoor, { x: 6, y: 3 });
        var unitTestIsNot1PointStraight3 = unitTest._isNot1PointStraight(unitTestMovableCoor, { x: 5, y: 4 });
        var unitTestIsNot1PointStraight4 = unitTest._isNot1PointStraight(unitTestMovableCoor, { x: 4, y: 3 });
        var unitTestIsNot1PointStraight5 = unitTest._isNot1PointStraight(unitTestMovableCoor, { x: 6, y: 2 });
        var unitTestIsNot1PointStraight6 = unitTest._isNot1PointStraight(unitTestMovableCoor, { x: 6, y: 4 });
        var unitTestIsNot1PointStraight7 = unitTest._isNot1PointStraight(unitTestMovableCoor, { x: 4, y: 4 });
        var unitTestIsNot1PointStraight8 = unitTest._isNot1PointStraight(unitTestMovableCoor, { x: 4, y: 2 });
        var unitTestIsNot1PointStraight9 = unitTest._isNot1PointStraight(unitTestMovableCoor, { x: 5, y: 1 });
        var unitTestIsNot1PointStraight10 = unitTest._isNot1PointStraight(unitTestMovableCoor, { x: 7, y: 3 });
        var unitTestIsNot1PointStraight11 = unitTest._isNot1PointStraight(unitTestMovableCoor, { x: 5, y: 5 });
        var unitTestIsNot1PointStraight12 = unitTest._isNot1PointStraight(unitTestMovableCoor, { x: 3, y: 3 });
        console.log('movableAbilities.unitTest.hook._isNot1PointStraight');
        console.log('JSON.stringify(movableCoor): ' + JSON.stringify(movableCoor));
        console.log('JSON.stringify(destinationCoor): ' + JSON.stringify(destinationCoor));
        console.log('isNot1PointStraight: ' + unitTest._isNot1PointStraight(movableCoor, destinationCoor));
        if (unitTestIsNot1PointStraight1) {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsNot1PointStraight1);
        } else {
            console.log('Passed the 1st test!');
        }
        if (unitTestIsNot1PointStraight2) {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsNot1PointStraight2);
        } else {
            console.log('Passed the 2nd test!');
        }
        if (unitTestIsNot1PointStraight3) {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsNot1PointStraight3);
        } else {
            console.log('Passed the 3rd test!');
        }
        if (unitTestIsNot1PointStraight4) {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsNot1PointStraight4);
        } else {
            console.log('Passed the 4th test!');
        }
        if (unitTestIsNot1PointStraight5) {
            console.log('Passed the 5th test!');
        } else {
            console.log('Failed the 5th test! Actual value: ' + unitTestIsNot1PointStraight5);
        }
        if (unitTestIsNot1PointStraight6) {
            console.log('Passed the 6th test!');
        } else {
            console.log('Failed the 6th test! Actual value: ' + unitTestIsNot1PointStraight6);
        }
        if (unitTestIsNot1PointStraight7) {
            console.log('Passed the 7th test!');
        } else {
            console.log('Failed the 7th test! Actual value: ' + unitTestIsNot1PointStraight7);
        }
        if (unitTestIsNot1PointStraight8) {
            console.log('Passed the 8th test!');
        } else {
            console.log('Failed the 8th test! Actual value: ' + unitTestIsNot1PointStraight8);
        }
        if (unitTestIsNot1PointStraight9) {
            console.log('Passed the 9th test!');
        } else {
            console.log('Failed the 9th test! Actual value: ' + unitTestIsNot1PointStraight9);
        }
        if (unitTestIsNot1PointStraight10) {
            console.log('Passed the 10th test!');
        } else {
            console.log('Failed the 10th test! Actual value: ' + unitTestIsNot1PointStraight10);
        }
        if (unitTestIsNot1PointStraight11) {
            console.log('Passed the 11th test!');
        } else {
            console.log('Failed the 11th test! Actual value: ' + unitTestIsNot1PointStraight11);
        }
        if (unitTestIsNot1PointStraight12) {
            console.log('Passed the 12th test!');
        } else {
            console.log('Failed the 12th test! Actual value: ' + unitTestIsNot1PointStraight12);
        }
        //
    };

    /**
     * Tests the _isBackwardWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isBackwardWithMessage = function(movableId, destCoor) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isBackwardWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isSideBehindRiverWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} destCoor - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isSideBehindRiverWithMessage = function(movableId, destCoor) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._isSideBehindRiverWithMessage');
        console.log('movableId: ' + movableId);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        //
    };

    /**
     * Tests the _isSideBehindRiver function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {number} movableXCoor - The movable dom x coordinate
     * @param {object} destCoor - The destination coordinates
     * @param {string} side - The side of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isSideBehindRiver = function(movableXCoor, destCoor, side) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestXCoor = 5;
        var unitTestCoor1 = { x: 6, y: 5 }, unitTestCoor2 = { x: 6, y: 6 };
        var unitTestSide1 = 'Red', unitTestSide2 = 'Black';
        var unitTestIsSideBehindRiver1 = unitTest._isSideBehindRiver(unitTestXCoor, unitTestCoor1, unitTestSide1);
        var unitTestIsSideBehindRiver2 = unitTest._isSideBehindRiver(unitTestXCoor, unitTestCoor2, unitTestSide1);
        var unitTestIsSideBehindRiver3 = unitTest._isSideBehindRiver(unitTestXCoor, unitTestCoor1, unitTestSide2);
        var unitTestIsSideBehindRiver4 = unitTest._isSideBehindRiver(unitTestXCoor, unitTestCoor2, unitTestSide2);
        console.log('movableAbilities.unitTest.hook._isSideBehindRiver');
        console.log('movableXCoor: ' + movableXCoor);
        console.log('JSON.stringify(destCoor): ' + JSON.stringify(destCoor));
        console.log('side: ' + side);
        console.log('isSideBehindRiver: ' + unitTest._isSideBehindRiver(movableXCoor, destCoor, side));
        if (unitTestIsSideBehindRiver1) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsSideBehindRiver1);
        }
        if (unitTestIsSideBehindRiver2) {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsSideBehindRiver2);
        } else {
            console.log('Passed the 2nd test!');
        }
        if (unitTestIsSideBehindRiver3) {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsSideBehindRiver3);
        } else {
            console.log('Passed the 3rd test!');
        }
        if (unitTestIsSideBehindRiver4) {
            console.log('Passed the 4th test!');
        } else {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsSideBehindRiver4);
        }
        //
    };

})(chess.movableAbilities.hook, chess.unitTestSwitches, 
        chess.movableAbilities.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file movableAbilities.js from path js/chineseChess/unitTests/');
//