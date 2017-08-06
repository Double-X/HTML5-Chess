// This's an Abstract Chess plugin and must be put in the configurations folder

/** The configuration of the gameRecord plugin
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

    /* Sets whether the game record notation will include the time of starting
     * and ending the turn respectively
     * The timer plugin for Abstract Chess must be loaded in order to set any of
     * them to be true
     * E.g.: To record the starting but not the ending time, set start and end
     *       as true and false respectively
     */
    configuration.RECORD_TIME = { start: true, end: true };

})(chess.plugins.abstractChess.gameRecord.configuration);