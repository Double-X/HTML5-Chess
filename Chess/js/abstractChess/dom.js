// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading dom.js!');
}
//

// This implementation js file should be placed in abstractChess

/** The implementation of the behaviors for accessing doms
 * Functional cohesion/Data coupling/No side effects
 * On GMT 1000 27 Jan 2017
 * Number of constants: 3
 * Number of functions: 7
 * Number of variables: 0
 * @author DoubleX
 * @param {object/NonNull} hook - The implementation container as the hook for
 *                                 plugins
 * @since v1.0
 * @version v1.0
 */
(function(hook) {

    'use strict';

    // Marks the regex detecting the dom id part separators
    hook.DOM_ID_PART_SEPARATOR_REGEX = /_+/;
    //
    hook.SPACE = 'Space'; // Marks the piece type name
    hook.TABLE_ID = 'chessboard'; // Marks the id of the table as the board

    /**
     * Returns the id of the table cell dom having the specified coordinate
     * Functional cohesion/Stamp coupling/No side effects
     * @author DoubleX
     * @param {object/NonNull} coordinates - The dom coordinates
     * @return {string} The id of the matching dom
     * @since v1.0
     * @version v1.0
     */
    hook.cellDomId = function(coordinates) {
        var rows = hook.dom(hook.TABLE_ID).rows;
        return rows[coordinates.y - 1].cells[coordinates.x - 1].firstChild.id;
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
    hook.dom = function(domId) { return document.getElementById(domId); };

    /**
     * Checks if the 2 doms are on different sides
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string/NonNull} dom1Id - The id of the 1st dom
     * @param {string/NonNull} dom2Id - The id of the 2nd dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook.isDifferentSide = function(dom1Id, dom2Id) {
        return hook.side(dom1Id) !== hook.side(dom2Id);
    };

    /**
     * Checks if the dom's a piece
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string} domId - The id of the dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    hook.isPiece = function(domId) {
        // A dom having id of the requested form must be either a piece or space
        return hook.type(domId) !== hook.SPACE;
        //
    };

    /**
     * Returns the dom side
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string/NonNull} domId - The id of the dom
     * @return {string} The side of the selectable
     * @since v1.0
     * @version v1.0
     */
    hook.side = function(domId) { return hook._idPart(domId, 0); };

    /**
     * Returns the dom type
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string/NonNull} domId - The id of the dom
     * @return {string} The type of the dom
     * @since v1.0
     * @version v1.0
     */
    hook.type = function(domId) { return hook._idPart(domId, 1); };

    /**
     * Returns the dom id part with the specified index
     * Functional cohesion/Data coupling/Pure function
     * @author DoubleX
     * @param {string/NonNull} domId - The id of the dom
     * @param {number} index - The index of the requested dom id part
     * @return {string} The part of the dom id
     * @since v1.0
     * @version v1.0
     */
    hook._idPart = function(domId, index) {
        return domId.split(hook.DOM_ID_PART_SEPARATOR_REGEX)[index];
    };

})(chess.dom.hook);

// Shows that this js files' loaded from its path
console.log('Loaded js file dom.js from path js/abstractChess/');
//