// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading blockable.js!');
}
//

// This unit test js file should be placed in abstractChess/unitTests

/** The blockable implementation unit test suite
 * Sequential cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 0
 * @author DoubleX
 * @param {object} hook - The implementation container to be unit tested
 * @param {object} unitTestSwitches - The switch setting the unit test status
 * @param {object} unitTest - The unit test container extending the hook
 * @since v1.0
 * @version v1.0
 */
(function(hook, unitTestSwitches, unitTest) {

    'use strict';

    /**
     * Checks if the unit tests should be run
     * Functional cohesion/Message coupling/Referentially transparent
     * @author DoubleX
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isActive = function() { return unitTestSwitches.blockable; };

    /**
     * Checks if moving the blockable to the destination will be blocked
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {string} blockableId - The id of the blockableId dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest.isBlockedWithMessage = hook.isBlockedWithMessage;
    hook.isBlockedWithMessage = function(blockableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook.isBlockedWithMessage(blockableId, destinationId);
        }
        return unitTest.isBlockedWithMessage(blockableId, destinationId);
    };

    /**
     * Checks if moving the blockable to the destination will be blocked
     * Sequential cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} blockableId - The id of the blockableId dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest.isBlocked = hook.isBlocked;
    hook.isBlocked = function(blockableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook.isBlocked(blockableId, destinationId);
        }
        return unitTest.isBlocked(blockableId, destinationId);
    };

    /**
     * Checks if moving the blockable to the destination will be blocked
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} blockableId - The id of the blockableId dom
     * @param {string} destinationId - The id of the destination dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isBlocked = hook._isBlocked;
    hook._isBlocked = function(blockableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook._isBlocked(blockableId, destinationId);
        }
        return unitTest._isBlocked(blockableId, destinationId);
    };

    /**
     * Returns a function checking whether a blocking rule's violated
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} blockableId - The id of the blockableId dom
     * @param {string} destinationId - The id of the destination dom
     * @return {function} The requested function
     * @since v1.0
     * @version v1.0
     */
    unitTest._isBlockedFunc = hook._isBlockedFunc;
    hook._isBlockedFunc = function(blockableId, destinationId) {
        if (unitTest._isActive()) {
            unitTest.hook._isBlockedFunc(blockableId, destinationId);
        }
        return unitTest._isBlockedFunc(blockableId, destinationId);
    };

    /**
     * Throws an error with the path with the specified start and end dom ids
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} startDomId - The id of the dom as the start of the path
     * @param {string} endDomId - The id of the dom as the end of the path
     * @param {string} message - The specified parts of the error message
     * @since v1.0
     * @throws will throw an error with the specified path info and message
     * @version v1.0
     */
    unitTest._onPathError = hook._onPathError;
    hook._onPathError = function(startDomId, endDomId, message) {
        if (unitTest._isActive()) {
            unitTest.hook._onPathError(startDomId, endDomId, message);
        }
        unitTest._onPathError(startDomId, endDomId, message);
    };

    /**
     * Returns the error message with the specified start and end dom ids
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} startDomId - The id of the dom as the start of the path
     * @param {string} endDomId - The id of the dom as the end of the path
     * @param {string} message - The specified parts of the error message
     * @return {string} The complete error message
     * @since v1.0
     * @version v1.0
     */
    unitTest._pathErrorMessage = hook._pathErrorMessage;
    hook._pathErrorMessage = function(startDomId, endDomId, message) {
        if (unitTest._isActive()) {
            unitTest.hook._pathErrorMessage(startDomId, endDomId, message);
        }
        return unitTest._pathErrorMessage(startDomId, endDomId, message);
    };

    /**
     * Returns the list of dom ids from the specified list of coordinates
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {array} coors - The list of coordinates
     * @return {array} The requested list
     * @since v1.0
     * @version v1.0
     */
    unitTest._pathDomIds = hook._pathDomIds;
    hook._pathDomIds = function(coors) {
        if (unitTest._isActive()) unitTest.hook._pathDomIds(coors);
        return unitTest._pathDomIds(coors);
    };

    /**
     * Checks if anything that can block a blockable's on the specified path
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {array} domIds - The list of id of doms constituting the path
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isPathBlocked = hook._isPathBlocked;
    hook._isPathBlocked = function(domIds) {
        if (unitTest._isActive()) unitTest.hook._isPathBlocked(domIds);
        return unitTest._isPathBlocked(domIds);
    };

    /**
     * Returns the list of ids of all blockables in the specified dom id list
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {array} domIds - The list of id of doms constituting the path
     * @return {array} The requested list
     * @since v1.0
     * @version v1.0
     */
    unitTest._pathBlockables = hook._pathBlockables;
    hook._pathBlockables = function(domIds) {
        if (unitTest._isActive()) unitTest.hook._pathBlockables(domIds);
        return unitTest._pathBlockables(domIds);
    };

    /**
     * Checks if the specified dom's a piece
     * Sequential cohesion/Data coupling
     * @author DoubleX
     * @param {dom} dom - The dom to be checked
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isPiece = hook._isPiece;
    hook._isPiece = function(dom) {
        if (unitTest._isActive()) unitTest.hook._isPiece(dom);
        return unitTest._isPiece(dom);
    };

    /**
     * Generates a message showing that the specified dom's blocking the path
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} domId - The id of the dom blocking the path
     * @return {string} The blocking message
     * @since v1.0
     * @version v1.0
     */
    unitTest._blockMessage = hook._blockMessage;
    hook._blockMessage = function(domId) {
        if (unitTest._isActive()) unitTest.hook._blockMessage(domId);
        return unitTest._blockMessage(domId);
    };

    /**
     * Tests the isBlockedWithMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} blockableId - The id of the blockableId dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.isBlockedWithMessage = function(blockableId, destinationId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('blockable.hook.unitTest.isBlocked');
        console.log('blockableId: ' + blockableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the isBlocked function
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} blockableId - The id of the blockableId dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.isBlocked = function(blockableId, destinationId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('blockable.unitTest.hook.isBlocked');
        console.log('blockableId: ' + blockableId);
        console.log('destinationId: ' + destinationId);
        console.log('isBlocked: ' + unitTest.isBlocked(blockableId, destinationId));
        //
    };

    /**
     * Tests the _isBlocked function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} blockableId - The id of the blockableId dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isBlocked = function(blockableId, destinationId) {
        // The function's too trivial to be unit tested
        console.log('blockable.unitTest.hook._isBlocked');
        console.log('blockableId: ' + blockableId);
        console.log('destinationId: ' + destinationId);
        console.log('isBlocked: ' + unitTest._isBlocked(blockableId, destinationId));
        //
    };

    /**
     * Tests the _isBlockedFunc function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} blockableId - The id of the blockableId dom
     * @param {string} destinationId - The id of the destination dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isBlockedFunc = function(blockableId, destinationId) {
        // The function's too trivial to be unit tested
        console.log('blockable.unitTest.hook._isBlockedFunc');
        console.log('blockableId: ' + blockableId);
        console.log('destinationId: ' + destinationId);
        //
    };

    /**
     * Tests the _onPathError function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} startDomId - The id of the dom as the start of the path
     * @param {string} endDomId - The id of the dom as the end of the path
     * @param {string} message - The specified parts of the error message
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._onPathError = function(startDomId, endDomId, message) {
        // The function's too trivial to be unit tested
        console.log('blockable.unitTest.hook._onPathError');
        console.log('startDomId: ' + startDomId);
        console.log('endDomId: ' + endDomId);
        console.log('message: ' + message);
        //
    };

    /**
     * Tests the _pathErrorMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} startDomId - The id of the dom as the start of the path
     * @param {string} endDomId - The id of the dom as the end of the path
     * @param {string} message - The specified parts of the error message
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._pathErrorMessage = function(startDomId, endDomId, message) {
        // The function's too trivial to be unit tested
        console.log('blockable.unitTest.hook._pathErrorMessage');
        console.log('startDomId: ' + startDomId);
        console.log('endDomId: ' + endDomId);
        console.log('message: ' + message);
        console.log('pathErrorMessage: ' + unitTest._pathErrorMessage(startDomId, endDomId, message));
        //
    };

    /**
     * Tests the _pathDomIds function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {array} coors - The list of coordinates
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._pathDomIds = function(coors) {
        // The function's too trivial to be unit tested
        console.log('blockable.unitTest.hook._pathDomIds');
        console.log('JSON.stringify(coors): ' + JSON.stringify(coors));
        console.log('pathDomIds: ' + unitTest._pathDomIds(coors));
        //
    };

    /**
     * Tests the _isPathBlocked function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {array} domIds - The list of id of doms constituting the path
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isPathBlocked = function(domIds) {
        // The function's too trivial to be unit tested
        console.log('blockable.unitTest.hook._isPathBlocked');
        console.log('JSON.stringify(domIds): ' + JSON.stringify(domIds));
        console.log('isPathBlocked: ' + unitTest._isPathBlocked(domIds));
        //
    };

    /**
     * Tests the _pathBlockables function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {array} domIds - The list of id of doms constituting the path
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._pathBlockables = function(domIds) {
        // The function's too trivial to be unit tested
        console.log('blockable.unitTest.hook._pathBlockables');
        console.log('JSON.stringify(domIds): ' + JSON.stringify(domIds));
        console.log('pathBlockables: ' + unitTest._pathBlockables(domIds));
        //
    };

    /**
     * Tests the _isPiece function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {dom} dom - The dom to be checked
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isPiece = function(dom) {
        // The function's about control flow and shouldn't be unit tested
        console.log('blockable.hook.unitTest._isPiece');
        console.log('JSON.stringify(dom): ' + JSON.stringify(dom));
        console.log('isPiece: ' + unitTest._isPiece(dom));
        //
    };

    /**
     * Tests the _blockMessage function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} domId - The id of the dom blocking the path
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._blockMessage = function(domId) {
        // The function's too trivial to be unit tested
        console.log('blockable.unitTest.hook._blockMessage');
        console.log('domId: ' + domId);
        console.log('blockMessage: ' + unitTest._blockMessage(domId));
        //
    };

})(chess.blockable.hook, chess.unitTestSwitches, chess.blockable.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file blockable.js from path js/abstractChess/unitTests/');
//