// This's an Abstract Chess plugin and must be put in the apis folder

/** The timer plugin api list
 * Functional cohesion/Data coupling/Idempotent
 * On GMT 1000 27 Jan 2017
 * Number of functions: 4
 * Number of script calls: 4
 * @author DoubleX
 * @interface
 * @param {object/NonNull} api - The api container as the interface
 * @param {object/NonNull} hook - The implementation container as the hook for
 *                                 plugins
 * @since v1.0
 * @version v1.0
 */
(function(api, hook) {

    'use strict';

    /**
     * Resumes the timer of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * Script call
     * @author DoubleX
     * @param {string} side - The side with its timer to be resumed
     * @since v1.0
     * @version v1.0
     */
    api.resumeTimer = function(side) { hook.resumeTimer(side); };

    /**
     * Sets the timer of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * Script call
     * @author DoubleX
     * @param {string} side - The side with its timer to be set
     * @param {number} milliseconds - The number of milliseconds of the timer
     * @since v1.0
     * @version v1.0
     */
    api.setTimer = function(side, milliseconds) {
        hook.setTimer(side, milliseconds);
    };

    /**
     * Stops the timer of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * Script call
     * @author DoubleX
     * @param {string} side - The side with its timer to be stopped
     * @since v1.0
     * @version v1.0
     */
    api.stopTimer = function(side) { hook.stopTimer(side); };

    /**
     * Substracts the timer of the specified side by the specified milliseconds
     * Functional cohesion/Data coupling
     * Script call
     * @author DoubleX
     * @param {string} side - The side with its timer to be set
     * @param {number} milliseconds - The number of milliseconds of the timer
     * @since v1.0
     * @version v1.0
     */
    api.subtractTimer = function(side, milliseconds) {
        hook.subtractTimer(side, milliseconds);
    };

})(chess.plugins.abstractChess.timer.api, 
        chess.plugins.abstractChess.timer.hook);