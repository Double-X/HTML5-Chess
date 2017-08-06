// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading movable.js!');
}
//

// This implementation js file should be placed in chess

/** The implementation of the behaviors for moving movables
 * Functional cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 0
 * Number of functions: 1
 * Number of variables: 0
 * @author DoubleX
 * @param {object} hook - The implementation container as the hook for plugins
 * @param {object} specialMoveRecordsAPI - The depended specialMoveRecords.api
 * @since v1.0
 * @version v1.0
 */
(function(hook, specialMoveRecordsAPI) {

    'use strict';

    /**
     * Be the hook to be triggered right after the specified movable's moved
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    var onPostMove = hook._onPostMove;
    hook._onPostMove = function(movableId) {
        // There's no reason to use the abstract one when there's a concrete one
        onPostMove(movableId);
        //
        specialMoveRecordsAPI.updateRecords(movableId, hook._move);
    };

})(chess.movable.hook, chess.specialMoveRecords.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file movable.js from path js/chess/');
//