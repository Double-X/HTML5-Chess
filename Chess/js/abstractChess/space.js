// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading space.js!');
}
//

// This implementation js file should be placed in abstractChess

/** The implementation of creating new spaces
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 6
 * Number of functions: 3
 * Number of variables: 1
 * @author DoubleX
 * @param {object/NonNull} hook - The implementation container as the hook for
 *                                 plugins
 * @param {object/NonNull} domAPI - The dom.api as a dependency
 * @since v1.0
 * @version v1.0
 */
(function(hook, domAPI) {

    'use strict';

    hook.SPACE_BACKGROUND_COLOR = '#FFFFFF'; // Marks the space background color
    hook.SPACE_CLASS = 'neutral'; // Marks the space class
    hook.SPACE_ID_PRE = 'Neutral_Space_'; // Marks the space id prefix
    // Marks the beginning and ending parts of the space onclick function call
    hook.SPACE_ONCLICK_PRE = "chess.selectable.api.toggle('";
    hook.SPACE_ONCLICK_POST = "');";
    //
    hook.SPACE_TEXT_ID = 'spaceText'; // Marks the id of the space text

    hook._numSpace = Number.NaN; // Dummy to be replaced by real ones

    /**
     * Turns the specified piece into a new space
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} pieceId - The id of the piece dom
     * @since v1.0
     * @version v1.0
     */
    hook.turnPieceToNewSpace = function(pieceId) {
        hook._updateNumSpace();
        hook._turnPieceToNewSpace(domAPI.dom(pieceId));
    };

    /**
     * Updates the space number counter
     * Functional cohesion/Message coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    hook._updateNumSpace = function() { hook._numSpace += 1; };

    /**
     * Turns the specified piece into a new space
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {dom/NonNull} piece - The piece to become a space
     * @since v1.0
     * @version v1.0
     */
    hook._turnPieceToNewSpace = function(piece) {
        piece.className = hook.SPACE_CLASS;
        piece.style.backgroundColor = hook.SPACE_BACKGROUND_COLOR;
        var id = piece.id = hook.SPACE_ID_PRE + hook._numSpace.toString();
        var onclick = hook.SPACE_ONCLICK_PRE + id + hook.SPACE_ONCLICK_POST;
        // Experineces tell that piece.onClick = new Function doesn't change it
        piece.setAttribute('onclick', onclick);
        //
        piece.textContent = domAPI.dom(hook.SPACE_TEXT_ID).textContent;
    };

})(chess.space.hook, chess.dom.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file space.js from path js/abstractChess/');
//