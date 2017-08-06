// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading movable.js!');
}
//

// This unit test js file should be placed in abstractChess/unitTests

/** The movable implementation unit test suite
 * Functional cohesion/Stamp coupling
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

    // The mocks replacing the corresponding real api dependencies
    var mocks = {
        checkableAPI: {
            removeFromCheckLists: function(checkableId) {
                mocks.checkableAPI.isRemoveFromCheckListsCalled = true;
            },
            tryCheckOpposite: function(checkableId) {
                mocks.checkableAPI.isTryCheckOppositeCalled = true;
            },
            updateCheckMateStatus: function(checkableId) {
                mocks.checkableAPI.isUpdateCheckMateStatusCalled = true;
            },
            updateMovableBlockableCheckLists: function(checkableId) {
                mocks.checkableAPI.isUpdateMovableBlockableCheckListsCalled = true;
            },
            isRemoveFromCheckListsCalled: false,
            isTryCheckOppositeCalled: false,
            isUpdateCheckMateStatusCalled: false,
            isUpdateMovableBlockableCheckListsCalled: false
        },
        spaceAPI: {
            turnPieceToNewSpace: function(pieceId) {
                mocks.spaceAPI.isTurnPieceToNewSpaceCalled = true;
            },
            isTurnPieceToNewSpaceCalled: false
        },
        currentSideAPI: {
            switchSide: function() {
                mocks.currentSideAPI.isSwitchSideCalled = true;
            },
            isSwitchSideCalled: false
        }
    };
    //

    /**
     * Checks if the unit tests should be run
     * Functional cohesion/Message coupling/Referentially transparent
     * @author DoubleX
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isActive = function() { return unitTestSwitches.movable; };

    /**
     * Tries to move the specified movable to the specified destination
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.tryMove = hook.tryMove;
    hook.tryMove = function(movableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook.tryMove(movableId, destinationId);
        }
        unitTest.tryMove(movableId, destinationId);
    };

    /**
     * Moves the specified movable dom to the specified destination dom
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._move = hook._move;
    hook._move = function(movableId, destinationId) {
        if (unitTest._isActive()) unitTest.hook._move(movableId, destinationId);
        unitTest._move(movableId, destinationId);
    };

    /**
     * Swaps the specified movable dom with the specified destination dom
     * Functional cohesion/Data coupling/Self-symmetrical
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._swap = hook._swap;
    hook._swap = function(movableId, destinationId) {
        // Ensures hook._moveCell has the expected side effect
        var oldCurLocation = chess.coordinates.api.coordinates(movableId);
        var oldDestination = chess.coordinates.api.coordinates(destinationId);
        //
        unitTest._swap(movableId, destinationId);
        // Ensures hook._swap has the expected side effect
        if (unitTest._isActive()) {
            var newCurLocation = chess.coordinates.api.coordinates(movableId);
            var newDestination = chess.coordinates.api.coordinates(destinationId);
            console.log('movable.unitTest._swap');
            console.log('movableId: ' + movableId);
            console.log('destinationId: ' + destinationId);
            console.log('JSON.stringify(oldCurLocation): ' + JSON.stringify(oldCurLocation));
            console.log('JSON.stringify(oldDestination): ' + JSON.stringify(oldDestination));
            if (newCurLocation.x === oldDestination.x && newCurLocation.y === oldDestination.y) {
                console.log('Passed the 1st test!');
            } else {
                console.log('Failed the 1st test! Actual value: ' + JSON.stringify(newCurLocation));
            }
            if (newDestination.x === oldCurLocation.x && newDestination.y === oldCurLocation.y) {
                console.log('Passed the 2nd test!');
            } else {
                console.log('Failed the 2nd test! Actual value: ' + JSON.stringify(newDestination));
            }
        }
        //
    };

    /**
     * Moves the specified movable to the specified destination
     * Functional cohesion/Stamp coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {object} curLocation - The current movable coordinates
     * @param {object} destination - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest._moveCell = hook._moveCell;
    hook._moveCell = function(movableId, curLocation, destination) {
        unitTest._moveCell(movableId, curLocation, destination);
        // Ensures hook._moveCell has the expected side effect
        if (unitTest._isActive()) {
            var unitTestLocation = chess.coordinates.api.coordinates(movableId);
            console.log('movable.unitTest._move');
            console.log('movableId: ' + movableId);
            console.log('curLocation.x: ' + curLocation.x);
            console.log('curLocation.y: ' + curLocation.y);
            console.log('destination.x: ' + destination.x);
            console.log('destination.y: ' + destination.y);
            if (unitTestLocation.x === destination.x && unitTestLocation.y === destination.y) {
                // It just means this function behaves at least partially correctly
                console.log('At least the movable has the correct coordinates!');
                //
            } else {
                console.log('Failed!');
                console.log('Actual unitTestLocation.x: ' + unitTestLocation.x);
                console.log('Actual unitTestLocation.y: ' + unitTestLocation.y);
            }
        }
        //
    };

    /**
     * Generates the swap buffer cell contents using the specified location
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {object} curLocation - The current movable coordinates
     * @return {string} The swap buffer cell inner html
     * @since v1.0
     * @version v1.0
     */
    unitTest._swapBufferCellInnerHtml = hook._swapBufferCellInnerHtml;
    hook._swapBufferCellInnerHtml = function(curLocation) {
        if (unitTest._isActive()) {
            unitTest.hook._swapBufferCellInnerHtml(curLocation);
        }
        return unitTest._swapBufferCellInnerHtml(curLocation);
    };

    /**
     * Captures the piece with the specified id
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} pieceId - The id of the piece dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._capture = hook._capture;
    hook._capture = function(pieceId) {
        if (unitTest._isActive()) unitTest.hook._capture(pieceId);
        unitTest._capture(pieceId);
    };

    /**
     * Be the hook to be triggered right after the specified movable's moved
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._onPostMove = hook._onPostMove;
    hook._onPostMove = function(movableId) {
        if (unitTest._isActive()) unitTest.hook._onPostMove(movableId);
        unitTest._onPostMove(movableId);
    };

    /**
     * Tests the tryMove function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.tryMove = function(movableId, destinationId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movable.unitTest.hook.tryMove');
        console.log('movableId: ' + movableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the _move function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._move = function(movableId, destinationId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movable.unitTest.hook._move');
        console.log('movableId: ' + movableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the _swapBufferCellInnerHtml function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} curLocation - The current movable coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._swapBufferCellInnerHtml = function(curLocation) {
        // The function's too trivial to be unit tested
        console.log('movable.unitTest.hook._swapBufferCellInnerHtml');
        console.log('curLocation: ' + curLocation);
        console.log('swapBufferCellInnerHtml: ' + unitTest._swapBufferCellInnerHtml(curLocation));
        //
    };

    /**
     * Tests the _capture function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceId - The id of the piece dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._capture = function(pieceId) {
        // It's actually a functional test using mocked dependencies via seams
        var realTurnPieceToNewSpace = chess.space.api.turnPieceToNewSpace;
        var realRemoveFromCheckLists = chess.checkable.api.removeFromCheckLists;
        var realUpdateCheckMateStatus = chess.checkable.api.updateCheckMateStatus;
        chess.space.api.turnPieceToNewSpace = mocks.spaceAPI.turnPieceToNewSpace;
        chess.checkable.api.removeFromCheckLists = mocks.checkableAPI.removeFromCheckLists;
        chess.checkable.api.updateCheckMateStatus = mocks.checkableAPI.updateCheckMateStatus;
        unitTest._capture(pieceId);
        console.log('movable.unitTest.hook._capture pieceId: ' + pieceId);
        if (mocks.spaceAPI.isTurnPieceToNewSpaceCalled) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + mocks.spaceAPI.isTurnPieceToNewSpaceCalled);
        }
        mocks.spaceAPI.isTurnPieceToNewSpaceCalled = false;
        if (mocks.checkableAPI.isRemoveFromCheckListsCalled) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + mocks.checkableAPI.isRemoveFromCheckListsCalled);
        }
        mocks.checkableAPI.isRemoveFromCheckListsCalled = false;
        if (mocks.checkableAPI.isUpdateCheckMateStatusCalled) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + mocks.checkableAPI.isUpdateCheckMateStatusCalled);
        }
        mocks.checkableAPI.isUpdateCheckMateStatusCalled = false;
        chess.space.api.turnPieceToNewSpace = realTurnPieceToNewSpace;
        chess.checkable.api.removeFromCheckLists = realRemoveFromCheckLists;
        chess.checkable.api.updateCheckMateStatus = realUpdateCheckMateStatus;
        //
    };

    /**
     * Tests the _onPostMove function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._onPostMove = function(movableId) {
        // It's actually a functional test using mocked dependencies via seams
        var realUpdateMovableBlockableCheckLists = chess.checkable.api.updateMovableBlockableCheckLists;
        var realTryCheckOpposite = chess.checkable.api.tryCheckOpposite;
        var realSwitchSide = chess.currentSide.api.switchSide;
        chess.checkable.api.updateMovableBlockableCheckLists = mocks.checkableAPI.updateMovableBlockableCheckLists;
        chess.checkable.api.tryCheckOpposite = mocks.checkableAPI.tryCheckOpposite;
        chess.currentSide.api.switchSide = mocks.currentSideAPI.switchSide;
        unitTest._onPostMove(movableId);
        console.log('movable.unitTest.hook._onPostMove movableId: ' + movableId);
        if (mocks.checkableAPI.isUpdateMovableBlockableCheckListsCalled) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + mocks.checkableAPI.isUpdateMovableBlockableCheckListsCalled);
        }
        mocks.checkableAPI.isUpdateMovableBlockableCheckListsCalled = false;
        if (mocks.checkableAPI.isTryCheckOppositeCalled) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + mocks.checkableAPI.isTryCheckOppositeCalled);
        }
        mocks.checkableAPI.isTryCheckOppositeCalled = false;
        if (mocks.currentSideAPI.isSwitchSideCalled) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + mocks.currentSideAPI.isSwitchSideCalled);
        }
        mocks.checkableAPI.isSwitchSideCalled = false;
        chess.checkable.api.updateMovableBlockableCheckLists = realUpdateMovableBlockableCheckLists;
        chess.checkable.api.tryCheckOpposite = realTryCheckOpposite;
        chess.currentSide.api.switchSide = realSwitchSide;
        //
    };

})(chess.movable.hook, chess.unitTestSwitches, chess.movable.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file movable.js from path js/abstractChess/unitTests/');
//