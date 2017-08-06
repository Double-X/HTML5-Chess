// This's an Abstract Chess plugin and must be put in the configurations folder

/** The configuration of the timer plugin
 * Functional cohesion/Data coupling/No function
 * On GMT 1000 27 Jan 2017
 * Number of configurations: 2
 * @author DoubleX
 * @param {object/NonNull} configuration - The plugin configuration container
 * @since v1.0
 * @version v1.0
 */
(function(configuration) {

    'use strict';

    /* Sets whether this plugin will be active during the gameplay
     * Its value's always interpreted as either truthy or falsy
     * Setting it as falsy will always shut down this plugin's unit test suite
     * E.g.: To deactivate this plugin, set it as false
     * To change its value on the fly, use this script call:
     * chess.plugins.abstractChess.timer.configuration.IS_ACTIVE = val
     * E.g.: To activate this plugin on the fly, use this script call:
     *       chess.plugins.abstractChess.timer.configuration.IS_ACTIVE = true
     * DON'T USE THIS SCRIPT CALL UNLESS YOU REALLY KNOW WHAT YOU'RE TRULY DOING
     */
    configuration.IS_ACTIVE = true;

    /* Sets the starting timer counter of the specified sides in milliseconds
     * The timer counter of the current side will be updated per second
     * It must be a number and should be that in thousasnd milliseconds(seconds)
     * E.g.: To set the starting timer counter of the starting side as 4 hours,
     *       set startingSide as 14400000
     */
    configuration.START_TIMER_COUNTER = {
        startingSide: 14400000, // The side which moves first
        followingSide: 14400000 // The side which moves last
    };

})(chess.plugins.abstractChess.timer.configuration);