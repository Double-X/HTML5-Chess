// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading checkable.js!');
}
//

// This implementation js file should be placed in abstractChess

/** The implementation of the behaviors for checking checkables
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 3
 * Number of functions: 23
 * Number of variables: 3
 * @author DoubleX
 * @param {object/NonNull} hook - The implementation container as the hook for
 *                                 plugins
 * @param {object/NonNull} domAPI - The dom.api as a dependency
 * @param {object/NonNull} blockableAPI - The blockable.api as a dependency
 * @param {object/NonNull} messageLogAPI - The messageLog.api as a dependency
 * @param {object/NonNull} currentSideAPI - The currentSide.api as dependency
 * @param {object/NonNull} movableAbilitiesAPI - The movableAbilities.api as
 *                                                dependency
 * @since v1.0
 * @version v1.0
 */
(function(hook, domAPI, blockableAPI, messageLogAPI, currentSideAPI, 
        movableAbilitiesAPI) {

    'use strict';

    hook.GENERAL_SUFFIX = ''; // Dummy general suffix to be replaced by real one
    hook.IS_CHECK_MATE = false; // Marks whether a checkmate's occurred
    hook.TAG = ''; // Dummy message tag to be replaced by real ones

    // The list of pieces that might be able to check the opposite checkable
    hook._checkableList = {};
    //
    // The list of checkables that can move to the checked ignoring blockages
    hook._movableCheckList = {};
    //
    // The list of checkables that can move to the checked but are blocked
    hook._blockableCheckList = {};
    //

    /**
     * Tries to check the opposite side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    hook.tryCheckOpposite = function(checkableId) {
        if (hook._canCheckOpposite()) hook._tryCheckOpposite(checkableId);
    };

    /**
     * Removes the specified checkable from the movable and blockable check list
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    hook.removeFromCheckLists = function(checkableId) {
        hook._removeFromCheckList('_checkableList', checkableId);
        hook._removeFromCheckList('_movableCheckList', checkableId);
        hook._removeFromCheckList('_blockableCheckList', checkableId);
    };

    /**
     * Updates the status indicating whether a check mate's occurred
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom being captured
     * @since v1.0
     * @version v1.0
     */
    hook.updateCheckMateStatus = function(checkableId) {
        hook.IS_CHECK_MATE = hook._isCheckMate(checkableId);
    };

    /**
     * Ensures the movable and blockable check lists are always up to date
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    hook.updateMovableBlockableCheckLists = function(checkableId) {
        if (!hook._canBeChecked(checkableId)) return;
        var oppositeSide = currentSideAPI.otherSide(domAPI.side(checkableId));
        hook._updateMovableBlockableCheckLists(oppositeSide, checkableId);
    };

    /**
     * Checks if the opposite side can be checked
     * Functional cohesion/Message coupling/No side effects
     * @author DoubleX
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._canCheckOpposite = function() { return !hook.IS_CHECK_MATE; };

    /**
     * Tries to check the opposite side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    hook._tryCheckOpposite = function(checkableId) {
        hook._updateMovableCheckList(checkableId);
        var currentSide = domAPI.side(checkableId);
        hook._updateMovableCheckableBlocked(currentSide);
        hook._checkOpposite(currentSide);
    };

    /**
     * Updates the movable check list accounting for the checkable movement
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    hook._updateMovableCheckList = function(checkableId) {
        var checkedId = hook._oppositeCheckableId(domAPI.side(checkableId));
        hook._updateMovableCheckListFunc(checkedId)(checkableId);
    };

    /**
     * Checks the specified side to see if its checked's checked by checkables
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} side - The side of the checkables
     * @since v1.0
     * @version v1.0
     */
    hook._checkOpposite = function(side) {
        // Flying general won't be checked as the opposing one will fly first
        hook._collectNonGeneralCheckableMessages(side);
        //
        hook._releaseCheckMessages();
    };

    /**
     * Collects messages for all non general pieces that can check the checked
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} side - The side of the checkables
     * @since v1.0
     * @version v1.0
     */
    hook._collectNonGeneralCheckableMessages = function(side) {
        var isNotBlocked = hook._isNotBlockedFunc(side);
        var checkableIds = hook._movableCheckList[side].filter(isNotBlocked);
        checkableIds.forEach(hook._pushCheckMessage);
    };

    /**
     * Returns a function checking whether the specified checkable's not blocked
     * Functional cohesion/Data coupling/No side effects
     * @author DoubleX
     * @param {string/NonNull} side - The side of the checkables
     * @return {function} The requested function
     * @since v1.0
     * @version v1.0
     */
    hook._isNotBlockedFunc = function(side) {
        // Optimizes the time performances by reducing variable accesses
        var blockableCheckList = hook._blockableCheckList[side];
        //
        return function(checkableId) {
            return blockableCheckList.indexOf(checkableId) < 0;
        };
    };

    /**
     * Pushes the check message with the specified checkable
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    hook._pushCheckMessage = function(checkableId) {
        messageLogAPI.pushMessage(hook.TAG, checkableId);
    };

    /**
     * Releases all messages showing all checkeds checked by checkables
     * Functional cohesion/Message coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    hook._releaseCheckMessages = function() {
        messageLogAPI.showMessage(hook.TAG);
        messageLogAPI.clearMessage(hook.TAG);
    };

    /**
     * Checks if a check mate has taken place
     * Functional cohesion/Data coupling/No side effects
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom being captured
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isCheckMate = function(checkableId) {
        // A checkable can only remove the checked from the opposite side
        return checkableId === hook._generalId(currentSideAPI.oppositeSide());
        //
    };

    /**
     * Checks if the specified checkable can be checked by opposing checkables
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string/NonNull} checkableId - The id of the checkable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._canBeChecked = function (checkableId) {
        return checkableId === hook._generalId(domAPI.side(checkableId));
    };

    /**
     * Ensures the movable and blockable check lists are always up to date
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} oppositeSide - The side opposing that of the
     *                                         checkables
     * @param {string/NonNull} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    hook._updateMovableBlockableCheckLists = function(oppositeSide, checkableId) {
        var updateMovableList = hook._updateMovableCheckListFunc(checkableId);
        hook._checkableList[oppositeSide].forEach(updateMovableList);
        hook._updateMovableCheckableBlocked(oppositeSide);
    };

    /**
     * Returns a function updating the movable check list with the specified cId
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string/NonNull} checkableId - The id of the checkable dom
     * @return {function} The requested function
     * @since v1.0
     * @version v1.0
     */
    hook._updateMovableCheckListFunc = function(checkableId) {
        // Optimizes the time performances by reducing variable accesses
        var isInvalid = movableAbilitiesAPI.isInvalid;
        var removeFromCheckList = hook._removeFromCheckList;
        var addToCheckList = hook._addToCheckList;
        //
        return function(cId) {
            if (isInvalid(cId, checkableId)) {
                return removeFromCheckList('_movableCheckList', cId);
            }
            addToCheckList('_movableCheckList', cId);
        };
    };

    /**
     * Updates the blocked status for all piece that might be checkable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} side - The side of the checkables
     * @since v1.0
     * @version v1.0
     */
    hook._updateMovableCheckableBlocked = function(side) {
        hook._movableCheckList[side].forEach(hook._updateBlockableCheckList);
    };

    /**
     * Updates the blockable check list accounting for the checkable movement
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    hook._updateBlockableCheckList = function(checkableId) {
        var checkedId = hook._oppositeCheckableId(domAPI.side(checkableId));
        // Only those movable to the checked need to check for blockage
        var isBlocked = hook._isInMovableCheckList(checkableId);
        isBlocked = isBlocked && blockableAPI.isBlocked(checkableId, checkedId);
        //
        if (isBlocked) {
            return hook._addToCheckList('_blockableCheckList', checkableId);
        }
        hook._removeFromCheckList('_blockableCheckList', checkableId);
    };

    /**
     * Checks if the current side would be checked
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string} side - The side of the checkables
     * @return {string} The id of the opposing piece that can be checked
     * @since v1.0
     * @version v1.0
     */
    hook._oppositeCheckableId = function(side) {
        return hook._generalId(currentSideAPI.otherSide(side));
    };

    /**
     * Returns the id of the general of the specified side
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string} side - The side of the checkables
     * @return {string} The requested id
     * @since v1.0
     * @version v1.0
     */
    hook._generalId = function(side) { return side + hook.GENERAL_SUFFIX; };

    /**
     * Checks if specified checkable's in the movable check list
     * Functional cohesion/Data coupling/No side effects
     * @author DoubleX
     * @param {string/NonNull} checkableId - The id of the checkable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isInMovableCheckList = function(checkableId) {
        var side = domAPI.side(checkableId);
        return hook._movableCheckList[side].indexOf(checkableId) >= 0;
    };

    /**
     * Adds the specified checkable to the specified check list
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} checkListName - The check list name
     * @param {string/NonNull} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    hook._addToCheckList = function(checkListName, checkableId) {
        var curList = hook[checkListName][domAPI.side(checkableId)];
        if (curList.indexOf(checkableId) < 0) curList.push(checkableId);
    };

    /**
     * Removes the specified checkable from the specified check list
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} checkListName - The check list name
     * @param {string/NonNull} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    hook._removeFromCheckList = function(checkListName, checkableId) {
        var currentList = hook[checkListName][domAPI.side(checkableId)];
        if (!currentList || currentList.indexOf(checkableId) < 0) return;
        currentList.splice(currentList.indexOf(checkableId), 1);
    };

})(chess.checkable.hook, chess.dom.api, chess.blockable.api, 
        chess.messageLog.api, chess.currentSide.api, 
        chess.movableAbilities.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file checkable.js from path js/abstractChess/');
//