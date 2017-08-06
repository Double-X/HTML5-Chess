// This's an Abstract Chess plugin and must be put in the apis folder

/** The gameRecord plugin api list
 * Functional cohesion/Data coupling/Idempotent
 * On GMT 1000 27 Jan 2017
 * Number of functions: 2
 * Number of script calls: 0
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
     * Records the current move of the specified piece with specified locations
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} pieceId - The id of the piece to have its move
     *                                    recorded
     * @param {object/NonNull} oldLocation - The piece old location
     * @param {object/NonNull} newLocation - The piece new location
     * @since v1.0
     * @version v1.0
     */
    api.recordCurrentMove = function(pieceId, oldLocation, newLocation) {
        hook.recordCurrentMove(pieceId, oldLocation, newLocation);
    };

    /**
     * Records the starting time of the current turn of the specified side
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} side - The side with its timer to be resumed
     * @since v1.0
     * @version v1.0
     */
    api.recordCurrentTurnStartingTime = function(side) {
        hook.recordCurrentTurnStartingTime(side);
    };

})(chess.plugins.abstractChess.gameRecord.api, 
        chess.plugins.abstractChess.gameRecord.hook);