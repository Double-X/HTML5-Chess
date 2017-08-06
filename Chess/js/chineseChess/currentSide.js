// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading currentSide.js!');
}
//

// This implementation js file should be placed in chineseChess

/** The implementation of the behaviors for accessing the current side
 * Functional cohesion/Data coupling/No function
 * On GMT 1000 27 Jan 2017
 * Number of constants: 1
 * Number of functions: 0
 * Number of variables: 0
 * @author DoubleX
 * @param {object} hook - The implementation container as the hook for plugins
 * @since v1.0
 * @version v1.0
 */
(function(hook) {

    'use strict';

    hook.SIDES = ['Red', 'Black']; // Real side list replace the dummy one

})(chess.currentSide.hook);

// Shows that this js files' loaded from its path
console.log('Loaded js file currentSide.js from path js/chineseChess/');
//