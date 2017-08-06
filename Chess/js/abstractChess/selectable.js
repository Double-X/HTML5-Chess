// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading selectable.js!');
}
//

// This implementation js file should be placed in abstractChess

/** The implementation of the behaviors for selecting selectables
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 1
 * Number of functions: 10
 * Number of variables: 1
 * @author DoubleX
 * @param {object/NonNull} hook - The implementation container as the hook for
 *                                 plugins
 * @param {object/NonNull} currentSideAPI - The currentSide.api as a dependency
 * @param {object/NonNull} domAPI - The dom.api as a dependency
 * @param {object/NonNull} highlightableAPI - The highlightable.api as a
 *                                             dependency
 * @param {object/NonNull} movableAPI - The movable.api as a dependency
 * @since v1.0
 * @version v1.0
 */
(function(hook, currentSideAPI, domAPI, highlightableAPI, movableAPI) {

    'use strict';

    hook.UNSELECTED_ID = ''; // Marks the id representing nothing's selected

    // Marks the id of the selected selectable
    hook._curSelectableId = hook.UNSELECTED_ID;
    //

    /**
     * Toggles the selected status of the specified selectable
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    hook.toggle = function(selectableId) {
        if (hook._isSelected(selectableId)) return hook._deselect(selectableId);
        hook._select(selectableId);
    };

    /**
     * Checks if the specified selectable is the currently selected one
     * Functional cohesion/Data coupling/No side effects
     * @author DoubleX
     * @param {string/NonNull} selectableId - The id of the selectable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isSelected = function(selectableId) {
        return selectableId === hook._curSelectableId;
    };

    /**
     * Selects the selectable with the specified id
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    hook._select = function(selectableId) {
        if (hook._isUnselected()) return hook._setCurSelectable(selectableId);
        hook._tryMoveCurSelectable(selectableId);
    };

    /**
     * Checks if there's no selected selectable
     * Functional cohesion/Message coupling/No side effects
     * @author DoubleX
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isUnselected = function() {
        return hook._curSelectableId === hook.UNSELECTED_ID;
    };

    /**
     * Tries to move the currently selected selectable to the specified one
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    hook._tryMoveCurSelectable = function(selectableId) {
        if (hook._isMove(selectableId)) return hook._moveTo(selectableId);
        hook._changeCurSelectable(selectableId);
    };

    /**
     * Checks if the current selectable is to be moved to the specified one
     * Functional cohesion/Data coupling/No side effects
     * @author DoubleX
     * @param {string/NonNull} selectableId - The id of the selectable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isMove = function(selectableId) {
        var isMovable = domAPI.isPiece(hook._curSelectableId);
        var isCurSide = currentSideAPI.isCurrentSide(hook._curSelectableId);
        var isDifferentSide = 
                domAPI.isDifferentSide(hook._curSelectableId, selectableId);
        return isMovable && isCurSide && isDifferentSide;
    };

    /**
     * Moves the currently selected selectable to the specified one
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    hook._moveTo = function(selectableId) {
        movableAPI.tryMove(hook._curSelectableId, selectableId);
        hook._deselect(hook._curSelectableId);
    };

    /**
     * Changes the currently selected selectable to the specified one
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    hook._changeCurSelectable = function(selectableId) {
        hook._deselect(hook._curSelectableId);
        hook._setCurSelectable(selectableId);
    };

    /**
     * Marks the specified selectable as the currently selected one
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    hook._setCurSelectable = function(selectableId) {
        hook._curSelectableId = selectableId;
        highlightableAPI.highlight(selectableId);
    };

    /**
     * Marks the specified selectable as an unselected one
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    hook._deselect = function(selectableId) {
        hook._curSelectableId = hook.UNSELECTED_ID;
        highlightableAPI.unhighlight(selectableId);
    };

})(chess.selectable.hook, chess.currentSide.api, chess.dom.api, 
        chess.highlightable.api, chess.movable.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file selectable.js from path js/abstractChess/');
//