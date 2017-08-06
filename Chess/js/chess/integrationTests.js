// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading integrationTest.js!');
}
//

// This unit test js file should be placed in chess/unitTests

(function(integrationTests) {

    'use strict';

    function noOp(arg) { return arg; }; // Just a placeholder
    var cellDomId = chess.dom.api.cellDomId;

    // The mapping from the intergration test name to its test input sequence
    integrationTests.chess = {
        // It uses coordinates and can only be run at the starting game state
        coordinatesCoreOnly: [
            // 1. e2e4
            { fn: cellDomId, arg: { x: 5, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 4 }, delay: 1000 },
            //
            // e7e5
            { fn: cellDomId, arg: { x: 5, y: 7 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 5 }, delay: 1000 },
            //
            // 2. c2c4
            { fn: cellDomId, arg: { x: 3, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 3, y: 4 }, delay: 1000 },
            //
            // c7c5
            { fn: cellDomId, arg: { x: 3, y: 7 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 3, y: 5 }, delay: 1000 },
            //
            // 3. d2d3
            { fn: cellDomId, arg: { x: 4, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 4, y: 3 }, delay: 1000 },
            //
            // d7d6
            { fn: cellDomId, arg: { x: 4, y: 7 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 4, y: 6 }, delay: 1000 },
            //
            // 4. b2b3
            { fn: cellDomId, arg: { x: 2, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 2, y: 3 }, delay: 1000 },
            //
            // b7b6
            { fn: cellDomId, arg: { x: 2, y: 7 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 2, y: 6 }, delay: 1000 },
            //
            // 5. f2f3
            { fn: cellDomId, arg: { x: 6, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 6, y: 3 }, delay: 1000 },
            //
            // f7f6
            { fn: cellDomId, arg: { x: 6, y: 7 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 6, y: 6 }, delay: 1000 },
            //
            // 6. g2g4
            { fn: cellDomId, arg: { x: 7, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 7, y: 4 }, delay: 1000 },
            //
            // g7g5
            { fn: cellDomId, arg: { x: 7, y: 7 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 7, y: 5 }, delay: 1000 },
            //
            // 7. a2a4
            { fn: cellDomId, arg: { x: 1, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 1, y: 4 }, delay: 1000 },
            //
            // a7a5
            { fn: cellDomId, arg: { x: 1, y: 7 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 1, y: 5 }, delay: 1000 },
            //
            // 8. h2h3
            { fn: cellDomId, arg: { x: 8, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 8, y: 3 }, delay: 1000 },
            //
            // h7h6
            { fn: cellDomId, arg: { x: 8, y: 7 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 8, y: 6 }, delay: 1000 },
            //
            // 9. b1c3
            { fn: cellDomId, arg: { x: 2, y: 1 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 3, y: 3 }, delay: 1000 },
            //
            // b8c6
            { fn: cellDomId, arg: { x: 2, y: 8 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 3, y: 6 }, delay: 1000 },
            //
            // 10. c3d5
            { fn: cellDomId, arg: { x: 3, y: 3 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 4, y: 5 }, delay: 1000 },
            //
            // c6d4
            { fn: cellDomId, arg: { x: 3, y: 6 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 4, y: 4 }, delay: 1000 },
            //
            // 11. g1e2
            { fn: cellDomId, arg: { x: 7, y: 1 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 2 }, delay: 1000 },
            //
            // g8e7
            { fn: cellDomId, arg: { x: 7, y: 8 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 7 }, delay: 1000 },
            //
            // 12. e2g3
            { fn: cellDomId, arg: { x: 5, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 7, y: 3 }, delay: 1000 },
            //
            // e7g6
            { fn: cellDomId, arg: { x: 5, y: 7 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 7, y: 6 }, delay: 1000 },
            //
            // 13. g3f5
            { fn: cellDomId, arg: { x: 7, y: 3 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 6, y: 5 }, delay: 1000 },
            //
            // g6f4
            { fn: cellDomId, arg: { x: 7, y: 6 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 6, y: 4 }, delay: 1000 },
            //
            // 14. c1e3
            { fn: cellDomId, arg: { x: 3, y: 1 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 3 }, delay: 1000 },
            //
            // c8e6
            { fn: cellDomId, arg: { x: 3, y: 8 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 6 }, delay: 1000 },
            //
            // 15. h1g1
            { fn: cellDomId, arg: { x: 8, y: 1 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 7, y: 1 }, delay: 1000 },
            //
            // h8g8
            { fn: cellDomId, arg: { x: 8, y: 8 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 7, y: 8 }, delay: 1000 },
            //
            // 16. a1c1
            { fn: cellDomId, arg: { x: 1, y: 1 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 3, y: 1 }, delay: 1000 },
            //
            // a8c8
            { fn: cellDomId, arg: { x: 1, y: 8 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 3, y: 8 }, delay: 1000 }
            //
        ],
        //
        // It uses selectable ids and can only be run at the starting game state
        selectableIdCoreOnly: [
            // 1. e2e4
            { fn: noOp, arg: 'White_Pawn_5', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_13', delay: 1000 },
            //
            // e7e5
            { fn: noOp, arg: 'Black_Pawn_5', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_21', delay: 1000 },
            //
            // 2. b2b4
            { fn: noOp, arg: 'White_Pawn_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_10', delay: 1000 },
            //
            // b7b5
            { fn: noOp, arg: 'Black_Pawn_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_18', delay: 1000 },
            //
            // 3. c1a3
            { fn: noOp, arg: 'White_Bishop_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_1', delay: 1000 },
            //
            // c8a6
            { fn: noOp, arg: 'Black_Bishop_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_25', delay: 1000 },
            //
            // 4. b1c3
            { fn: noOp, arg: 'White_Horse_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_3', delay: 1000 },
            //
            // b8c6
            { fn: noOp, arg: 'Black_Horse_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_27', delay: 1000 },
            //
            // 5. d1h5
            { fn: noOp, arg: 'White_Queen_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_24', delay: 1000 },
            //
            // d8f6
            { fn: noOp, arg: 'Black_Queen_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_30', delay: 1000 },
            //
            // 6. 0-0-0
            { fn: noOp, arg: 'White_King', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_1', delay: 1000 },
            //
            // 0-0-0
            { fn: noOp, arg: 'Black_King', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_25', delay: 1000 },
            //
            // 7. h2h4
            { fn: noOp, arg: 'White_Pawn_8', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_16', delay: 1000 },
            //
            // g7g5
            { fn: noOp, arg: 'Black_Pawn_7', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_23', delay: 1000 },
            //
            // 8. h5e2
            { fn: noOp, arg: 'White_Queen_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_13', delay: 1000 },
            //
            // g5g4
            { fn: noOp, arg: 'Black_Pawn_7', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_15', delay: 1000 },
            //
            // 9. f2f4
            { fn: noOp, arg: 'White_Pawn_6', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_14', delay: 1000 },
            //
            // g4f3
            { fn: noOp, arg: 'Black_Pawn_7', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_6', delay: 1000 },
            //
            // 10. e2d3
            { fn: noOp, arg: 'White_Queen_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_4', delay: 1000 },
            //
            // f3f2
            { fn: noOp, arg: 'Black_Pawn_7', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_14', delay: 1000 },
            //
            // 11. f1e2
            { fn: noOp, arg: 'White_Bishop_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_4', delay: 1000 },
            //
            // f2f1
            { fn: noOp, arg: 'Black_Pawn_7', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_4', delay: 1000 }
            //
        ]
        //
    };
    //

})(chess.integrationTests);

// Shows that this js files' loaded from its path
console.log('Loaded js file integrationTest.js from path js/chess/');
//