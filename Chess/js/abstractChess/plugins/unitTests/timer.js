// This's an Abstract Chess plugin and must be put in the unitTests folder

// Marks whether this unit test suite's active
chess.unitTestSwitches.plugins.abstractChess.timer = false;
//

/** The timer plugin implementation unit test suite
 * Functional cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 2
 * @author DoubleX
 * @param {object} configuration - The plugin configuration container
 * @param {object} hook - The implementation container to be unit tested
 * @param {object} unitTestSwitches - The switch setting the unit test status
 * @param {object} unitTest - The unit test container extending the hook
 * @since v1.0
 * @version v1.0
 */
(function(configuration, hook, unitTestSwitches, unitTest) {

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
    unitTest._isActive = function() {
        return configuration.IS_ACTIVE && unitTestSwitches.timer;
    };

    /**
     * Resumes the timer of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its timer to be resumed
     * @since v1.0
     * @version v1.0
     */
    unitTest.resumeTimer = hook.resumeTimer;
    hook.resumeTimer = function(side) {
        if (unitTest._isActive()) unitTest.hook.resumeTimer(side);
        unitTest.resumeTimer(side);
    };

    /**
     * Sets the timer of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its timer to be set
     * @param {number} milliseconds - The number of milliseconds of the timer
     * @since v1.0
     * @version v1.0
     */
    unitTest.setTimer = hook.setTimer;
    hook.setTimer = function(side, milliseconds) {
        if (unitTest._isActive()) unitTest.hook.setTimer(side, milliseconds);
        unitTest.setTimer(side, milliseconds);
    };

    /**
     * Stops the timer of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its timer to be stopped
     * @since v1.0
     * @version v1.0
     */
    unitTest.stopTimer = hook.stopTimer;
    hook.stopTimer = function(side) {
        if (unitTest._isActive()) unitTest.hook.stopTimer(side);
        unitTest.stopTimer(side);
    };

    /**
     * Substracts the timer of the specified side by the specified milliseconds
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side with its timer to be set
     * @param {number} milliseconds - The number of milliseconds of the timer
     * @since v1.0
     * @version v1.0
     */
    unitTest.subtractTimer = hook.subtractTimer;
    hook.subtractTimer = function(side, milliseconds) {
        if (unitTest._isActive()) {
            unitTest.hook.subtractTimer(side, milliseconds);
        }
        unitTest.subtractTimer(side, milliseconds);
    };

    /**
     * Stops the timer of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its timer active status to be set
     * @param {boolean} isActive - Whether the specified side timer's active
     * @since v1.0
     * @version v1.0
     */
    unitTest._setTimerActiveStatus = hook._setTimerActiveStatus;
    hook._setTimerActiveStatus = function(side, isActive) {
        if (unitTest._isActive()) {
            unitTest.hook._setTimerActiveStatus(side, isActive);
        }
        unitTest._setTimerActiveStatus(side, isActive);
    };

    /**
     * Sets the timer of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its timer to be set
     * @param {number} milliseconds - The number of milliseconds of the timer
     * @since v1.0
     * @version v1.0
     */
    unitTest._setTimer = hook._setTimer;
    hook._setTimer = function(side, milliseconds) {
        if (unitTest._isActive()) unitTest.hook._setTimer(side, milliseconds);
        unitTest._setTimer(side, milliseconds);
    };

    /**
     * Sets the text of the dom representing the timer of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its timer to be set
     * @param {number} milliseconds - The number of milliseconds of the timer
     * @since v1.0
     * @version v1.0
     */
    unitTest._setTimerDomText = hook._setTimerDomText;
    hook._setTimerDomText = function(side, milliseconds) {
        if (unitTest._isActive()) {
            unitTest.hook._setTimerDomText(side, milliseconds);
        }
        unitTest._setTimerDomText(side, milliseconds);
    };

    /**
     * The callback of the timer
     * Functional cohesion/Message coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest._timerCallback = hook._timerCallback;
    hook._timerCallback = function() {
        if (unitTest._isActive()) unitTest.hook._timerCallback();
        unitTest._timerCallback();
    };

    /**
     * The callback of the timer for the specified side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side with its timer to have its callback
     * @since v1.0
     * @version v1.0
     */
    unitTest._sideTimerCallback = hook._sideTimerCallback;
    hook._sideTimerCallback = function(side) {
        if (unitTest._isActive()) unitTest.hook._sideTimerCallback(side);
        unitTest._sideTimerCallback(side);
    };

    /**
     * Checks whether the timer of the specified side's to be updated
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} side - The side with its timer to be checked
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isUpdateTimerCounter = hook._isUpdateTimerCounter;
    hook._isUpdateTimerCounter = function(side) {
        if (unitTest._isActive()) unitTest.hook._isUpdateTimerCounter(side);
        return unitTest._isUpdateTimerCounter(side);
    };

    /**
     * Updates the counter of the timer of the specified side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side with its timer counter updated
     * @since v1.0
     * @version v1.0
     */
    unitTest._updateTimerCounter = hook._updateTimerCounter;
    hook._updateTimerCounter = function(side) {
        if (unitTest._isActive()) unitTest.hook._updateTimerCounter(side);
        unitTest._updateTimerCounter(side);
    };

    /**
     * Checks whether the timer of the specified side's timed out
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} side - The side with its timer to be checked
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isTimeout = hook._isTimeout;
    hook._isTimeout = function(side) {
        if (unitTest._isActive()) unitTest.hook._isTimeout(side);
        return unitTest._isTimeout(side);
    };

    /**
     * Be the hook to be triggered right after the specified side's timed out
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side with its timer to be timed out
     * @since v1.0
     * @version v1.0
     */
    unitTest._onTimeout = hook._onTimeout;
    hook._onTimeout = function(side) {
        if (unitTest._isActive()) unitTest.hook._onTimeout(side);
        unitTest._onTimeout(side);
    };

    /**
     * Updates the dom representing the timer of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its timer dom to be updated
     * @since v1.0
     * @version v1.0
     */
    unitTest._updateTimerCounterDom = hook._updateTimerCounterDom;
    hook._updateTimerCounterDom = function(side) {
        if (unitTest._isActive()) unitTest.hook._updateTimerCounterDom(side);
        unitTest._updateTimerCounterDom(side);
    };

    /**
     * Returns the formatted timer counter using the specified milliseconds
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} side - The side with its timer to be set
     * @param {number} counter - The timer counter in milliseconds
     * @return {number} The formatted Timer counter
     * @since v1.0
     * @version v1.0
     */
    unitTest._formattedTimerCounter = hook._formattedTimerCounter;
    hook._formattedTimerCounter = function(side, counter) {
        if (unitTest._isActive()) {
            unitTest.hook._formattedTimerCounter(side, counter);
        }
        return unitTest._formattedTimerCounter(side, counter);
    };

    /**
     * Shows the message showing that the timer of the specified side's expired
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its timer being expired
     * @since v1.0
     * @version v1.0
     */
    unitTest._showTimeoutMessage = hook._showTimeoutMessage;
    hook._showTimeoutMessage = function(side) {
        if (unitTest._isActive()) unitTest.hook._showTimeoutMessage(side);
        unitTest._showTimeoutMessage(side);
    };

    /**
     * Initializes the timer of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its timer being initialized
     * @since v1.0
     * @version v1.0
     */
    unitTest._initTimer = hook._initTimer;
    hook._initTimer = function(side) {
        if (unitTest._isActive()) unitTest.hook._initTimer(side);
        unitTest._initTimer(side);
    };

    /**
     * Creates a dom for the timer of the specified side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side with its timer being initialized
     * @return {dom} The side timer dom
     * @since v1.0
     * @version v1.0
     */
    unitTest._timerDom = hook._timerDom;
    hook._timerDom = function(side) {
        if (unitTest._isActive()) unitTest.hook._timerDom(side);
        return unitTest._timerDom(side);
    };

    /**
     * Returns the id of the dom for the timer of the specified side
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} side - The side with its timer being initialized
     * @return {string} The side timer dom id
     * @since v1.0
     * @version v1.0
     */
    unitTest._timerDomId = hook._timerDomId;
    hook._timerDomId = function(side) {
        if (unitTest._isActive()) unitTest.hook._timerDomId(side);
        return unitTest._timerDomId(side);
    };

    /**
     * Creates the timer doms representing the timers for all sides
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest._createTimerDoms = hook._createTimerDoms;
    hook._createTimerDoms = function() {
        if (unitTest._isActive()) unitTest.hook._createTimerDoms();
        unitTest._createTimerDoms();
    };

    /**
     * Initializes the timers for all sides
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest._initTimers = hook._initTimers;
    hook._initTimers = function() {
        if (unitTest._isActive()) unitTest.hook._initTimers();
        unitTest._initTimers();
    };

    /**
     * Creates the initialized timers for all sides
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest._createTimers = hook._createTimers;
    hook._createTimers = function() {
        if (unitTest._isActive()) unitTest.hook._createTimers();
        unitTest._createTimers();
    };

    /**
     * Tests the resumeTimer function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer to be resumed
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.resumeTimer = function(side) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.timer.unitTest.hook.resumeTimer side: ' + side);
        //
    };

    /**
     * Tests the setTimer function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer to be set
     * @param {number} milliseconds - The number of milliseconds of the timer
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.setTimer = function(side, milliseconds) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.timer.unitTest.hook.setTimer');
        console.log('side: ' + side);
        console.log('milliseconds: ' + milliseconds);
        //
    };

    /**
     * Tests the stopTimer function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer to be stopped
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.stopTimer = function(side) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.timer.unitTest.hook.stopTimer side: ' + side);
        //
    };

    /**
     * Tests the substractTimer function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer to be set
     * @param {number} milliseconds - The number of milliseconds of the timer
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.subtractTimer = function(side, milliseconds) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.timer.unitTest.hook.subtractTimer');
        console.log('side: ' + side);
        console.log('milliseconds: ' + milliseconds);
        //
    };

    /**
     * Tests the _setTimerActiveStatus function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer active status to be set
     * @param {boolean} isActive - Whether the specified side timer's active
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._setTimerActiveStatus = function(side, isActive) {
        // The function's too trivial to be unit tested
        console.log('plugins.timer.unitTest.hook._setTimerActiveStatus');
        console.log('side: ' + side);
        console.log('isActive: ' + isActive);
        //
    };

    /**
     * Tests the _setTimer function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer to be set
     * @param {number} milliseconds - The number of milliseconds of the timer
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._setTimer = function(side, milliseconds) {
        // The function's too trivial to be unit tested
        console.log('plugins.timer.unitTest.hook._setTimer');
        console.log('side: ' + side);
        console.log('milliseconds: ' + milliseconds);
        //
    };

    /**
     * Tests the _setTimerDomText function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer to be set
     * @param {number} milliseconds - The number of milliseconds of the timer
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._setTimerDomText = function(side, milliseconds) {
        // The function's too trivial to be unit tested
        console.log('plugins.timer.unitTest.hook._setTimerDomText');
        console.log('side: ' + side);
        console.log('milliseconds: ' + milliseconds);
        //
    };

    /**
     * Tests the _timerCallback function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._timerCallback = function() {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.timer.unitTest.hook._timerCallback');
        //
    };

    /**
     * Tests the _sideTimerCallback function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer to have its callback
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._sideTimerCallback = function(side) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.timer.unitTest.hook._sideTimerCallback side: ' + side);
        //
    };

    /**
     * Tests the _isUpdateTimerCounter function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer to be checked
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isUpdateTimerCounter = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.timer.unitTest.hook._isUpdateTimerCounter');
        console.log('side: ' + side);
        console.log('isUpdateTimerCounter: ' + unitTest._isUpdateTimerCounter(side));
        //
    };

    /**
     * Tests the _updateTimerCounter function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer counter updated
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._updateTimerCounter = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.timer.unitTest.hook._updateTimerCounter side: ' + side);
        //
    };

    /**
     * Tests the _isTimeout function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer to be checked
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isTimeout = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.timer.unitTest.hook._isTimeout');
        console.log('side: ' + side);
        console.log('isTimeout: ' + unitTest._isTimeout(side));
        //
    };

    /**
     * Tests the _onTimeout function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer to be timed out
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._onTimeout = function(side) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.timer.unitTest.hook._onTimeout side: ' + side);
        //
    };

    /**
     * Tests the _updateTimerCounterDom function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer dom to be updated
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._updateTimerCounterDom = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.timer.unitTest.hook._updateTimerCounterDom side: ' + side);
        //
    };

    /**
     * Tests the _formattedTimerCounter function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer to be set
     * @param {number} counter - The timer counter in milliseconds
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._formattedTimerCounter = function(side, counter) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestFormattedTimerCounter = unitTest._formattedTimerCounter(side, 14400000);
        console.log('plugins.timer.unitTest.hook._formattedTimerCounter');
        console.log('side: ' + side);
        console.log('counter: ' + counter);
        console.log('formattedTimerCounter: ' + unitTest._formattedTimerCounter(side, counter));
        if (unitTestFormattedTimerCounter === ' |' + side + ':04:00:00| ') {
            console.log('Passed!');
        } else {
            console.log('Failed! Actual value: ' + unitTestFormattedTimerCounter);
        }
        //
    };

    /**
     * Tests the _showTimeoutMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer being expired
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._showTimeoutMessage = function(side) {
        // It's actually a functional test using mocked dependencies via seams
        var realClearMessage = chess.messageLog.api.clearMessage;
        chess.messageLog.api.clearMessage = mocks.messageLogAPI.clearMessage;
        var realPushMessage = chess.messageLog.api.pushMessage;
        chess.messageLog.api.pushMessage = mocks.messageLogAPI.pushMessage;
        var realShowMessage = chess.messageLog.api.showMessage;
        chess.messageLog.api.showMessage = mocks.messageLogAPI.showMessage;
        unitTest._showTimeoutMessage(side);
        console.log('plugins.timer.unitTest.hook._showTimeoutMessage');
        console.log('side: ' + side);
        if (mocks.messageLogAPI.isClearMessageCalled) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + mocks.messageLogAPI.isClearMessageCalled);
        }
        mocks.messageLogAPI.isClearMessageCalled = false;
        if (mocks.messageLogAPI.isPushMessageCalled) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + mocks.messageLogAPI.isPushMessageCalled);
        }
        mocks.messageLogAPI.isPushMessageCalled = false;
        if (mocks.messageLogAPI.isShowMessageCalled) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + mocks.messageLogAPI.isShowMessageCalled);
        }
        mocks.messageLogAPI.isShowMessageCalled = false;
        chess.messageLog.api.clearMessage = realClearMessage;
        chess.messageLog.api.pushMessage = realPushMessage;
        chess.messageLog.api.showMessage = realShowMessage;
        //
    };

    /**
     * Tests the _initTimer function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer being initialized
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._initTimer = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.timer.unitTest.hook._initTimer side: ' + side);
        //
    };

    /**
     * Tests the _timerDom function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer being initialized
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._timerDom = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.timer.unitTest.hook._timerDom side: ' + side);
        //
    };

    /**
     * Tests the _timerDomId function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side with its timer being initialized
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._timerDomId = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.timer.unitTest.hook._timerDomId');
        console.log('side: ' + side);
        console.log('timerDomId: ' + unitTest._timerDomId(side));
        //
    };

    /**
     * Tests the _timerDomId function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._createTimerDoms = function() {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.timer.unitTest.hook._createTimerDoms');
        //
    };

    /**
     * Tests the _initTimers function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._initTimers = function() {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.timer.unitTest.hook._initTimers');
        //
    };

    /**
     * Tests the _createTimers function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._createTimers = function() {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.timer.unitTest.hook._createTimers');
        //
    };

})(chess.plugins.abstractChess.timer.configuration, 
        chess.plugins.abstractChess.timer.hook, 
        chess.unitTestSwitches.plugins.abstractChess, 
        chess.plugins.abstractChess.timer.unitTest);