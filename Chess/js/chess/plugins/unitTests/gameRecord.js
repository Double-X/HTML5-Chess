// This's a Chess plugin and must be put in the unitTests folder

/** The gameRecord plugin implementation unit test suite
 * Functional cohesion/Stamp coupling
 * On GMT 1000 27 Jan 2017
 * Number of unit tested functions: 1
 * @author DoubleX
 * @param {object} hook - The implementation container to be unit tested
 * @param {object} unitTest - The unit test container extending the hook
 * @since v1.0
 * @version v1.0
 */
(function(hook, unitTest) {

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
    unitTest.recordPromotion = hook.recordPromotion;
    hook.recordPromotion = function(side, newType) {
        if (unitTest._isActive()) unitTest.hook.recordPromotion(side, newType);
        unitTest.recordPromotion(side, newType);
    };

    /**
     * Returns a function returning the formatted current movement record
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its move recorded
     * @return {function} The requested function
     * @since v1.0
     * @version v1.0
     */
    unitTest._formattedCurrentMoveFunc = hook._formattedCurrentMoveFunc;
    hook._formattedCurrentMoveFunc = function(pieceId) {
        if (unitTest._isActive()) {
            unitTest.hook._formattedCurrentMoveFunc(pieceId);
        }
        return unitTest._formattedCurrentMoveFunc(pieceId);
    };

    /**
     * Returns the formatted record of the current move by the specified piece
     * Functional cohesion/Data coupling/Referentially transparent
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its move recorded
     * @param {object} oldLocation - The piece old location
     * @param {object} newLocation - The piece new location
     * @return {string} The formatted piece movement record
     * @since v1.0
     * @version v1.0
     */
    unitTest._formattedCurrentMove = hook._formattedCurrentMove;
    hook._formattedCurrentMove = function(pieceId, oldLocation, newLocation) {
        if (unitTest._isActive()) {
            unitTest.hook._formattedCurrentMove(pieceId, oldLocation, newLocation);
        }
        return unitTest._formattedCurrentMove(pieceId, oldLocation, newLocation);
    };

    /**
     * Returns the formatted record of the specified castling
     * Functional cohesion/Message coupling/Referentially transparent
     * @author DoubleX
     * @return {string} The formatted piece movement record
     * @since v1.0
     * @version v1.0
     */
    unitTest._formattedCastlingMove = hook._formattedCastlingMove;
    hook._formattedCastlingMove = function() {
        if (unitTest._isActive()) unitTest.hook._formattedCastlingMove();
        return unitTest._formattedCastlingMove();
    };

    /**
     * Returns the formatted record of the move with the specified locations
     * Functional cohesion/Stamp coupling/Referentially transparent
     * @author DoubleX
     * @param {object} oldLocation - The piece old location
     * @param {object} newLocation - The piece new location
     * @return {string} The formatted piece movement record
     * @since v1.0
     * @version v1.0
     */
    unitTest._formattedNormalMove = hook._formattedNormalMove;
    hook._formattedNormalMove = function(oldLocation, newLocation) {
        if (unitTest._isActive()) {
            unitTest.hook._formattedNormalMove(oldLocation, newLocation);
        }
        return unitTest._formattedNormalMove(oldLocation, newLocation);
    };

    /**
     * Removes the last movement record of the specified side
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side of the promotable to be reocrded
     * @since v1.0
     * @version v1.0
     */
    unitTest._removeLastMoveRecord = hook._removeLastMoveRecord;
    hook._removeLastMoveRecord = function(side) {
        if (unitTest._isActive()) unitTest.hook._removeLastMoveRecord(side);
        unitTest._removeLastMoveRecord(side);
    };

    /**
     * Adds the promotion movement record with the specified side and new type
     * Functional cohesion/Data coupling
     * @author DoubleX
     * @param {string} side - The side of the promotable to be reocrded
     * @param {string} newType - The new type of the promotable to be reocrded
     * @since v1.0
     * @version v1.0
     */
    unitTest._addPromotionMoveRecord = hook._addPromotionMoveRecord;
    hook._addPromotionMoveRecord = function(side, newType) {
        if (unitTest._isActive()) {
            unitTest.hook._addPromotionMoveRecord(side, newType);
        }
        unitTest._addPromotionMoveRecord(side, newType);
    };

    /**
     * Records the current promotion of the specified side and new type
     * Functional cohesion/Data coupling/Idempotent
     * @author DoubleX
     * @param {string} side - The side of the promotable to be reocrded
     * @param {string} newType - The new type of the promotable to be reocrded
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook.recordPromotion = function(side, newType) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.gameRecord.unitTest.hook.recordPromotion');
        console.log('side: ' + side);
        console.log('newType: ' + newType);
        //
    };

    /**
     * Tests the _formattedCurrentMoveFunc function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its move recorded
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._formattedCurrentMoveFunc = function(pieceId) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.gameRecord.unitTest.hook._formattedCurrentMoveFunc pieceId: ' + pieceId);
        //
    };

    /**
     * Tests the _formattedCurrentMove function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} pieceId - The id of the piece to have its move recorded
     * @param {object} oldLocation - The piece old location
     * @param {object} newLocation - The piece new location
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._formattedCurrentMove = function(pieceId, oldLocation, newLocation) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.gameRecord.unitTest.hook._formattedCurrentMove');
        console.log('pieceId: ' + pieceId);
        console.log('oldLocation: ' + oldLocation);
        console.log('newLocation: ' + newLocation);
        console.log('formattedCurrentMove: ' + unitTest._formattedCurrentMove(pieceId, oldLocation, newLocation));
        //
    };

    /**
     * Tests the _formattedCastlingMove function
     * Functional cohesion/Message coupling/No-op
     * @author DoubleX
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._formattedCastlingMove = function() {
        // The function's too trivial to be unit tested
        console.log('plugins.gameRecord.unitTest.hook._formattedCastlingMove formattedCastlingMove: ' + unitTest._formattedCastlingMove());
        //
    };

    /**
     * Tests the _formattedNormalMove function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {object} oldLocation - The piece old location
     * @param {object} newLocation - The piece new location
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._formattedNormalMove = function(oldLocation, newLocation) {
        // Ensures the output's the expected one with respect of the given input
        var unitTestFormattedNormalMove1 = unitTest._formattedNormalMove({ x: 1, y: 1 }, { x: 2, y: 2 });
        var unitTestFormattedNormalMove2 = unitTest._formattedNormalMove({ x: 4, y: 4 }, { x: 6, y: 6 });
        var unitTestFormattedNormalMove3 = unitTest._formattedNormalMove({ x: 5, y: 5 }, { x: 3, y: 3 });
        var unitTestFormattedNormalMove4 = unitTest._formattedNormalMove({ x: 8, y: 7 }, { x: 7, y: 8 });
        console.log('plugins.gameRecord.unitTest.hook._formattedNormalMove');
        console.log('JSON.stringify(oldLocation): ' + JSON.stringify(oldLocation));
        console.log('JSON.stringify(newLocation): ' + JSON.stringify(newLocation));
        console.log('formattedNormalMove: ' + unitTest._formattedNormalMove(oldLocation, newLocation));
        if (unitTestFormattedNormalMove1 === 'a1b2') {
            console.log('Passed the 1st test!');
        } else {
            console.log('Failed the 1st test! Actual value: ' + unitTestFormattedNormalMove1);
        }
        if (unitTestFormattedNormalMove2 === 'd4f6') {
            console.log('Passed the 2nd test!');
        } else {
            console.log('Failed the 2nd test! Actual value: ' + unitTestFormattedNormalMove2);
        }
        if (unitTestFormattedNormalMove3 === 'e5c3') {
            console.log('Passed the 3rd test!');
        } else {
            console.log('Failed the 3rd test! Actual value: ' + unitTestFormattedNormalMove3);
        }
        if (unitTestFormattedNormalMove4 === 'h7g8') {
            console.log('Passed the 4th test!');
        } else {
            console.log('Failed the 4th test! Actual value: ' + unitTestFormattedNormalMove4);
        }
        //
    };

    /**
     * Tests the _removeLastMoveRecord function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side of the promotable to be reocrded
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._removeLastMoveRecord = function(side) {
        // The function's too trivial to be unit tested
        console.log('plugins.gameRecord.unitTest.hook._removeLastMoveRecord side: ' + side);
        //
    };

    /**
     * Tests the _addPromotionMoveRecord function
     * Functional cohesion/Data coupling/No-op
     * @author DoubleX
     * @param {string} side - The side of the promotable to be reocrded
     * @param {string} newType - The new type of the promotable to be reocrded
     * @since v1.0
     * @version v1.0
     */
    unitTest.hook._addPromotionMoveRecord = function(side, newType) {
        // The function's about control flow and shouldn't be unit tested
        console.log('plugins.gameRecord.unitTest.hook._formattedCurrentMove');
        console.log('side: ' + side);
        console.log('newType: ' + newType);
        //
    };

})(chess.plugins.abstractChess.gameRecord.hook, 
        chess.plugins.abstractChess.gameRecord.unitTest);