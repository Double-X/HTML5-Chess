// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading currentSide.js!');
}
//

// This unit test js file should be placed in abstractChess/unitTests

/** The currentSide implementation unit test suite
 * Functional cohesion/Stamp coupling
 * Number of unit tested functions: 1
 * On GMT 1000 27 Jan 2017
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
    unitTest._isActive = function() { return unitTestSwitches.currentSide; };

    /**
     * Checks if the specified dom's the current side
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} domId - The id of the dom
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest.isCurrentSide = hook.isCurrentSide;
    hook.isCurrentSide = function(domId) {
        if (unitTest._isActive()) unitTest.hook.isCurrentSide(domId);
        return unitTest.isCurrentSide(domId);
    };

    /**
     * Returns the side opposing the specified side
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} side - The specified side
     * @return {string} The opposing side
     * @since v1.0
     * @version v1.0
     */
    unitTest.otherSide = hook.otherSide;
    hook.otherSide = function(side) {
        if (unitTest._isActive()) unitTest.hook.otherSide(side);
        return unitTest.otherSide(side);
    };

    /**
     * Returns the formatted version of the specified coordinates
     * Functional cohesion/Message coupling/Self-Symmetrical
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.switchSide = hook.switchSide;
    hook.switchSide = function() {
        if (unitTest._isActive()) unitTest.hook.switchSide();
        unitTest.switchSide();
    };

    /**
     * Returns the current side
     * Functional cohesion/Message coupling/Referentially transparent
     * @author DoubleX
     * @return {string} The current side
     * @since v1.0
     * @version v1.0
     */
    unitTest._currentSide = hook._currentSide;
    hook._currentSide = function() {
        if (unitTest._isActive()) unitTest.hook._currentSide();
        return unitTest._currentSide();
    };

    /**
     * Toggles the index for getting the current side
     * Functional cohesion/Message coupling/Self-Symmetrical
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest._switchedCurSideIndex = hook._switchedCurSideIndex;
    hook._switchedCurSideIndex = function() {
        if (unitTest._isActive()) unitTest.hook._switchedCurSideIndex();
        return unitTest._switchedCurSideIndex();
    };

    /**
     * Returns the toggled index for getting the specified side
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {number} sideIndex - The index of the specified side
     * @return {string} The toggled side index
     * @since v1.0
     * @version v1.0
     */
    unitTest._switchedSideIndex = hook._switchedSideIndex;
    hook._switchedSideIndex = function(sideIndex) {
        if (unitTest._isActive()) unitTest.hook._switchedSideIndex(sideIndex);
        return unitTest._switchedSideIndex(sideIndex);
    };

    /**
     * Sets the dom showing the current side to show the specified one
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The current side
     * @since v1.0
     * @version v1.0
     */
    unitTest._setCurSideDomContents = hook._setCurSideDomContents;
    hook._setCurSideDomContents = function(side) {
        if (unitTest._isActive()) unitTest.hook._setCurSideDomContents(side);
        unitTest._setCurSideDomContents(side);
    };

    /**
     * Tests the isCurrentSide function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} domId - The id of the dom
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.isCurrentSide = function(domId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('currentSide.unitTest.hook.isCurrentSide');
        console.log('domId: ' + domId);
        console.log('isCurrentSide: ' + unitTest.isCurrentSide(domId));
        //
    };

    /**
     * Tests the otherSide function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The specified side
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.otherSide = function(side) {
        // The function's too trivial to be unit tested
        console.log('currentSide.unitTest.hook.otherSide');
        console.log('side: ' + side);
        console.log('otherSide: ' + unitTest.otherSide(side));
        //
    };

    /**
     * Tests the switchSide function
     * Functional cohesion/Message coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.switchSide = function() {
        // The function's about control flow and shouldn't be unit tested
        console.log('currentSide.unitTest.hook.switchSide');
        //
    };

    /**
     * Tests the _currentSide function
     * Functional cohesion/Message coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._currentSide = function() {
        // The function's too trivial to be unit tested
        console.log('currentSide.unitTest.hook._currentSide currentSide: ' + unitTest._currentSide());
        //
    };

    /**
     * Tests the _switchedCurSideIndex function
     * Functional cohesion/Message coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._switchedCurSideIndex = function() {
        // Ensures the output's the expected one with respect of the given input
        var indexSum = hook._curSideIndex + unitTest._switchedCurSideIndex();
        console.log('currentSide.unitTest.hook._switchedCurSideIndex');
        console.log('hook._curSideIndex: ' + hook._curSideIndex);
        if (indexSum === hook.SIDES.length - 1) {
            console.log('Passed!');
        } else {
            console.log('Failed! Actual value: ' + indexSum);
        }
        //
    };

    /**
     * Tests the _switchedSideIndex function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {number} sideIndex - The index of the specified side
     * @return {string} The toggled side index
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._switchedSideIndex = function(sideIndex) {
        // The function's too trivial to be unit tested
        console.log('currentSide.unitTest.hook._switchedSideIndex');
        console.log('sideIndex: ' + sideIndex);
        console.log('switchedSideIndex: ' + unitTest._switchedSideIndex(sideIndex));
        //
    };

    /**
     * Tests the _setCurSideDomContents function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The current side
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._setCurSideDomContents = function(side) {
        // The function's too trivial to be unit tested
        console.log('currentSide.unitTest.hook._setCurSideDomContents side: ' + side);
        //
    };

})(chess.currentSide.hook, chess.unitTestSwitches, chess.blockable.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file currentSide.js from path js/abstractChess/unitTests/');
//