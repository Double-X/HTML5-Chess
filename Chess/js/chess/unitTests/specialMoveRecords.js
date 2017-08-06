// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading specialMoveRecords.js!');
}
//

// This unit test js file should be placed in chess/unitTests

/** The specialMoveRecords implementation unit test suite
 * Sequential cohesion/Stamp coupling
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
    unitTest._isActive = function() {
        return unitTestSwitches.specialMoveRecords;
    };

    /**
     * Clears the move record of the specified movable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable to clear its record
     * @since v1.0
     * @version v1.0
     */
    unitTest.clearMoveRecord = hook.clearMoveRecord;
    hook.clearMoveRecord = function(movableId) {
        if (unitTest._isActive()) unitTest.hook.clearMoveRecord(movableId);
        unitTest.clearMoveRecord(movableId);
    };

    /**
     * Checks whether the specified movable can be used by En Passant
     * Functional cohesion/Data coupling/Referentially transparent
     * Script call
     * @author DoubleX
     * @param {string} movableId - The id of the movable to check its record
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest.hasEnPassantRight = hook.hasEnPassantRight;
    hook.hasEnPassantRight = function(movableId) {
        if (unitTest._isActive()) unitTest.hook.hasEnPassantRight(movableId);
        return unitTest.hasEnPassantRight(movableId);
    };

    /**
     * Checks whether the specified movable hasn't moved before
     * Functional cohesion/Data coupling/Referentially transparent
     * Script call
     * @author DoubleX
     * @param {string} movableId - The id of the movable to check its record
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest.hasNotMoved = hook.hasNotMoved;
    hook.hasNotMoved = function(movableId) {
        if (unitTest._isActive()) unitTest.hook.hasNotMoved(movableId);
        return unitTest.hasNotMoved(movableId);
    };

    /**
     * Marks the use of the Castling involving the specified castlable and coor
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} castlableId - The id of the castlable dom
     * @param {object} movableCoor - The original movable dom coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.markUseCastling = hook.markUseCastling;
    hook.markUseCastling = function(castlableId, movableCoor) {
        if (unitTest._isActive()) {
            unitTest.hook.markUseCastling(castlableId, movableCoor);
        }
        unitTest.markUseCastling(castlableId, movableCoor);
    };

    /**
     * Marks the use of the En Passant right for the specified movable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable using En Passant
     * @since v1.0
     * @version v1.0
     */
    unitTest.markUseEnPassantRight = hook.markUseEnPassantRight;
    hook.markUseEnPassantRight = function(movableId) {
        if (unitTest._isActive()) {
            unitTest.hook.markUseEnPassantRight(movableId);
        }
        unitTest.markUseEnPassantRight(movableId);
    };

    /**
     * Updates the special move records used by all special moves
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {function} move - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.updateRecords = hook.updateRecords;
    hook.updateRecords = function(movableId, move) {
        if (unitTest._isActive()) unitTest.hook.updateRecords(movableId, move);
        unitTest.updateRecords(movableId, move);
    };

    /**
     * Makes a special move for the specified movable using the specified move
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {function} move - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._makeSpecialMove = hook._makeSpecialMove;
    hook._makeSpecialMove = function(movableId, move) {
        if (unitTest._isActive()) {
            unitTest.hook._makeSpecialMove(movableId, move);
        }
        unitTest._makeSpecialMove(movableId, move);
    };

    /**
     * Checks whether the specified movable is to use En Passant
     * Functional cohesion/Data coupling/Referentially transparent
     * Script call
     * @author DoubleX
     * @param {string} movableId - The id of the movable to check its right use
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isUseEnPassantRight = hook._isUseEnPassantRight;
    hook._isUseEnPassantRight = function(movableId) {
        if (unitTest._isActive()) unitTest.hook._isUseEnPassantRight(movableId);
        return unitTest._isUseEnPassantRight(movableId);
    };

    /**
     * Uses En Passant for the specified movable via the specified move function
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._useEnPassantRight = hook._useEnPassantRight;
    hook._useEnPassantRight = function(movableId) {
        if (unitTest._isActive()) unitTest.hook._useEnPassantRight(movableId);
        unitTest._useEnPassantRight(movableId);
    };

    /**
     * Marks the consumption of the En Passant right
     * Functional cohesion/Message coupling/Idempotent
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest._clearUseEnPassantRight = hook._clearUseEnPassantRight;
    hook._clearUseEnPassantRight = function() {
        if (unitTest._isActive()) unitTest.hook._clearUseEnPassantRight();
        unitTest._clearUseEnPassantRight();
    };

    /**
     * Makes the specified En Passant capture for the specified movable
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._makeEnPassantCapture = hook._makeEnPassantCapture;
    hook._makeEnPassantCapture = function(movableId) {
        if (unitTest._isActive()) {
            unitTest.hook._makeEnPassantCapture(movableId);
        }
        unitTest._makeEnPassantCapture(movableId);
    };

    /**
     * Checks whether a Castling is to be used
     * Functional cohesion/Message coupling/Referentially transparent
     * Script call
     * @author DoubleX
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isUseCastling = hook._isUseCastling;
    hook._isUseCastling = function() {
        if (unitTest._isActive()) unitTest.hook._isUseCastling();
        return unitTest._isUseCastling();
    };

    /**
     * Uses Castling with the specified move function
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {function} move - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._useCastling = hook._useCastling;
    hook._useCastling = function(move) {
        if (unitTest._isActive()) unitTest.hook._useCastling(move);
        unitTest._useCastling(move);
    };

    /**
     * Marks the completion of the Castling
     * Functional cohesion/Message coupling/Idempotent
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest._clearUseCastling = hook._clearUseCastling;
    hook._clearUseCastling = function() {
        if (unitTest._isActive()) unitTest.hook._clearUseCastling();
        unitTest._clearUseCastling();
    };

    /**
     * Updates the special move records used by all special moves
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._updateRecords = hook._updateRecords;
    hook._updateRecords = function(movableId) {
        if (unitTest._isActive()) unitTest.hook._updateRecords(movableId);
        unitTest._updateRecords(movableId);
    };

    /**
     * Revokes the right to use any En Passant on any movable
     * Functional cohesion/Message coupling/Idempotent
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest._revokeEnPassantRights = hook._revokeEnPassantRights;
    hook._revokeEnPassantRights = function() {
        if (unitTest._isActive()) unitTest.hook._revokeEnPassantRights();
        unitTest._revokeEnPassantRights();
    };

    /**
     * Revokes the right to use any En Passant on the specified movable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable used by En Passant
     * @since v1.0
     * @version v1.0
     */
    unitTest._revokeEnPassantRight = hook._revokeEnPassantRight;
    hook._revokeEnPassantRight = function(movableId) {
        if (unitTest._isActive()) {
            unitTest.hook._revokeEnPassantRight(movableId);
        }
        unitTest._revokeEnPassantRight(movableId);
    };

    /**
     * Updates the move record of the specified movable
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable to update its record
     * @since v1.0
     * @version v1.0
     */
    unitTest._updateMoveRecord = hook._updateMoveRecord;
    hook._updateMoveRecord = function(movableId) {
        if (unitTest._isActive()) unitTest.hook._updateMoveRecord(movableId);
        unitTest._updateMoveRecord(movableId);
    };

    /**
     * Updates the right to use any En Passant on the specified movable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable used by En Passant
     * @since v1.0
     * @version v1.0
     */
    unitTest._updateEnPassantRight = hook._updateEnPassantRight;
    hook._updateEnPassantRight = function(movableId) {
        if (unitTest._isActive()) {
            unitTest.hook._updateEnPassantRight(movableId);
        }
        unitTest._updateEnPassantRight(movableId);
    };

    /**
     * Tests the clearMoveRecord function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable to clear its record
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.clearMoveRecord = function(movableId) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook.clearMoveRecord movableId: ' + movableId);
        //
    };

    /**
     * Tests the hasEnPassantRight function
     * Functional cohesion/Data coupling/No-op
     * Script call
     * @author DoubleX
     * @param {string} movableId - The id of the movable to check its record
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.hasEnPassantRight = function(movableId) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook.clearMoveRecord');
        console.log('movableId: ' + movableId);
        console.log('hasEnPassantRight: ' + unitTest.hasEnPassantRight(movableId));
        //
    };

    /**
     * Tests the hasNotMoved function
     * Functional cohesion/Data coupling/No-op
     * Script call
     * @author DoubleX
     * @param {string} movableId - The id of the movable to check its record
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.hasNotMoved = function(movableId) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook.hasNotMoved');
        console.log('movableId: ' + movableId);
        console.log('hasNotMoved: ' + unitTest.hasNotMoved(movableId));
        //
    };

    /**
     * Tests the markUseCastling function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} castlableId - The id of the castlable dom
     * @param {object} movableCoor - The original movable dom coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.markUseCastling = function(castlableId, movableCoor) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook.markUseCastling');
        console.log('castlableId: ' + castlableId);
        console.log('JSON.stringify(movableCoor): ' + JSON.stringify(movableCoor));
        //
    };

    /**
     * Tests the markUseEnPassantRight function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable using En Passant
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.markUseEnPassantRight = function(movableId) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook.markUseEnPassantRight movableId: ' + movableId);
        //
    };

    /**
     * Tests the updateRecords function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.updateRecords = function(movableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook.updateRecords movableId: ' + movableId);
        //
    };

    /**
     * Tests the _makeSpecialMove function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {function} move - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._makeSpecialMove = function(movableId, move) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook.updateRecords movableId: ' + movableId);
        //
    };

    /**
     * Tests the _isUseEnPassantRight function
     * Functional cohesion/Data coupling/No-op
     * Script call
     * @author DoubleX
     * @param {string} movableId - The id of the movable to check its right use
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isUseEnPassantRight = function(movableId) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._isUseEnPassantRight');
        console.log('movableId: ' + movableId);
        console.log('isUseEnPassantRight: ' + unitTest._isUseEnPassantRight(movableId));
        //
    };

    /**
     * Tests the _useEnPassantRight function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._useEnPassantRight = function(movableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._useEnPassantRight movableId: ' + movableId);
        //
    };

    /**
     * Tests the _clearUseEnPassantRight function
     * Functional cohesion/Message coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._clearUseEnPassantRight = function() {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._clearUseEnPassantRight');
        //
    };

    /**
     * Tests the _makeEnPassantCapture function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._makeEnPassantCapture = function(movableId) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._makeEnPassantCapture movableId: ' + movableId);
        //
    };

    /**
     * Tests the _isUseCastling function
     * Functional cohesion/Message coupling/No-op
     * Script call
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isUseCastling = function() {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._isUseCastling');
        //
    };

    /**
     * Tests the _useCastling function
     * Functional cohesion/Message coupling/No-op
     * @author DoubleX
     * @param {function} move - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._useCastling = function(move) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._useCastling');
        //
    };

    /**
     * Tests the _clearUseCastling function
     * Functional cohesion/Message coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._clearUseCastling = function() {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._clearUseCastling');
        //
    };

    /**
     * Tests the _updateRecords function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._updateRecords = function(movableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._updateRecords movableId: ' + movableId);
        //
    };

    /**
     * Tests the _revokeEnPassantRights function
     * Functional cohesion/Message coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._revokeEnPassantRights = function() {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._revokeEnPassantRights');
        //
    };

    /**
     * Tests the _revokeEnPassantRight function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable used by En Passant
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._revokeEnPassantRight = function(movableId) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._revokeEnPassantRight movableId: ' + movableId);
        //
    };

    /**
     * Tests the _updateMoveRecord function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable to update its record
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._updateMoveRecord = function(movableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movableAbilities.unitTest.hook._updateMoveRecord movableId: ' + movableId);
        //
    };

    /**
     * Tests the _updateEnPassantRight function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} movableId - The id of the movable used by En Passant
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._updateEnPassantRight = function(movableId) {
        // The function's too trivial to be unit tested
        console.log('movableAbilities.unitTest.hook._updateEnPassantRight movableId: ' + movableId);
        //
    };

})(chess.specialMoveRecords.hook, chess.unitTestSwitches, 
        chess.specialMoveRecords.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file specialMoveRecords.js from path js/chess/unitTests/');
//