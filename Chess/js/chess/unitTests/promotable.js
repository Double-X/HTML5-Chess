// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading promotable.js!');
}
//

// This unit test js file should be placed in chess/unitTests

/** The promotable implementation unit test suite
 * Sequential cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 2
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
    unitTest._isActive = function() { return unitTestSwitches.promotable; };

    /**
     * Tries to promote the specified promotable
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} promotableId - The id of the promotable to be promoted
     * @since v1.0
     * @version v1.0
     */
    unitTest.tryPromote = hook.tryPromote;
    hook.tryPromote = function(promotableId) {
        if (unitTest._isActive()) unitTest.hook.tryPromote(promotableId);
        unitTest.tryPromote(promotableId);
    };

    /**
     * Checks if the specified promotable is indeed a promotable
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} promotableId - The id of the promotable to be promoted
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isPromotable = hook._isPromotable;
    hook._isPromotable = function(promotableId) {
        if (unitTest._isActive()) unitTest.hook._isPromotable(promotableId);
        return unitTest._isPromotable(promotableId);
    };

    /**
     * Checks if the specified promotable has meet the conditions to promote
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} promotableId - The id of the promotable to be promoted
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._canPromote = hook._canPromote;
    hook._canPromote = function(promotableId) {
        if (unitTest._isActive()) unitTest.hook._canPromote(promotableId);
        return unitTest._canPromote(promotableId);
    };

    /**
     * Promotes the specified promotable
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} promotableId - The id of the promotable to be promoted
     * @since v1.0
     * @version v1.0
     */
    unitTest._promote = hook._promote;
    hook._promote = function(promotableId) {
        if (unitTest._isActive()) unitTest.hook._promote(promotableId);
        unitTest._promote(promotableId);
    };

    /**
     * Returns the type chosen to promote the promotable to be promoted
     * Functional cohesion/Message coupling
     * @author DoubleX
     * @return {string} - The requested type
     * @since v1.0
     * @version v1.0
     */
    unitTest._promotionType = hook._promotionType;
    hook._promotionType = function() {
        if (unitTest._isActive()) unitTest.hook._promotionType();
        return unitTest._promotionType();
    };

    /**
     * Checks if the specified new type is a choice for promoting promotables
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} newType - The new type for the promotable being promoted
     * @return {boolean} The check result
     * @since v1.0
     * @version v1.0
     */
    unitTest._isPromotableNewType = hook._isPromotableNewType;
    hook._isPromotableNewType = function(newType) {
        if (unitTest._isActive()) unitTest.hook._isPromotableNewType(newType);
        return unitTest._isPromotableNewType(newType);
    };

    /**
     * Be the hook to be called right after promoting the specified promotable
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {dom} promotable - The promotable to be promoted
     * @param {string} side - The side of the promotable
     * @param {string} newType - The new type of the promotable
     * @since v1.0
     * @version v1.0
     */
    unitTest._onPromote = hook._onPromote;
    hook._onPromote = function(promotable, side, newType) {
        if (unitTest._isActive()) {
            unitTest.hook._onPromote(promotable, side, newType);
        }
        unitTest._onPromote(promotable, side, newType);
    };

    /**
     * Updates the maximum promotable index of the specified sidetype
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} sideType - The side and new type of the promotable
     * @since v1.0
     * @version v1.0
     */
    unitTest._updateMaxPromotableIndex = hook._updateMaxPromotableIndex;
    hook._updateMaxPromotableIndex = function(sideType) {
        if (unitTest._isActive()) {
            unitTest.hook._updateMaxPromotableIndex(sideType);
        }
        unitTest._updateMaxPromotableIndex(sideType);
    };

    /**
     * Turns the specified promotable to a new piece with the specified sidetype
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {dom} promotable - The promotable to be promoted
     * @param {string} sideType - The side and new type of the promotable
     * @since v1.0
     * @version v1.0
     */
    unitTest._turnPromotableToNewPiece = hook._turnPromotableToNewPiece;
    hook._turnPromotableToNewPiece = function(promotable, sideType) {
        if (unitTest._isActive()) {
            unitTest.hook._turnPromotableToNewPiece(promotable, sideType);
        }
        unitTest._turnPromotableToNewPiece(promotable, sideType);
    };

    /**
     * Testes the tryPromote function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} promotableId - The id of the promotable to be promoted
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.tryPromote = function(promotableId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('promotable.unitTest.hook.tryPromote promotableId: ' + promotableId);
        //
    };

    /**
     * Testes the _isPromotable function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} promotableId - The id of the promotable to be promoted
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isPromotable = function(promotableId) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestIsPromotable1 = unitTest._isPromotable('White_Pawn_1');
        var unitTestIsPromotable2 = unitTest._isPromotable('White_Pawn_2');
        var unitTestIsPromotable3 = unitTest._isPromotable('Black_Pawn_1');
        var unitTestIsPromotable4 = unitTest._isPromotable('White_Rook_1');
        var unitTestIsPromotable5 = unitTest._isPromotable('White_Horse_1');
        var unitTestIsPromotable6 = unitTest._isPromotable('White_Bishop_1');
        var unitTestIsPromotable7 = unitTest._isPromotable('White_Queen_1');
        var unitTestIsPromotable8 = unitTest._isPromotable('White_King');
        console.log('promotable.unitTest.hook._isPromotable');
        console.log('promotableId: ' + promotableId);
        console.log('isPromotable: ' + unitTest._isPromotable(promotableId));
        if (unitTestIsPromotable1) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsPromotable1);
        }
        if (unitTestIsPromotable2) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsPromotable2);
        }
        if (unitTestIsPromotable3) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsPromotable3);
        }
        if (unitTestIsPromotable4) {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsPromotable4);
        } else {
            console.log('Passed the 4th test!');
        }
        if (unitTestIsPromotable5) {
            console.log('Failed the 5th test! Actual value: ' + unitTestIsPromotable5);
        } else {
            console.log('Passed the 5th test!');
        }
        if (unitTestIsPromotable6) {
            console.log('Failed the 6th test! Actual value: ' + unitTestIsPromotable6);
        } else {
            console.log('Passed the 6th test!');
        }
        if (unitTestIsPromotable7) {
            console.log('Failed the 7th test! Actual value: ' + unitTestIsPromotable7);
        } else {
            console.log('Passed the 7th test!');
        }
        if (unitTestIsPromotable8) {
            console.log('Failed the 8th test! Actual value: ' + unitTestIsPromotable8);
        } else {
            console.log('Passed the 8th test!');
        }
        //
    };

    /**
     * Testes the _canPromote function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} promotableId - The id of the promotable to be promoted
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._canPromote = function(promotableId) {
        // The function's too trivial to be unit tested
        console.log('promotable.unitTest.hook._canPromote promotableId: ' + promotableId);
        //
    };

    /**
     * Testes the _promote function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} promotableId - The id of the promotable to be promoted
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._promote = function(promotableId) {
        // The function's too trivial to be unit tested
        console.log('promotable.unitTest.hook._promote promotableId: ' + promotableId);
        //
    };

    /**
     * Testes the _promotionType function
     * Functional cohesion/Message coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._promotionType = function() {
        // The function's about control flow and shouldn't be unit tested
        console.log('promotable.unitTest.hook._promotionType');
        //
    };

    /**
     * Testes the _isPromotableNewType function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} newType - The new type for the promotable being promoted
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._isPromotableNewType = function(newType) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestIsPromotableNewType1 = unitTest._isPromotableNewType('Rook');
        var unitTestIsPromotableNewType2 = unitTest._isPromotableNewType('Horse');
        var unitTestIsPromotableNewType3 = unitTest._isPromotableNewType('Bishop');
        var unitTestIsPromotableNewType4 = unitTest._isPromotableNewType('Queen');
        var unitTestIsPromotableNewType5 = unitTest._isPromotableNewType('King');
        var unitTestIsPromotableNewType6 = unitTest._isPromotableNewType('Pawn');
        console.log('promotable.unitTest.hook._isPromotableNewType');
        console.log('newType: ' + newType);
        console.log('_isPromotableNewType: ' + unitTest._isPromotableNewType(newType));
        if (unitTestIsPromotableNewType1) {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestIsPromotableNewType1);
        }
        if (unitTestIsPromotableNewType2) {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestIsPromotableNewType2);
        }
        if (unitTestIsPromotableNewType3) {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + unitTestIsPromotableNewType3);
        }
        if (unitTestIsPromotableNewType4) {
            console.log('Passed the 4th test!');
        } else {
            console.log('Failed the 4th test! Actual value: ' + unitTestIsPromotableNewType4);
        }
        if (unitTestIsPromotableNewType5) {
            console.log('Failed the 5th test! Actual value: ' + unitTestIsPromotableNewType5);
        } else {
            console.log('Passed the 5th test!');
        }
        if (unitTestIsPromotableNewType6) {
            console.log('Failed the 6th test! Actual value: ' + unitTestIsPromotableNewType6);
        } else {
            console.log('Passed the 6th test!');
        }
        //
    };

    /**
     * Testes the _onPromote function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {dom} promotable - The promotable to be promoted
     * @param {string} side - The side of the promotable
     * @param {string} newType - The new type of the promotable
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._onPromote = function(promotable, side, newType) {
        // The function's about control flow and shouldn't be unit tested
        console.log('promotable.unitTest.hook._onPromote');
        console.log('promotable: ' + promotable);
        console.log('side: ' + side);
        console.log('newType: ' + newType);
        //
    };

    /**
     * Testes the _updateMaxPromotableIndex function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} sideType - The side and new type of the promotable
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._updateMaxPromotableIndex = function(sideType) {
        // The function's too trivial to be unit tested
        console.log('promotable.unitTest.hook._updateMaxPromotableIndex sideType: ' + sideType);
        //
    };

    /**
     * Testes the _turnPromotableToNewPiece function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {dom} promotable - The promotable to be promoted
     * @param {string} sideType - The side and new type of the promotable
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._turnPromotableToNewPiece = function(promotable, sideType) {
        // The function's too trivial to be unit tested
        console.log('promotable.unitTest.hook._turnPromotableToNewPiece');
        console.log('promotable: ' + promotable);
        console.log('sideType: ' + sideType);
        //
    };

})(chess.promotable.hook, chess.unitTestSwitches, chess.promotable.unitTest);

// Shows that this js files' loaded from its path
console.log('Loaded js file promotable.js from path js/chess/unitTests/');
//