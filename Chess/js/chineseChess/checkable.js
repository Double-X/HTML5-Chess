// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading checkable.js!');
}
//

// This implementation js file should be placed in chineseChess

/** The implementation of the behaviors for checking checkables
 * Functional cohesion/Data coupling/Referentially transparent
 * On GMT 1000 27 Jan 2017
 * Number of constants: 1
 * Number of functions: 2
 * Number of variables: 3
 * @author DoubleX
 * @param {object} hook - The implementation container as the hook for plugins
 * @since v1.0
 * @version v1.0
 */
(function(hook) {

    'use strict';

    hook.GENERAL_SUFFIX = '_General'; // Real suffix replacing the dummy one
    // Real message tag replacing the dummy one
    hook.TAG = 'The below pieces can check the opposite general:';
    //

    // The list of pieces that might be able to check the opposite checkable
    hook._checkableList = {
        Red: [
            'Red_Chariot_1',
            'Red_Horse_1',
            'Red_Horse_2',
            'Red_Chariot_2',
            'Red_Cannon_1',
            'Red_Cannon_2',
            'Red_Soldier_1',
            'Red_Soldier_2',
            'Red_Soldier_3',
            'Red_Soldier_4',
            'Red_Soldier_5'
            ],
        Black: [
            'Black_Chariot_1',
            'Black_Horse_1',
            'Black_Horse_2',
            'Black_Chariot_2',
            'Black_Cannon_1',
            'Black_Cannon_2',
            'Black_Soldier_1',
            'Black_Soldier_2',
            'Black_Soldier_3',
            'Black_Soldier_4',
            'Black_Soldier_5'
        ]
    };
    //
    // The list of checkables that can move to the checked ignoring blockages
    hook._movableCheckList = { Red: [], Black: [] };
    //
    // The list of checkables that can move to the checked but are blocked
    hook._blockableCheckList = { Red: [], Black: [] };
    //

})(chess.checkable.hook);

// Shows that this js files' loaded from its path
console.log('Loaded js file checkable.js from path js/chineseChess/');
//