// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading space.js!');
}
//

// This implementation js file should be placed in chineseChess

/** The implementation of creating new spaces
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 7
 * Number of functions: 3
 * Number of variables: 1
 * @author DoubleX
 * @param {object} hook - The implementation container as the hook for plugins
 * @since v1.0
 * @version v1.0
 */
(function(hook) {

    'use strict';

    hook._numSpace = 58; // Real space count replacing the dummy one

})(chess.space.hook);

// Shows that this js files' loaded from its path
console.log('Loaded js file space.js from path js/chineseChess/');
//