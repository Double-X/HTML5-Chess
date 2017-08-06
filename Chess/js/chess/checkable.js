// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading checkable.js!');
}
//

// This implementation js file should be placed in chess

/** The implementation of the behaviors for checking checkables
 * Functional cohesion/Data coupling/Referentially transparent
 * On GMT 1000 27 Jan 2017
 * Number of constants: 2
 * Number of functions: 1
 * Number of variables: 3
 * @author DoubleX
 * @param {object} hook - The implementation container as the hook for plugins
 * @param {object} movableRulesAPI - The movableRules.api as a dependency
 * @since v1.0
 * @version v1.0
 */
(function(hook, movableRulesAPI) {

    'use strict';

    hook.GENERAL_SUFFIX = '_King'; // Real suffix replacing the dummy one
    // Real message tag replacing the dummy one
    hook.TAG = 'The below pieces can check the opposite general:';
    //

    // The list of pieces that might be able to check the opposite checkable
    hook._checkableList = {
        White: [
            'White_Rook_1',
            'White_Horse_1',
            'White_Bishop_1',
            'White_Queen_1',
            'White_Bishop_2',
            'White_Horse_2',
            'White_Rook_2',
            'White_Pawn_1',
            'White_Pawn_2',
            'White_Pawn_3',
            'White_Pawn_4',
            'White_Pawn_5',
            'White_Pawn_6',
            'White_Pawn_7',
            'White_Pawn_8'
            ],
        Black: [
            'Black_Rook_1',
            'Black_Horse_1',
            'Black_Bishop_1',
            'Black_Queen_1',
            'Black_Bishop_2',
            'Black_Horse_2',
            'Black_Rook_2',
            'Black_Pawn_1',
            'Black_Pawn_2',
            'Black_Pawn_3',
            'Black_Pawn_4',
            'Black_Pawn_5',
            'Black_Pawn_6',
            'Black_Pawn_7',
            'Black_Pawn_8'
        ]
    };
    //
    // The list of checkables that can move to the checked ignoring blockages
    hook._movableCheckList = { White: [], Black: [] };
    //
    // The list of checkables that can move to the checked but are blocked
    hook._blockableCheckList = { White: [], Black: [] };
    //

    /**
     * Checks if the specified destination are checked by the specified side
     * Functional cohesion/Data coupling/Idempotent
     * Script Call
     * @author DoubleX
     * @param {string} destinationId - The id of the destination to be checked
     * @param {string} side - The side to be checked
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook.isReachable = function(destinationId, side) {
        var generalId = [hook._generalId(side)];
        function isReachable(checkableId) {
            return !movableRulesAPI.isAgainstRules(checkableId, destinationId);
        }
        return hook._checkableList[side].concat(generalId).every(isReachable);
    };

})(chess.checkable.hook, chess.movableRules.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file checkable.js from path js/chess/');
//