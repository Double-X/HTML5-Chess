// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading selectable.js!');
}
//

// This unit test js file should be placed in abstractChess/unitTests

/** The selectable implementation unit test suite
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
    unitTest._isActive = function() { return unitTestSwitches.selectable; };

    /**
     * Toggles the selected status of the specified selectable
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.toggle = hook.toggle;
    hook.toggle = function(selectableId) {
        if (unitTest._isActive()) unitTest.hook.toggle(selectableId);
        unitTest.toggle(selectableId);
    };

    /**
     * Checks if the specified selectable is the currently selected one
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isSelected = hook._isSelected;
    hook._isSelected = function(selectableId) {
        if (unitTest._isActive()) unitTest.hook._isSelected(selectableId);
        return unitTest._isSelected(selectableId);
    };

    /**
     * Selects the selectable with the specified id
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._select = hook._select;
    hook._select = function(selectableId) {
        if (unitTest._isActive()) unitTest.hook._select(selectableId);
        unitTest._select(selectableId);
    };

    /**
     * Checks if there's no selected selectable
     * Functional cohesion/Message coupling/Referentially transparent
     * @author DoubleX
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isUnselected = hook._isUnselected;
    hook._isUnselected = function() {
        if (unitTest._isActive()) unitTest.hook._isUnselected();
        return unitTest._isUnselected();
    };

    /**
     * Tries to move the currently selected selectable to the specified one
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._tryMoveCurSelectable = hook._tryMoveCurSelectable;
    hook._tryMoveCurSelectable = function(selectableId) {
        if (unitTest._isActive()) {
            unitTest.hook._tryMoveCurSelectable(selectableId);
        }
        unitTest._tryMoveCurSelectable(selectableId);
    };

    /**
     * Checks if the current selectable is to be moved to the specified one
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isMove = hook._isMove;
    hook._isMove = function(selectableId) {
        if (unitTest._isActive()) unitTest.hook._isMove(selectableId);
        return unitTest._isMove(selectableId);
    };

    /**
     * Moves the currently selected selectable to the specified one
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._moveTo = hook._moveTo;
    hook._moveTo = function(selectableId) {
        if (unitTest._isActive()) unitTest.hook._moveTo(selectableId);
        unitTest._moveTo(selectableId);
    };

    /**
     * Changes the currently selected selectable to the specified one
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._changeCurSelectable = hook._changeCurSelectable;
    hook._changeCurSelectable = function(selectableId) {
        if (unitTest._isActive()) {
            unitTest.hook._changeCurSelectable(selectableId);
        }
        unitTest._changeCurSelectable(selectableId);
    };

    /**
     * Marks the specified selectable as the currently selected one
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._setCurSelectable = hook._setCurSelectable;
    hook._setCurSelectable = function(selectableId) {
        if (unitTest._isActive()) unitTest.hook._setCurSelectable(selectableId);
        unitTest._setCurSelectable(selectableId);
    };

    /**
     * Marks the specified selectable as an unselected one
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._deselect = hook._deselect;
    hook._deselect = function(selectableId) {
        if (unitTest._isActive()) unitTest.hook._deselect(selectableId);
        unitTest._deselect(selectableId);
    };

    /**
     * Tests the toggle function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.toggle = function(selectableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('selectable.unitTest.hook.toggle selectableId: ' + selectableId);
        //
    };

    /**
     * Tests the _isSelected function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isSelected = function(selectableId) {
        // The function's too trivial to be unit tested
        console.log('selectable.unitTest.hook._isSelected');
        console.log('selectableId: ' + selectableId);
        console.log('isSelected: ' + unitTest._isSelected(selectableId));
        //
    };

    /**
     * Tests the _select function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._select = function(selectableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('selectable.unitTest.hook._select selectableId: ' + selectableId);
        //
    };

    /**
     * Tests the _isUnselected function
     * Functional cohesion/Message coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isUnselected = function() {
        // The function's too trivial to be unit tested
        console.log('selectable.unitTest.hook._isUnselected isUnselected: ' + unitTest._isUnselected());
        //
    };

    /**
     * Tests the _tryMoveCurSelectable function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._tryMoveCurSelectable = function(selectableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('selectable.unitTest.hook._tryMoveCurSelectable selectableId: ' + selectableId);
        //
    };

    /**
     * Tests the _isMove function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isMove = function(selectableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('movable.unitTest.hook._isMove');
        console.log('selectableId: ' + selectableId);
        console.log('isMove: ' + unitTest._isMove(selectableId));
        //
    };

    /**
     * Tests the _moveTo function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._moveTo = function(selectableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('selectable.unitTest.hook._moveTo selectableId: ' + selectableId);
        //
    };

    /**
     * Tests the _changeCurSelectable function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._changeCurSelectable = function(selectableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('selectable.unitTest.hook._changeCurSelectable selectableId: ' + selectableId);
        //
    };

    /**
     * Tests the _setCurSelectable function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._setCurSelectable = function(selectableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('selectable.unitTest.hook._setCurSelectable selectableId: ' + selectableId);
        //
    };

    /**
     * Tests the _deselect function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._deselect = function(selectableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('selectable.unitTest.hook._deselect selectableId: ' + selectableId);
        //
    };

})(chess.selectable.hook, chess.unitTestSwitches, chess.selectable.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file selectable.js from path js/abstractChess/unitTests/');
//