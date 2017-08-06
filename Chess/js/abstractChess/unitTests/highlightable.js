// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading highlightable.js!');
}
//

// This unit test js file should be placed in abstractChess/unitTests

/** The highlightable implementation unit test suite
 * Functional cohesion/Stamp coupling
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
    unitTest._isActive = function() { return unitTestSwitches.highlightable; };

    /**
     * Highlights the specified highlightable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} highlightableId - The id of the highlightable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.highlight = hook.highlight;
    hook.highlight = function(highlightableId) {
        if (unitTest._isActive()) unitTest.hook.highlight(highlightableId);
        unitTest.highlight(highlightableId);
    };

    /**
     * Unhighlights the specified highlightable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} highlightableId - The id of the highlightable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.unhighlight = hook.unhighlight;
    hook.unhighlight = function(highlightableId) {
        if (unitTest._isActive()) unitTest.hook.unhighlight(highlightableId);
        unitTest.unhighlight(highlightableId);
    };

    /**
     * Changes the color of the element used as the highlighting effects
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} highlightableId - The id of the highlightable dom
     * @param {string} color - The new highlight element color
     * @since v1.0
     * @version v1.0
     */
    unitTest._changeHighlightColor = hook._changeHighlightColor;
    hook._changeHighlightColor = function(highlightableId, color) {
        if (unitTest._isActive()) {
            unitTest.hook._changeHighlightColor(highlightableId, color);
        }
        unitTest._changeHighlightColor(highlightableId, color);
    };

    /**
     * Tests the highlight function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} highlightableId - The id of the highlightable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.highlight = function(highlightableId) {
        // The function's too trivial to be unit tested
        console.log('highlightable.unitTest.hook.highlight highlightableId: ' + highlightableId);
        //
    };

    /**
     * Tests the unhighlight function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} highlightableId - The id of the highlightable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.unhighlight = function(highlightableId) {
        // The function's too trivial to be unit tested
        console.log('highlightable.unitTest.hook.unhighlight highlightableId: ' + highlightableId);
        //
    };

    /**
     * Tests the _changeHighlightColor function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} highlightableId - The id of the highlightable dom
     * @param {string} color - The new highlight element color
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._changeHighlightColor = function(highlightableId, color) {
        // The function's too trivial to be unit tested
        console.log('highlightable.unitTest.hook._changeHighlightColor');
        console.log('highlightableId: ' + highlightableId);
        console.log('color: ' + color);
        //
    };

})(chess.highlightable.hook, chess.unitTestSwitches, 
        chess.highlightable.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file highlightable.js from path js/abstractChess/unitTests/');
//