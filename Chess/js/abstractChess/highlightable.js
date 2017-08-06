// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading highlightable.js!');
}
//

// This implementation js file should be placed in abstractChess

/** The implementation of the behaviors for highlighting highlightables
 * Functional cohesion/Data coupling/Idempotent
 * On GMT 1000 27 Jan 2017
 * Number of constants: 3
 * Number of functions: 3
 * Number of variables: 0
 * @author DoubleX
 * @param {object/NonNull} hook - The implementation container as the hook for
 *                                 plugins
 * @param {object/NonNull} domAPI - The dom.api as a dependency
 * @since v1.0
 * @version v1.0
 */
(function(hook, domAPI) {

    'use strict';

    // Marks the highlightable highlight and unhighlight border colors
    hook.HIGHLIGHT_COLOR = '#00FF00', hook.UNHIGHLIGHT_COLOR = '#7F7F00';
    //
    // Marks the elements used as the highlighting effects
    hook.HIGHLIGHT_ELEMENT = 'border-color';
    //

    /**
     * Highlights the specified highlightable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} highlightableId - The id of the highlightable
     *                                            dom
     * @since v1.0
     * @version v1.0
     */
    hook.highlight = function(highlightableId) {
        hook._changeHighlightColor(highlightableId, hook.HIGHLIGHT_COLOR);
    };

    /**
     * Unhighlights the specified highlightable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} highlightableId - The id of the highlightable
     *                                            dom
     * @since v1.0
     * @version v1.0
     */
    hook.unhighlight = function(highlightableId) {
        hook._changeHighlightColor(highlightableId, hook.UNHIGHLIGHT_COLOR);
    };

    /**
     * Changes the color of the element used as the highlighting effects
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} highlightableId - The id of the highlightable
     *                                            dom
     * @param {string} color - The new highlight element color
     * @since v1.0
     * @version v1.0
     */
    hook._changeHighlightColor = function(highlightableId, color) {
        domAPI.dom(highlightableId).style[hook.HIGHLIGHT_ELEMENT] = color;
    };

})(chess.highlightable.hook, chess.dom.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file highlightable.js from path js/abstractChess/');
//