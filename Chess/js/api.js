// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading api.js!');
}
//

/** The coordinates api list
 * Functional cohesion/Data coupling/Idempotent
 * On GMT 1000 27 Jan 2017
 * Number of apis: 4
 * Number of script calls: 3
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
     * Returns the coordinates of a specified dom
     * Functional cohesion/Data coupling/No side effects
     * Script call
     * @author DoubleX
     * @param {string/NonNull} domId - The id of the dom to return its
     *                                  coordinates
     * @return {object} The dom coordinates
     * @since v1.0
     * @version v1.0
     */
    api.coordinates = function(domId) { return hook.coordinates(domId); };

    /**
     * Returns the coordinates in the string form
     * Functional cohesion/Data coupling/Pure function
     * Script call
     * @author DoubleX
     * @param {number} xCoor - The x coordinate
     * @param {number} yCoor - The y coordinate
     * @return {string} The coordinates in the string form
     * @since v1.0
     * @version v1.0
     */
    api.coordinatesString = function(xCoor, yCoor) {
        return hook.coordinatesString(xCoor, yCoor);
    };

    /**
     * Returns the formatted version of the specified coordinates
     * Functional cohesion/Data coupling/Pure function
     * Script call
     * @author DoubleX
     * @param {object/NonNull} coordinates - The dom's new coordinates
     * @return {string} The formatted version
     * @since v1.0
     * @version v1.0
     */
    api.formattedCoordinates = function(coordinates) {
        return hook.formattedCoordinates(coordinates);
    };

    /**
     * Sets the coordinates of the specified dom to be the specified coordinates
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} domId - The id of the dom to have its
     *                                  coordinates set
     * @param {object} coordinates - The dom's new coordinates
     * @since v1.0
     * @version v1.0
     */
    api.setCoordinates = function(domId, coordinates) {
        hook.setCoordinates(domId, coordinates);
    };

})(chess.coordinates.api, chess.coordinates.hook);

/** The dom api list
 * Functional cohesion/Data coupling/No side effects
 * On GMT 1000 27 Jan 2017
 * Number of apis: 6
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
     * Returns the id of the table cell dom having the specified coordinate
     * Functional cohesion/Data coupling/No side effects
     * @author DoubleX
     * @param {object/NonNull} coordinates - The dom coordinates
     * @return {string} The id of the matching dom
     * @since v1.0
     * @version v1.0
     */
    api.cellDomId = function(coordinates) {
        return hook.cellDomId(coordinates);
    };

    /**
     * Returns the dom with the specified dom id
     * Functional cohesion/Data coupling/No side effects
     * @author DoubleX
     * @param {string/NonNull} domId - The id of the dom
     * @return {dom} The dom having the specified id
     * @since v1.0
     * @version v1.0
     */
    api.dom = function(domId) { return hook.dom(domId); };

    /**
     * Checks if the 2 doms are on different sides
     * Functional cohesion/Data coupling/Pure function
     * Script call
     * @author DoubleX
     * @param {string/NonNull} dom1Id - The id of the 1st dom
     * @param {string/NonNull} dom2Id - The id of the 2nd dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    api.isDifferentSide = function(dom1Id, dom2Id) {
        return hook.isDifferentSide(dom1Id, dom2Id);
    };

    /**
     * Checks if the dom's a piece
     * Functional cohesion/Data coupling/Pure function
     * Script call
     * @author DoubleX
     * @param {string/NonNull} domId - The id of the dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    api.isPiece = function(domId) { return hook.isPiece(domId); };

    /**
     * Returns the dom side
     * Functional cohesion/Data coupling/Pure function
     * Script call
     * @author DoubleX
     * @param {string/NonNull} domId - The id of the dom
     * @return {string} The side of the selectable
     * @since v1.0
     * @version v1.0
     */
    api.side = function(domId) { return hook.side(domId); };

    /**
     * Returns the dom type
     * Functional cohesion/Data coupling/Pure function
     * Script call
     * @author DoubleX
     * @param {string/NonNull} domId - The id of the dom
     * @return {string} The type of the dom
     * @since v1.0
     * @version v1.0
     */
    api.type = function(domId) { return hook.type(domId); };

})(chess.dom.api, chess.dom.hook);

/** The highlightable api list
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
     * Highlights the specified highlightable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} highlightableId - The id of the highlightable
     *                                            dom
     * @since v1.0
     * @version v1.0
     */
    api.highlight = function(highlightableId) {
        hook.highlight(highlightableId);
    };

    /**
     * Unhighlights the specified highlightable
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} highlightableId - The id of the highlightable
     *                                            dom
     * @since v1.0
     * @version v1.0
     */
    api.unhighlight = function(highlightableId) {
        hook.unhighlight(highlightableId);
    };

})(chess.highlightable.api, chess.highlightable.hook);

/** The messageLog api list
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of functions: 3
 * Number of script calls: 3
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
     * Clears all the logged messages having the specified tag
     * Functional cohesion/Data coupling/Idempotent
     * Script call
     * @author DoubleX
     * @param {string} tag - The messages having this tag to be cleared
     * @since v1.0
     * @version v1.0
     */
    api.clearMessage = function(tag) { hook.clearMessage(tag); };

    /**
     * Push the specified message in the log
     * Functional cohesion/Data coupling
     * Script call
     * @author DoubleX
     * @param {string} tag - The message tag to be pushed in the log
     * @param {string} content - The message content to be pushed in the log
     * @since v1.0
     * @version v1.0
     */
    api.pushMessage = function(tag, content) {
        hook.pushMessage(tag, content);
    };

    /**
     * Shows all the logged messages with the specified tag
     * Functional cohesion/Data coupling/Idempotent
     * Script call
     * @author DoubleX
     * @param {string} tag - The messages having this tag to be shown
     * @since v1.0
     * @version v1.0
     */
    api.showMessage = function(tag) { hook.showMessage(tag); };

})(chess.messageLog.api, chess.messageLog.hook);

