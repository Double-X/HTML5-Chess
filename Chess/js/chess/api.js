// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading api.js!');
}
//

/** The checkable api list
 * Functional cohesion/Data coupling/Idempotent
 * On GMT 1000 27 Jan 2017
 * Number of apis: 1
 * Number of script calls: 1
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
     * Checks if the specified destination are checked by the specified side
     * Functional cohesion/Data coupling/Idempotent
     * Script Call
     * @author DoubleX
     * @param {string} destinationId - The id of the destination to be checked
     * @param {string} side - The side to be checked
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    api.isReachable = function(destinationId, side) {
        return hook.isReachable(destinationId, side);
    };

})(chess.checkable.api, chess.checkable.hook);

/** The promotable api list
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of apis: 1
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
     * Tries to promote the specified promotable
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} promotableId - The id of the promotable to be promoted
     * @since v1.0
     * @version v1.0
     */
    api.promote = function(promotableId) { hook.tryPromote(promotableId); };

})(chess.promotable.api, chess.promotable.hook);

/** The specialMoveRecords api list
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of apis: 6
 * Number of script calls: 2
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
     * Clears the move record of the specified movable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable to clear its record
     * @since v1.0
     * @version v1.0
     */
    api.clearMoveRecord = function(movableId) {
        hook.clearMoveRecord(movableId);
    };

    /**
     * Checks whether the specified movable can be used by En Passant
     * Functional cohesion/Data coupling/Referentially transparent
     * Script call
     * @author DoubleX
     * @param {string} movableId - The id of the movable to check its record
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    api.hasEnPassantRight = function(movableId) {
        return hook.hasEnPassantRight(movableId);
    };

    /**
     * Checks whether the specified movable hasn't moved before
     * Functional cohesion/Data coupling/Referentially transparent
     * Script call
     * @author DoubleX
     * @param {string} movableId - The id of the movable to be checked
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    api.hasNotMoved = function(movableId) {
        return hook.hasNotMoved(movableId);
    };

    /**
     * Marks the use of the Castling involving the specified castlable and coor
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} castlableId - The id of the castlable dom
     * @param {object} movableCoor - The original movable dom coordinates
     * @since v1.0
     * @version v1.0
     */
    api.markUseCastling = function(castlableId, movableCoor) {
        hook.markUseCastling(castlableId, movableCoor);
    };

    /**
     * Marks the use of the En Passant right for the specified movable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} movableId - The id of the movable using En Passant
     * @since v1.0
     * @version v1.0
     */
    api.markUseEnPassantRight = function(movableId) {
        hook.markUseEnPassantRight(movableId);
    };

    /**
     * Updates the special move records used by all special moves
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} movableId - The id of the movable dom
     * @param {function} move - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    api.updateRecords = function(movableId, move) {
        hook.updateRecords(movableId, move);
    };

})(chess.specialMoveRecords.api, chess.specialMoveRecords.hook);

// Shows that this js files' loaded from its path
console.log('Loaded js file api.js from path js/chess/');
//