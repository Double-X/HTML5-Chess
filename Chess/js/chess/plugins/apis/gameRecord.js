// This's an Chess plugin and must be put in the apis folder

/** The gameRecord plugin api list
 * Functional cohesion/Data coupling/Idempotent
 * On GMT 1000 27 Jan 2017
 * Number of functions: 1
 * Number of script calls: 0
 * @author DoubleX
 * @interface
 * @param {object} api - The api container as the interface
 * @param {object} hook - The implementation container as the hook for plugins
 * @since v1.0
 * @version v1.0
 */
(function(api, hook) {

    'use strict';

    /**
     * Records the current promotion of the specified side and new type
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side of the promotable to be reocrded
     * @param {string} newType - The new type of the promotable to be reocrded
     * @since v1.0
     * @version v1.0
     */
    api.recordPromotion = function(side, newType) {
        hook.recordPromotion(side, newType);
    };

})(chess.plugins.abstractChess.gameRecord.api, 
        chess.plugins.abstractChess.gameRecord.hook);