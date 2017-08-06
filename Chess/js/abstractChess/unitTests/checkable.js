// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading checkable.js!');
}
//

// This unit test js file should be placed in abstractChess/unitTests

/** The checkable implementation unit test suite
 * Functional cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 2
 * @author DoubleX
 * @param {object} hook - The implementation container to be unit tested
 * @param {object} unitTestSwitches - The switch setting the unit test status
 * @param {object} unitTest - The unit test container extending the hook
 * @since v1.0
 * @version v1.0
 */
(function(hook, unitTestSwitches, unitTest) {

    'use strict';

    // The mocks replacing the corresponding real api dependencies
    var mocks = {
        messageLogAPI: {
            clearMessage: function(tag) {
                mocks.messageLogAPI.isClearMessageCalled = true;
            },
            isClearMessageCalled: false,
            pushMessage: function(tag, content) {
                mocks.messageLogAPI.isPushMessageCalled = true;
            },
            isPushMessageCalled: false,
            showMessage: function(tag) {
                mocks.messageLogAPI.isShowMessageCalled = true;
            },
            isShowMessageCalled: false
        }
    };
    //

    /**
     * Checks if the unit tests should be run
     * Functional cohesion/Message coupling/Referentially transparent
     * @author DoubleX
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isActive = function() { return unitTestSwitches.checkable; };

    /**
     * Tries to check the opposite side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.tryCheckOpposite = hook.tryCheckOpposite;
    hook.tryCheckOpposite = function(checkableId) {
        if (unitTest._isActive()) unitTest.hook.tryCheckOpposite(checkableId);
        unitTest.tryCheckOpposite(checkableId);
    };

    /**
     * Removes the specified checkable from the movable and blockable check list
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.removeFromCheckLists = hook.removeFromCheckLists;
    hook.removeFromCheckLists = function(checkableId) {
        if (unitTest._isActive()) {
            unitTest.hook.removeFromCheckLists(checkableId);
        }
        unitTest.removeFromCheckLists(checkableId);
    };

    /**
     * Updates the status indicating whether a check mate's occurred
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom being captured
     * @since v1.0
     * @version v1.0
     */
    unitTest.updateCheckMateStatus = hook.updateCheckMateStatus;
    hook.updateCheckMateStatus = function(checkableId) {
        if (unitTest._isActive()) {
            unitTest.hook.updateCheckMateStatus(checkableId);
        }
        unitTest.updateCheckMateStatus(checkableId);
    };

    /**
     * Ensures the movable and blockable check lists are always up to date
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.updateMovableBlockableCheckLists = hook.updateMovableBlockableCheckLists;
    hook.updateMovableBlockableCheckLists = function(checkableId) {
        if (unitTest._isActive()) {
            unitTest.hook.updateMovableBlockableCheckLists(checkableId);
        }
        unitTest.updateMovableBlockableCheckLists(checkableId);
    };

    /**
     * Checks if the opposite side can be checked
     * Functional cohesion/Message coupling/Referentially transparent
     * @author DoubleX
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._canCheckOpposite = hook._canCheckOpposite;
    hook._canCheckOpposite = function() {
        if (unitTest._isActive()) unitTest.hook._canCheckOpposite();
        return unitTest._canCheckOpposite();
    };

    /**
     * Tries to check the opposite side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._tryCheckOpposite = hook._tryCheckOpposite;
    hook._tryCheckOpposite = function(checkableId) {
        if (unitTest._isActive()) unitTest.hook._tryCheckOpposite(checkableId);
        unitTest._tryCheckOpposite(checkableId);
    };

    /**
     * Updates the movable check list accounting for the checkable movement
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._updateMovableCheckList = hook._updateMovableCheckList;
    hook._updateMovableCheckList = function(checkableId) {
        if (unitTest._isActive()) {
            unitTest.hook._updateMovableCheckList(checkableId);
        }
        unitTest._updateMovableCheckList(checkableId);
    };

    /**
     * Checks the specified side to see if its checked's checked by checkables
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side of the checkables
     * @since v1.0
     * @version v1.0
     */
    unitTest._checkOpposite = hook._checkOpposite;
    hook._checkOpposite = function(side) {
        if (unitTest._isActive()) unitTest.hook._checkOpposite(side);
        unitTest._checkOpposite(side);
    };

    /**
     * Collects all non general pieces that can check the checked
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side of the checkables
     * @since v1.0
     * @version v1.0
     */
    unitTest._collectNonGeneralCheckableMessages = hook._collectNonGeneralCheckableMessages;
    hook._collectNonGeneralCheckableMessages = function(side) {
        if (unitTest._isActive()) {
            unitTest.hook._collectNonGeneralCheckableMessages(side);
        }
        unitTest._collectNonGeneralCheckableMessages(side);
    };

    /**
     * Returns a function checking whether the specified checkable's not blocked
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} side - The side of the checkables
     * @return {function} The requested function
     * @since v1.0
     * @version v1.0
     */
    unitTest._isNotBlockedFunc = hook._isNotBlockedFunc;
    hook._isNotBlockedFunc = function(side) {
        if (unitTest._isActive()) unitTest.hook._isNotBlockedFunc(side);
        return unitTest._isNotBlockedFunc(side);
    };

    /**
     * Pushes the check message with the specified checkable
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._pushCheckMessage = hook._pushCheckMessage;
    hook._pushCheckMessage = function(checkableId) {
        if (unitTest._isActive()) unitTest.hook._pushCheckMessage(checkableId);
        unitTest._pushCheckMessage(checkableId);
    };

    /**
     * Releases all messages showing all checkeds checked by checkables
     * Functional cohesion/Message coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest._releaseCheckMessages = hook._releaseCheckMessages;
    hook._releaseCheckMessages = function() {
        // It's actually a functional test using mocked dependencies via seams
        if (unitTest._isActive()) unitTest.hook._releaseCheckMessages();
        //
        unitTest._releaseCheckMessages();
    };

    /**
     * Checks if a check mate has taken place
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom being captured
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isCheckMate = hook._isCheckMate;
    hook._isCheckMate = function(checkableId) {
        if (unitTest._isActive()) unitTest.hook._isCheckMate(checkableId);
        return unitTest._isCheckMate(checkableId);
    };

    /**
     * Checks if the specified checkable can be checked by opposing checkables
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._canBeChecked = hook._canBeChecked;
    hook._canBeChecked = function (checkableId) {
        if (unitTest._isActive()) unitTest.hook._canBeChecked(checkableId);
        return unitTest._canBeChecked(checkableId);
    };

    /**
     * Ensures the movable and blockable check lists are always up to date
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} oppositeSide - The side opposing that of the checkables
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._updateMovableBlockableCheckLists = hook._updateMovableBlockableCheckLists;
    hook._updateMovableBlockableCheckLists = function(oppositeSide, checkableId) {
        if (unitTest._isActive()) {
            unitTest.hook._updateMovableBlockableCheckLists(oppositeSide, checkableId);
        }
        unitTest._updateMovableBlockableCheckLists(oppositeSide, checkableId);
    };

    /**
     * Returns a function updating the movable check list with the specified cId
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @return {function} The requested function
     * @since v1.0
     * @version v1.0
     */
    unitTest._updateMovableCheckListFunc = hook._updateMovableCheckListFunc;
    hook._updateMovableCheckListFunc = function(checkableId) {
        if (unitTest._isActive()) {
            unitTest.hook._updateMovableCheckListFunc(checkableId);
        }
        return unitTest._updateMovableCheckListFunc(checkableId);
    };

    /**
     * Updates the blocked status for all piece that might be checkable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side of the checkables
     * @since v1.0
     * @version v1.0
     */
    unitTest._updateMovableCheckableBlocked = hook._updateMovableCheckableBlocked;
    hook._updateMovableCheckableBlocked = function(side) {
        if (unitTest._isActive()) {
            unitTest.hook._updateMovableCheckableBlocked(side);
        }
        unitTest._updateMovableCheckableBlocked(side);
    };

    /**
     * Updates the blockable check list accounting for the checkable movement
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._updateBlockableCheckList = hook._updateBlockableCheckList;
    hook._updateBlockableCheckList = function(checkableId) {
        if (unitTest._isActive()) {
            unitTest.hook._updateBlockableCheckList(checkableId);
        }
        unitTest._updateBlockableCheckList(checkableId);
    };

    /**
     * Checks if the current side would be checked
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} side - The side of the checkables
     * @return {string} The id of the opposing piece that can be checked
     * @since v1.0
     * @version v1.0
     */
    unitTest._oppositeCheckableId = hook._oppositeCheckableId;
    hook._oppositeCheckableId = function(side) {
        if (unitTest._isActive()) unitTest.hook._oppositeCheckableId(side);
        return unitTest._oppositeCheckableId(side);
    };

    /**
     * Returns the id of the general of the specified side
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} side - The side of the checkables
     * @return {string} The requested id
     * @since v1.0
     * @version v1.0
     */
    unitTest._generalId = hook._generalId;
    hook._generalId = function(side) {
        if (unitTest._isActive()) unitTest.hook._generalId(side);
        return unitTest._generalId(side);
    };

    /**
     * Checks if specified checkable's in the movable check list
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isInMovableCheckList = hook._isInMovableCheckList;
    hook._isInMovableCheckList = function(checkableId) {
        if (unitTest._isActive()) {
            unitTest.hook._isInMovableCheckList(checkableId);
        }
        return unitTest._isInMovableCheckList(checkableId);
    };

    /**
     * Adds the specified checkable to the specified check list
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} checkListName - The check list name
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._addToCheckList = hook._addToCheckList;
    hook._addToCheckList = function(checkListName, checkableId) {
        if (unitTest._isActive()) {
            unitTest.hook._addToCheckList(checkListName, checkableId);
        }
        unitTest._addToCheckList(checkListName, checkableId);
    };

    /**
     * Removes the specified checkable from the specified check list
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} checkListName - The check list name
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._removeFromCheckList = hook._removeFromCheckList;
    hook._removeFromCheckList = function(checkListName, checkableId) {
        if (unitTest._isActive()) {
            unitTest.hook._removeFromCheckList(checkListName, checkableId);
        }
        unitTest._removeFromCheckList(checkListName, checkableId);
    };

    /**
     * Tests the tryCheckOpposite function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.tryCheckOpposite = function(checkableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('checkable.unitTest.hook.tryCheckOpposite checkableId: ' + checkableId);
        //
    };

    /**
     * Tests the removeFromCheckLists function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.removeFromCheckLists = function(checkableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('checkable.unitTest.hook.removeFromCheckLists checkableId: ' + checkableId);
        //
    };

    /**
     * Tests the updateCheckMateStatus function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.updateCheckMateStatus = function(checkableId) {
        // The function's too trivial to be unit tested
        console.log('checkable.unitTest.hook.updateCheckMateStatus checkableId: ' + checkableId);
        //
    };

    /**
     * Tests the updateMovableBlockableCheckLists function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.updateMovableBlockableCheckLists = function(checkableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('checkable.unitTest.hook.updateMovableBlockableCheckLists checkableId: ' + checkableId);
        //
    };

    /**
     * Tests the _canCheckOpposite function
     * Functional cohesion/Message coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._canCheckOpposite = function() {
        // The function's too trivial to be unit tested
        console.log('checkable.unitTest.hook._canCheckOpposite');
        //
    };

    /**
     * Tests the _tryCheckOpposite function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._tryCheckOpposite = function(checkableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('checkable.unitTest.hook._tryCheckOpposite checkableId: ' + checkableId);
        //
    };

    /**
     * Tests the _updateMovableCheckList function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._updateMovableCheckList = function(checkableId) {
        // The function's too trivial to be unit tested
        console.log('checkable.unitTest.hook._updateMovableCheckList checkableId: ' + checkableId);
        //
    };

    /**
     * Tests the _checkOpposite function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side of the checkables
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._checkOpposite = function(side) {
        // The function's about control flow and shouldn't be unit tested
        console.log('checkable.unitTest.hook._checkOpposite side: ' + side);
        //
    };

    /**
     * Tests the _collectNonGeneralCheckableMessages function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side of the checkables
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._collectNonGeneralCheckableMessages = function(side) {
        // The function's too trivial to be unit tested
        console.log('checkable.unitTest.hook._collectNonGeneralCheckableMessages side: ' + side);
        //
    };

    /**
     * Tests the _isNotBlockedFunc function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side of the checkables
     * @return {function} The requested function
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isNotBlockedFunc = function(side) {
        // The function's too trivial to be unit tested
            console.log('checkable.unitTest.hook._isNotBlockedFunc side: ' + side);
        //
    };

    /**
     * Tests the _pushCheckMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._pushCheckMessage = function(checkableId) {
        // It's actually a functional test using mocked dependencies via seams
        var realPushMessage = chess.messageLog.api.pushMessage;
        chess.messageLog.api.pushMessage = mocks.messageLogAPI.pushMessage;
        unitTest._pushCheckMessage(checkableId);
        console.log('checkable.unitTest.hook._pushCheckMessage');
        console.log('checkableId: ' + checkableId);
        if (mocks.messageLogAPI.isPushMessageCalled) {
            console.log('Passed!');
        } else {
            console.log('Failed! Actual value: ' + mocks.messageLogAPI.isPushMessageCalled);
        }
        mocks.messageLogAPI.isPushMessageCalled = false;
        chess.messageLog.api.pushMessage = realPushMessage;
        //
    };

    /**
     * Tests the _releaseCheckMessages function
     * Functional cohesion/Message coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._releaseCheckMessages = function() {
        // It's actually a functional test using mocked dependencies via seams
        var realClearMessage = chess.messageLog.api.clearMessage;
        chess.messageLog.api.clearMessage = mocks.messageLogAPI.clearMessage;
        var realShowMessage = chess.messageLog.api.showMessage;
        chess.messageLog.api.showMessage = mocks.messageLogAPI.showMessage;
        unitTest._releaseCheckMessages();
        console.log('checkable.unitTest.hook._releaseCheckMessages');
        if (mocks.messageLogAPI.isClearMessageCalled) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + mocks.messageLogAPI.isClearMessageCalled);
        }
        mocks.messageLogAPI.isClearMessageCalled = false;
        if (mocks.messageLogAPI.isShowMessageCalled) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + mocks.messageLogAPI.isShowMessageCalled);
        }
        mocks.messageLogAPI.isShowMessageCalled = false;
        chess.messageLog.api.clearMessage = realClearMessage;
        chess.messageLog.api.showMessage = realShowMessage;
        //
    };

    /**
     * Tests the _isCheckMate function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom being captured
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isCheckMate = function(checkableId) {
        // The function's too trivial to be unit tested
        console.log('checkable.unitTest.hook._isCheckMate');
        console.log('checkableId: ' + checkableId);
        console.log('isCheckMate: ' + unitTest._isCheckMate(checkableId));
        //
    };

    /**
     * Tests the _canBeChecked function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._canBeChecked = function (checkableId) {
        // The function's too trivial to be unit tested
        console.log('checkable.unitTest.hook._canBeChecked');
        console.log('checkableId: ' + checkableId);
        console.log('canBeChecked: ' + unitTest._canBeChecked(checkableId));
        //
    };

    /**
     * Tests the _updateMovableBlockableCheckLists function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} oppositeSide - The side opposing that of the checkables
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._updateMovableBlockableCheckLists = function(oppositeSide, checkableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('checkable.unitTest.hook._updateMovableBlockableCheckLists');
        console.log('oppositeSide: ' + oppositeSide);
        console.log('checkableId: ' + checkableId);
        //
    };

    /**
     * Tests the _updateMovableCheckListFunc function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._updateMovableCheckListFunc = function(checkableId) {
        // The function's too trivial to be unit tested
        console.log('checkable.unitTest.hook._updateMovableCheckListFunc checkableId: ' + checkableId);
        //
    };

    /**
     * Tests the _updateMovableCheckableBlocked function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side of the checkables
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._updateMovableCheckableBlocked = function(side) {
        // The function's too trivial to be unit tested
        console.log('checkable.unitTest.hook._updateMovableCheckableBlocked side: ' + side);
        //
    };

    /**
     * Tests the _updateBlockableCheckList function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._updateBlockableCheckList = function(checkableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('checkable.unitTest.hook._updateBlockableCheckList checkableId: ' + checkableId);
        //
    };

    /**
     * Tests the _oppositeCheckableId function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side of the checkables
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._oppositeCheckableId = function(side) {
        // The function's too trivial to be unit tested
        console.log('checkable.unitTest.hook._oppositeCheckableId');
        console.log('side: ' + side);
        console.log('oppositeCheckableId: ' + unitTest._oppositeCheckableId(side));
        //
    };

    /**
     * Tests the _generalId function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side of the checkables
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._generalId = function(side) {
        // The function's too trivial to be unit tested
        console.log('checkable.unitTest.hook._generalId');
        console.log('side: ' + side);
        console.log('generalId: ' + unitTest._generalId(side));
        //
    };

    /**
     * Tests the _isInMovableCheckList function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isInMovableCheckList = function(checkableId) {
        // The function's too trivial to be unit tested
        console.log('checkable.unitTest.hook._isInMovableCheckList');
        console.log('checkableId: ' + checkableId);
        console.log('isInMovableCheckList: ' + unitTest._isInMovableCheckList(checkableId));
        //
    };

    /**
     * Tests the _addToCheckList function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} checkListName - The check list name
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._addToCheckList = function(checkListName, checkableId) {
        // The function's too trivial to be unit tested
        console.log('checkable.unitTest.hook._addToCheckList');
        console.log('checkListName: ' + checkListName);
        console.log('checkableId: ' + checkableId);
        //
    };

    /**
     * Tests the _removeFromCheckList function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} checkListName - The check list name
     * @param {string} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._removeFromCheckList = function(checkListName, checkableId) {
        // The function's too trivial to be unit tested
        console.log('checkable.unitTest.hook._removeFromCheckList');
        console.log('checkListName: ' + checkListName);
        console.log('checkableId: ' + checkableId);
        //
    };

})(chess.checkable.hook, chess.unitTestSwitches, chess.checkable.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file checkable.js from path js/abstractChess/unitTests/');
//