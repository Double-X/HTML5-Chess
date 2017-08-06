// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading movable.js!');
}
//

// This implementation js file should be placed in abstractChess

/** The implementation of the behaviors for moving movables
 * Functional cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of constants: 4
 * Number of functions: 7
 * Number of variables: 0
 * @author DoubleX
 * @param {object/NonNull} hook - The implementation container as the hook for
 *                                 plugins
 * @param {object/NonNull} checkableAPI - The checkable.api as a dependency
 * @param {object/NonNull} coordinatesAPI - The coordinates.api as a dependency
 * @param {object/NonNull} currentSideAPI - The currentSide.api as a dependency
 * @param {object/NonNull} domAPI - The dom.api as a dependency
 * @param {object/NonNull} movableRulesAPI - The movableRules.api as a
 *                                            dependency
 * @param {object/NonNull} spaceAPI - The space.api as a dependency
 * @since v1.0
 * @version v1.0
 */
(function(hook, checkableAPI, coordinatesAPI, currentSideAPI, domAPI, 
        movableRulesAPI, spaceAPI) {

    'use strict';

    hook.SWAP_BUFFER_ID = 'backup'; // Marks the id of the place to buffer swap
    // Marks the starting and ending part of the buffer cell contents
    hook.SWAP_BUFFER_PRE = '<button id="backup" value=';
    hook.SWAP_BUFFER_POST = ' contenteditable=false></button>';
    //
    hook.TABLE_ID = 'chessboard'; // Marks the id of the table as the board

    /**
     * Tries to move the specified movable to the specified destination
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    hook.tryMove = function(movableId, destinationId) {
        var isAgainstRules = movableRulesAPI.isAgainstRulesWithMessage;
        if (isAgainstRules(movableId, destinationId)) return;
        hook._move(movableId, destinationId);
    };

    /**
     * Moves the specified movable dom to the specified destination dom
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    hook._move = function(movableId, destinationId) {
        hook._swap(movableId, destinationId);
        if (domAPI.isPiece(destinationId)) hook._capture(destinationId);
        hook._onPostMove(movableId);
    };

    /**
     * Swaps the specified movable dom with the specified destination dom
     * Functional cohesion/Data coupling/Self-symmetrical
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @param {string/NonNull} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    hook._swap = function(movableId, destinationId) {
        // Uses the buffer location to ensure the swapping correctness
        var curLocation = coordinatesAPI.coordinates(movableId);
        var destination = coordinatesAPI.coordinates(destinationId);
        var bufferLocation = coordinatesAPI.coordinates(hook.SWAP_BUFFER_ID);
        hook._moveCell(destinationId, destination, bufferLocation);
        hook._moveCell(movableId, curLocation, destination);
        hook._moveCell(destinationId, bufferLocation, curLocation);
        //
    };

    /**
     * Moves the cell having the specified movable to the specified destination
     * Functional cohesion/Stamp coupling/Idempotent
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @param {object/NonNull} curLocation - The current movable coordinates
     * @param {object/NonNull} destination - The destination coordinates
     * @since v1.0
     * @version v1.0
     */
    hook._moveCell = function(movableId, curLocation, destination) {
        // Sets the destination to have the movable and clears the curLocation
        var table = domAPI.dom(hook.TABLE_ID), movable = domAPI.dom(movableId);
        var destCell = table.rows[destination.y - 1].cells[destination.x - 1];
        // This ordering must be kept in order to ensure movable data integrity
        coordinatesAPI.setCoordinates(movableId, destination);
        destCell.innerHTML = movable.parentNode.innerHTML;
        //
        var curCell = table.rows[curLocation.y - 1].cells[curLocation.x - 1];
        curCell.innerHTML = hook._swapBufferCellInnerHtml(curLocation);
        //
    };

    /**
     * Generates the swap buffer cell contents using the specified location
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {object} curLocation - The current movable coordinates
     * @return {string} The swap buffer cell inner html
     * @since v1.0
     * @version v1.0
     */
    hook._swapBufferCellInnerHtml = function(curLocation) {
        var value = JSON.stringify(curLocation);
        return hook.SWAP_BUFFER_PRE + value + hook.SWAP_BUFFER_POST;
    };

    /**
     * Captures the piece with the specified id
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} pieceId - The id of the piece dom
     * @since v1.0
     * @version v1.0
     */
    hook._capture = function(pieceId) {
        spaceAPI.turnPieceToNewSpace(pieceId);
        checkableAPI.removeFromCheckLists(pieceId);
        checkableAPI.updateCheckMateStatus(pieceId);
    };

    /**
     * Be the hook to be triggered right after the specified movable's moved
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string/NonNull} movableId - The id of the movable dom
     * @since v1.0
     * @version v1.0
     */
    hook._onPostMove = function(movableId) {
        // This ordering must be kept or the checkable apis will do the opposite
        checkableAPI.updateMovableBlockableCheckLists(movableId);
        checkableAPI.tryCheckOpposite(movableId);
        currentSideAPI.switchSide();
        //
    };

})(chess.movable.hook, chess.checkable.api, chess.coordinates.api, 
        chess.currentSide.api, chess.dom.api, chess.movableRules.api, 
        chess.space.api);

// Shows that this js files' loaded from its path
console.log('Loaded js file movable.js from path js/abstractChess/');
//