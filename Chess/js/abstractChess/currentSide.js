// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading currentSide.js!');
}
//

// This implementation js file should be placed in abstractChess

/** The implementation of the behaviors for accessing the current side
 * Functional cohesion/Data coupling/Self-Symmetrical
 * On GMT 1000 27 Jan 2017
 * Number of constants: 2
 * Number of functions: 8
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

    // Marks the id of the dom showing the current side
    hook.SIDE_ID = 'currentSide';
    //
    hook.SIDES = ['Side1', 'Side2']; // Dummy list to be replaced by real ones

    hook._curSideIndex = 0; // Marks the index for accessing the current side

    /**
     * Checks if the specified dom's the current side
     * Functional cohesion/Data coupling/No side effects
     * @author DoubleX
     * @param {string/NonNull} domId - The id of the dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook.isCurrentSide = function(domId) {
        return domAPI.side(domId) === hook._currentSide();
    };

    /**
     * Returns the side opposing the specified side
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string} side - The specified side
     * @return {string} The opposing side
     * @since v1.0
     * @version v1.0
     */
    hook.otherSide = function(side) {
        return hook.SIDES[hook._switchedSideIndex(hook.SIDES.indexOf(side))];
    };

    /**
     * Returns the side opposing the current side
     * Functional cohesion/Message coupling/No side effects
     * @author DoubleX
     * @return {string/NonNull} The opposite side
     * @since v1.0
     * @version v1.0
     */
    hook.oppositeSide = function() {
        return hook.SIDES[hook._switchedCurSideIndex()];
    };

    /**
     * Returns the formatted version of the specified coordinates
     * Functional cohesion/Message coupling/Self-Symmetrical
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    hook.switchSide = function() {
        hook._curSideIndex = hook._switchedCurSideIndex();
        hook._setCurSideDomContents(hook._currentSide());
    };

    /**
     * Returns the current side
     * Functional cohesion/Message coupling/No side effects
     * @author DoubleX
     * @return {string/NonNull} The current side
     * @since v1.0
     * @version v1.0
     */
    hook._currentSide = function() { return hook.SIDES[hook._curSideIndex]; };

    /**
     * Returns the toggled index for getting the current side
     * Functional cohesion/Message coupling/No side effects
     * @author DoubleX
     * @return {string/NonNull} The toggled current side index
     * @since v1.0
     * @version v1.0
     */
    hook._switchedCurSideIndex = function() {
        return hook._switchedSideIndex(hook._curSideIndex);
    };

    /**
     * Returns the toggled index for getting the specified side
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {number} sideIndex - The index of the specified side
     * @return {string} The toggled side index
     * @since v1.0
     * @version v1.0
     */
    hook._switchedSideIndex = function(sideIndex) {
        // So 1 will become 0 and vice versa
        return hook.SIDES.length - 1 - sideIndex;
        //
    };

    /**
     * Sets the dom showing the current side to show the specified one
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The current side
     * @since v1.0
     * @version v1.0
     */
    hook._setCurSideDomContents = function(side) {
        domAPI.dom(hook.SIDE_ID).textContent = side;
    };

})(chess.currentSide.hook, chess.dom.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file currentSide.js from path js/abstractChess/');
//