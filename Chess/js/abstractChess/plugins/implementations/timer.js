// This's an Abstract Chess plugin and must be put in the implementations folder

/** The implementation of the timer plugin
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 4
 * Number of functions: 22
 * Number of variables: 3
 * @author DoubleX
 * @param {object/NonNull} configuration - The plugin configuration container
 * @param {object/NonNull} hook - The implementation container as the hook for
 *                                 plugins
 * @param {object/NonNull} domAPI - The dom.api as a dependency
 * @param {object/NonNull} messageLogAPI - The messageLog.api as a dependency
 * @param {object/NonNull} currentSideHook - The currentSide.hook as a
 *                                            dependency
 * @since v1.0
 * @version v1.0
 */
(function(configuration, hook, domAPI, messageLogAPI, currentSideHook) {

    'use strict';

    // Marks the id of the dom showing the meaning of the text of current side
    hook.SIDE_DESC_ID = 'currentSideDesc';
    //
    // Marks all sides needing timers
    hook.SIDES = {
        startingSide: currentSideHook._currentSide(),
        followingSide: currentSideHook.oppositeSide()
    };
    //
    // Marks the message tag to be shown on the log
    hook.TAG = 'The timer of the following side has already expired: ';
    //
    hook.TIMER_ID_SUFFIX = '_Timer'; // The timer id suffix for both sides
    // Marks the number of milliseconds constituting a timer interval
    hook.TIMER_INTERVAL = 1000;
    //

    hook._isTimerActive = {}; // Marks whether the timers should be run
    hook._timerCounters = {}; // Marks the number of milliseconds of the timers

    /**
     * Resumes the timer of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its timer to be resumed
     * @since v1.0
     * @version v1.0
     */
    hook.resumeTimer = function(side) {
        if (configuration.IS_ACTIVE) hook._setTimerActiveStatus(side, true);
    };

    /**
     * Sets the timer of the specified side to be the specified milliseconds
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its timer to be set
     * @param {number} milliseconds - The number of milliseconds of the timer
     * @since v1.0
     * @version v1.0
     */
    hook.setTimer = function(side, milliseconds) {
        if (!configuration.IS_ACTIVE) return;
        hook._setTimer(side, milliseconds);
        hook._setTimerDomText(side, milliseconds);
    };

    /**
     * Stops the timer of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its timer to be stopped
     * @since v1.0
     * @version v1.0
     */
    hook.stopTimer = function(side) {
        if (configuration.IS_ACTIVE) hook._setTimerActiveStatus(side, false);
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
    hook.subtractTimer = function(side, milliseconds) {
        if (!configuration.IS_ACTIVE) return;
        // The new timer counter should never be negative
        var counter = Math.max(hook._timerCounters[side] - milliseconds, 0);
        //
        hook.setTimer(side, counter);
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
    hook._setTimerActiveStatus = function(side, isActive) {
        hook._isTimerActive[side] = isActive;
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
    hook._setTimer = function(side, milliseconds) {
        hook._timerCounters[side] = milliseconds;
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
    hook._setTimerDomText = function(side, milliseconds) {
        var counter = hook._formattedTimerCounter(side, milliseconds);
        domAPI.dom(hook._timerDomId(side)).textContent = counter;
    };

    /**
     * The callback of the timer
     * Functional cohesion/Message coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    hook._timerCallback = function() {
        if (!configuration.IS_ACTIVE) return;
        hook._sideTimerCallback(currentSideHook._currentSide());
    };

    /**
     * The callback of the timer for the specified side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} side - The side with its timer to have its
     *                                 callback
     * @since v1.0
     * @version v1.0
     */
    hook._sideTimerCallback = function(side) {
        if (!hook._isUpdateTimerCounter(side)) return;
        hook._updateTimerCounter(side);
        if (hook._isTimeout(side)) hook._onTimeout(side);
        hook._updateTimerCounterDom(side);
    };

    /**
     * Checks whether the timer of the specified side's to be updated
     * Functional cohesion/Data coupling/No side effects
     * @author DoubleX
     * @param {string} side - The side with its timer to be checked
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isUpdateTimerCounter = function(side) {
        return hook._isTimerActive[side] && !hook._isTimeout(side);
    };

    /**
     * Updates the counter of the timer of the specified side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side with its timer counter updated
     * @since v1.0
     * @version v1.0
     */
    hook._updateTimerCounter = function(side) {
        hook._timerCounters[side] -= hook.TIMER_INTERVAL;
    };

    /**
     * Checks whether the timer of the specified side's timed out
     * Functional cohesion/Data coupling/No side effects
     * @author DoubleX
     * @param {string} side - The side with its timer to be checked
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook._isTimeout = function(side) { return hook._timerCounters[side] <= 0; };

    /**
     * Be the hook to be triggered right after the specified side's timed out
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side with its timer to be timed out
     * @since v1.0
     * @version v1.0
     */
    hook._onTimeout = function(side) {
        hook._showTimeoutMessage(side);
        hook._timerCounters[side] = 0;
    };

    /**
     * Updates the dom representing the timer of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} side - The side with its timer dom to be updated
     * @since v1.0
     * @version v1.0
     */
    hook._updateTimerCounterDom = function(side) {
        var cnt = hook._formattedTimerCounter(side, hook._timerCounters[side]);
        domAPI.dom(hook._timerDomId(side)).textContent = cnt;
    };

    /**
     * Returns the formatted timer counter using the specified milliseconds
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string} side - The side with its timer to be set
     * @param {number} counter - The timer counter in milliseconds
     * @return {string} The formatted Timer counter
     * @since v1.0
     * @version v1.0
     */
    hook._formattedTimerCounter = function(side, counter) {
        var formattedCounter = counter / 1000; // Formats the counter in seconds
        // 1 hour has 3600 seconds
        var hours = Math.floor(formattedCounter / 3600).toString();
        //
        if (hours.length <= 1) hours = '0' + hours;
        // 1 hour has 3600 seconds and 1 hour has 60 minutes
        var minutes = Math.floor(formattedCounter % 3600 / 60).toString();
        //
        if (minutes.length <= 1) minutes = '0' + minutes;
        // 1 minute has 60 seconds
        var seconds = Math.floor(formattedCounter % 60).toString();
        //
        if (seconds.length <= 1) seconds = '0' + seconds;
        return ' |' + side + ':' + hours + ':' + minutes + ':' + seconds + '| ';
    };

    /**
     * Shows the message showing that the timer of the specified side's expired
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its timer being expired
     * @since v1.0
     * @version v1.0
     */
    hook._showTimeoutMessage = function(side) {
        messageLogAPI.pushMessage(hook.TAG, side);
        messageLogAPI.showMessage(hook.TAG);
        messageLogAPI.clearMessage(hook.TAG);
    };

    /**
     * Initializes the timer of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side with its timer being initialized
     * @since v1.0
     * @version v1.0
     */
    hook._initTimer = function(side) {
        var startTimerCounter = configuration.START_TIMER_COUNTER[side];
        hook.setTimer(hook.SIDES[side], startTimerCounter);
    };

    /**
     * Creates a dom for the timer of the specified side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side with its timer being initialized
     * @return {dom/NonNull} The side timer dom
     * @since v1.0
     * @version v1.0
     */
    hook._timerDom = function(side) {
        var timerDom = document.createElement('text');
        timerDom.id = hook._timerDomId(side), timerDom.contentEditable = false;
        return timerDom;
    };

    /**
     * Returns the id of the dom for the timer of the specified side
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string} side - The side with its timer being initialized
     * @return {string} The side timer dom id
     * @since v1.0
     * @version v1.0
     */
    hook._timerDomId = function(side) { return side + hook.TIMER_ID_SUFFIX; };

    /**
     * Creates the timer doms representing the timers for all sides
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    hook._createTimerDoms = function() {
        var startingSideTimer = hook._timerDom(hook.SIDES.startingSide);
        var followingSideTimer = hook._timerDom(hook.SIDES.followingSide);
        var sideDescDom = domAPI.dom(hook.SIDE_DESC_ID);
        var sideDom = domAPI.dom(currentSideHook.SIDE_ID);
        var sideDomParent = sideDom.parentNode;
        sideDomParent.insertBefore(startingSideTimer, sideDescDom);
        sideDomParent.insertBefore(followingSideTimer, sideDom.nextSibling);
    };

    /**
     * Initializes the timers for all sides
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    hook._initTimers = function() {
        Object.keys(hook.SIDES).forEach(hook._initTimer);
        window.setInterval(hook._timerCallback, hook.TIMER_INTERVAL);
        hook.resumeTimer(hook.SIDES.startingSide);
    };

    /**
     * Creates the initialized timers for all sides
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    hook._createTimers = function() {
        hook._createTimerDoms();
        hook._initTimers();
    };

    // Declares all functions to be run upon starting the game
    chess.pluginSetupCodes.abstractChess.timer = [hook._createTimers];
    //

})(chess.plugins.abstractChess.timer.configuration, 
        chess.plugins.abstractChess.timer.hook, chess.dom.api, 
        chess.messageLog.api, chess.currentSide.hook);

// The container for all the original linked functions being extended
chess.plugins.abstractChess.timer.currentSide = { hook: {} };
//

/** The extensions of all existing functions needed by this plugin
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 0
 * Number of functions: 1
 * Number of variables: 0
 * @author DoubleX
 * @param {object/NonNull} api - The plugin api container as the interface
 * @param {object/NonNull} currentSideHook - The currentSide.hook as a linkage
 * @param {object/NonNull} originalCurrentSideHook - The container of the
 *                                                    original hook
 * @since v1.0
 * @version v1.0
 */
(function(api, currentSideHook, originalCurrentSideHook) {

    'use strict';

    /**
     * Returns the formatted version of the specified coordinates
     * Functional cohesion/Message coupling/Self-Symmetrical
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    originalCurrentSideHook.switchSide = currentSideHook.switchSide;
    currentSideHook.switchSide = function() {
        // Added to stop the old current side timer and resume that of new one
        api.stopTimer(currentSideHook._currentSide());
        api.resumeTimer(currentSideHook.oppositeSide());
        //
        originalCurrentSideHook.switchSide();
    };

})(chess.plugins.abstractChess.timer.api, chess.currentSide.hook, 
        chess.plugins.abstractChess.timer.currentSide.hook);