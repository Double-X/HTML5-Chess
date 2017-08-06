// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading space.js!');
}
//

// This unit test js file should be placed in abstractChess/unitTests

/** The space implementation unit test suite
 * Functional cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 0
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
    unitTest._isActive = function() { return unitTestSwitches.space; };

    /**
     * Turns the specified piece into a new space
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} pieceId - The id of the piece dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.turnPieceToNewSpace = hook.turnPieceToNewSpace;
    hook.turnPieceToNewSpace = function(pieceId) {
        if (unitTest._isActive()) unitTest.hook.turnPieceToNewSpace(pieceId);
        unitTest.turnPieceToNewSpace(pieceId);
    };

    /**
     * Updates the space number counter
     * Functional cohesion/Message coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest._updateNumSpace = hook._updateNumSpace;
    hook._updateNumSpace = function() {
        if (unitTest._isActive()) unitTest.hook._updateNumSpace();
        unitTest._updateNumSpace();
    };

    /**
     * Turns the specified piece into a new space
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {dom} piece - The piece to become a space
     * @since v1.0
     * @version v1.0
     */
    unitTest._turnPieceToNewSpace = hook._turnPieceToNewSpace;
    hook._turnPieceToNewSpace = function(piece) {
        if (unitTest._isActive()) unitTest.hook._turnPieceToNewSpace(piece);
        unitTest._turnPieceToNewSpace(piece);
    };

    /**
     * Tests the turnPieceToNewSpace function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceId - The id of the piece dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.turnPieceToNewSpace = function(pieceId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('space.unitTest.hook.turnPieceToNewSpace pieceId: ' + pieceId);
        //
    };

    /**
     * Tests the _updateNumSpace function
     * Functional cohesion/Message coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._updateNumSpace = function() {
        // The function's too trivial to be unit tested
        console.log('space.unitTest.hook._updateNumSpace');
        //
    };

    /**
     * Tests the _turnPieceToNewSpace function
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {dom} piece - The piece to become a space
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._turnPieceToNewSpace = function(piece) {
        // The function's too trivial to be unit tested
        console.log('space.unitTest.hook._turnPieceToNewSpace piece: ' + piece);
        //
    };

})(chess.space.hook, chess.unitTestSwitches, chess.space.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file space.js from path js/space/unitTests/');
//