/** The movableRules api list
 * Functional cohesion/Data coupling
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
     * Checks if moving the movable to the destination will violate any rules
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    api.isAgainstRulesWithMessage = function(movableId, destinationId) {
        return hook.isAgainstRulesWithMessage(movableId, destinationId);
    };

    /**
     * Checks if moving the movable to the destination will violate any rules
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    api.isAgainstRules = function(movableId, destinationId) {
        return hook.isAgainstRules(movableId, destinationId);
    };

})(chess.movableRules.api, chess.movableRules.hook);

/** The blockable api list
 * Sequential cohesion/Data coupling
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
     * Checks if the blockable's blocked from moving to the destination
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} blockableId - The id of the blockable dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    api.isBlockedWithMessage = function(blockableId, destinationId) {
        return hook.isBlockedWithMessage(blockableId, destinationId);
    };

    /**
     * Checks if the blockable's blocked from moving to the destination
     * Sequential cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} blockableId - The id of the blockable dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    api.isBlocked = function(blockableId, destinationId) {
        return hook.isBlocked(blockableId, destinationId);
    };

})(chess.blockable.api, chess.blockable.hook);

/** The checkable api list
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of functions: 4
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
     * Tries to check the opposite side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    api.tryCheckOpposite = function(checkableId) {
        hook.tryCheckOpposite(checkableId);
    };

    /**
     * Removes the specified checkable from the movable and blockable check list
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    api.removeFromCheckLists = function(checkableId) {
        hook.removeFromCheckLists(checkableId);
    };

    /**
     * Updates the status indicating whether a check mate's occurred
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} checkableId - The id of the checkable dom being
     *                                        captured
     * @since v1.0
     * @version v1.0
     */
    api.updateCheckMateStatus = function(checkableId) {
        hook.updateCheckMateStatus(checkableId);
    };

    /**
     * Ensures the movable and blockable check lists are always up to date
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} checkableId - The id of the checkable dom
     * @since v1.0
     * @version v1.0
     */
    api.updateMovableBlockableCheckLists = function(checkableId) {
        hook.updateMovableBlockableCheckLists(checkableId);
    };

})(chess.checkable.api, chess.checkable.hook);

/** The currentSide api list
 * Functional cohesion/Data coupling/Self-Symmetrical
 * On GMT 1000 27 Jan 2017
 * Number of functions: 4
 * Number of script calls: 2
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
     * Checks if the specified dom's the current side
     * Functional cohesion/Data coupling/No side effects
     * Script call
     * @author DoubleX
     * @param {string/NonNull} domId - The id of the dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    api.isCurrentSide = function(domId) { return hook.isCurrentSide(domId); };

    /**
     * Returns the side opposing the specified side
     * Functional cohesion/Message coupling/Pure function
     * @author DoubleX
     * @param {string} side - The specified side
     * @return {string} The opposing side
     * @since v1.0
     * @version v1.0
     */
    api.otherSide = function(side) { return hook.otherSide(side); };

    /**
     * Returns the side opposing the current side
     * Functional cohesion/Message coupling/No side effects
     * Script call
     * @author DoubleX
     * @return {string/NonNull} The opposite side
     * @since v1.0
     * @version v1.0
     */
    api.oppositeSide = function() { return hook.oppositeSide(); };

    /**
     * Returns the formatted version of the specified coordinates
     * Functional cohesion/Message coupling/Self-Symmetrical
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    api.switchSide = function() { return hook.switchSide(); };

})(chess.currentSide.api, chess.currentSide.hook);

/** The movable api list
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of functions: 1
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
     * Tries to move the specified movable to the specified destination
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    api.tryMove = function(movableId, destinationId) {
        hook.tryMove(movableId, destinationId);
    };

})(chess.movable.api, chess.movable.hook);

/** The movableAbilities api list
 * Sequential cohesion/Data coupling
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
     * Checks if it's invalid to move the movable to the destination
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    api.isInvalidWithMessage = function(movableId, destinationId) {
        return hook.isInvalidWithMessage(movableId, destinationId);
    };

    /**
     * Checks if it's invalid to move the movable to the destination
     * Sequential cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    api.isInvalid = function(movableId, destinationId) {
        return hook.isInvalid(movableId, destinationId);
    };

})(chess.movableAbilities.api, chess.movableAbilities.hook);

/** The selectable api list
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of functions: 1
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
     * Toggles the selected status of the specified selectable
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} selectableId - The id of the selectable dom
     * @since v1.0
     * @version v1.0
     */
    api.toggle = function(selectableId) { hook.toggle(selectableId); };

})(chess.selectable.api, chess.selectable.hook);

/** The space api list
 * Functional cohesion/Data coupling
 * On GMT 1000 27 Jan 2017
 * Number of functions: 1
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
     * Turns the specified piece into a new space
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} pieceId - The id of the piece dom
     * @since v1.0
     * @version v1.0
     */
    api.turnPieceToNewSpace = function(pieceId) {
        hook.turnPieceToNewSpace(pieceId);
    };

})(chess.space.api, chess.space.hook);

// Shows that this js files' loaded from its path
console.log('Loaded js file api.js from path js/');
//