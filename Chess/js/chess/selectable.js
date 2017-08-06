// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading selectable.js!');
}
//

// This implementation js file should be placed in chess

/** The implementation of the behaviors for selecting selectables
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 0
 * Number of functions: 1
 * Number of variables: 0
 * @author DoubleX
 * @param {object} hook - The implementation container as the hook for plugins
 * @param {object} promotableAPI - The promotable.api as a dependency
 * @since v1.0
 * @version v1.0
 */
(function(hook, promotableAPI) {

    'use strict';

    /**
     * Moves the currently selected selectable to the specified one
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    var moveTo = hook._moveTo;
    hook._moveTo = function(selectableId) {
        var lastCurSelectableId = hook._curSelectableId;
        // There's no reason to use the abstract one when there's a concrete one
        moveTo(selectableId);
        //
        promotableAPI.promote(lastCurSelectableId);
    };

})(chess.selectable.hook, chess.promotable.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file selectable.js from path js/chess/');
//