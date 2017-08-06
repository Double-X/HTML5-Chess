// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading integrationTest.js!');
}
//

// This unit test js file should be placed in chineseChess/unitTests

(function(integrationTests) {

    'use strict';

    // List of functions taking exactly 1 argument mapped from fn in messages
    function noOp(arg) { return arg; }; // Just a placeholder
    var cellDomId = chess.dom.api.cellDomId;
    //

    // The mapping from the intergration test name to its test input sequence
    integrationTests.chineseChess = {
        // It uses coordinates and can only be run at the starting game state
        coordinatesCoreOnly: [
            // 1. ���G����
            { fn: cellDomId, arg: { x: 2, y: 3 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 3 }, delay: 1000 },
            //
            // ��8��5
            { fn: cellDomId, arg: { x: 2, y: 8 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 8 }, delay: 1000 },
            //
            // 2. ?�@�i�@
            { fn: cellDomId, arg: { x: 1, y: 1 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 1, y: 2 }, delay: 1000 },
            //
            // ��8�i7
            { fn: cellDomId, arg: { x: 2, y: 10 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 3, y: 8 }, delay: 1000 },
            //
            // 3. ?�@����
            { fn: cellDomId, arg: { x: 1, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 6, y: 2 }, delay: 1000 },
            //
            // ��9��8
            { fn: cellDomId, arg: { x: 1, y: 10 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 2, y: 10 }, delay: 1000 },
            //
            // 4. �X�G�i�T
            { fn: cellDomId, arg: { x: 2, y: 1 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 3, y: 3 }, delay: 1000 },
            //
            // ��8�i6
            { fn: cellDomId, arg: { x: 2, y: 10 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 2, y: 4 }, delay: 1000 },
            //
            // 5. ?���i�C
            { fn: cellDomId, arg: { x: 6, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 6, y: 9 }, delay: 1000 },
            //
            // ��2�i1
            { fn: cellDomId, arg: { x: 8, y: 10 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 9, y: 8 }, delay: 1000 },
            //
            // 6. ?�E�i�@
            { fn: cellDomId, arg: { x: 9, y: 1 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 9, y: 2 }, delay: 1000 },
            //
            // ��2�i7
            { fn: cellDomId, arg: { x: 8, y: 8 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 8, y: 1 }, delay: 1000 },
            //
            // 7. ���K�i��
            { fn: cellDomId, arg: { x: 8, y: 3 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 8, y: 8 }, delay: 1000 },
            //
            // ��7�h8
            { fn: cellDomId, arg: { x: 3, y: 8 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 2, y: 10 }, delay: 1000 },
            //
            // 8. �����i�|
            { fn: cellDomId, arg: { x: 5, y: 3 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 7 }, delay: 1000 },
            //
            // �h6�i5
            { fn: cellDomId, arg: { x: 4, y: 10 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 9 }, delay: 1000 },
            //
            // 9. ?�E����
            { fn: cellDomId, arg: { x: 9, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 6, y: 2 }, delay: 1000 },
            //
            // �N5��6
            { fn: cellDomId, arg: { x: 5, y: 10 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 4, y: 10 }, delay: 1000 },
            //
            // 10. �e?�i�@
            { fn: cellDomId, arg: { x: 6, y: 9 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 6, y: 10 }, delay: 1000 },
            //
            // �h5�h4
            { fn: cellDomId, arg: { x: 5, y: 9 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 6, y: 10 }, delay: 1000 },
            //
            // 11. ?�����|
            { fn: cellDomId, arg: { x: 6, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 4, y: 2 }, delay: 1000 },
            //
            // ��5��6
            { fn: cellDomId, arg: { x: 5, y: 8 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 4, y: 8 }, delay: 1000 },
            //
            // 12. ?�|�i��
            { fn: cellDomId, arg: { x: 4, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 4, y: 8 }, delay: 1000 },
            //
            // �N6��5
            { fn: cellDomId, arg: { x: 4, y: 10 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 10 }, delay: 1000 },
            //
            // 13. ���K����
            { fn: cellDomId, arg: { x: 8, y: 8 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 8 }, delay: 1000 }
            //
        ],
        //
        // It uses selectable ids and can only be run at the starting game state
        selectableIdCoreOnly: [
            // 1. ���K����
            { fn: noOp, arg: 'Red_Cannon_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_13', delay: 1000 },
            //
            // ��8�i7
            { fn: noOp, arg: 'Black_Horse_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_44', delay: 1000 },
            //
            // 2. �X�K�i�C
            { fn: noOp, arg: 'Red_Horse_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_15', delay: 1000 },
            //
            // ��2�i1
            { fn: noOp, arg: 'Black_Horse_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_49', delay: 1000 },
            //
            // 3. ?�E�i�@
            { fn: noOp, arg: 'Red_Chariot_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_9', delay: 1000 },
            //
            // �H7�i5
            { fn: noOp, arg: 'Black_Elephant_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_46', delay: 1000 },
            //
            // 4. ?�E���|
            { fn: noOp, arg: 'Red_Chariot_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_4', delay: 1000 },
            //
            // �h6�i5
            { fn: noOp, arg: 'Black_Advisor_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_54', delay: 1000 },
            //
            // 5. ?�|�i��
            { fn: noOp, arg: 'Red_Chariot_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_40', delay: 1000 },
            //
            // ��9��6
            { fn: noOp, arg: 'Black_Chariot_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_54', delay: 1000 },
            //
            // 6. ?�|���T
            { fn: noOp, arg: 'Red_Chariot_2', delay: 1000 },
            { fn: noOp, arg: 'Black_Soldier_2', delay: 1000 },
            //
            // ��8�h2
            { fn:noOp, arg: 'Black_Cannon_1', delay: 1000 },
            { fn:noOp, arg: 'Neutral_Space_44', delay: 1000 },
            //
            // 7. �X�G�i�T
            { fn: noOp, arg: 'Red_Horse_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_11', delay: 1000 },
            //
            // ��8��7
            { fn: noOp, arg: 'Black_Cannon_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_46', delay: 1000 },
            //
            // 8. ?�T�i�@
            { fn: noOp, arg: 'Red_Chariot_2', delay: 1000 },
            { fn: noOp, arg: 'Black_Horse_1', delay: 1000 },
            //
            // ��2��7
            { fn: noOp, arg: 'Black_Cannon_2', delay: 1000 },
            { fn: noOp, arg: 'Red_Chariot_2', delay: 1000 },
            //
            // 9. ���G�i�C
            { fn: noOp, arg: 'Red_Cannon_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_46', delay: 1000 },
            //
            // �e���i5
            { fn: noOp, arg: 'Black_Cannon_2', delay: 1000 },
            { fn: noOp, arg: 'Red_Horse_1', delay: 1000 },
            //
            // 10. ?�@�i�G
            { fn: noOp, arg: 'Red_Chariot_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_10', delay: 1000 },
            //
            // �e����3
            { fn: noOp, arg: 'Black_Cannon_2', delay: 1000 },
            { fn: noOp, arg: 'Red_Horse_2', delay: 1000 },
            //
            // 11. �����i�|
            { fn: noOp, arg: 'Red_Cannon_2', delay: 1000 },
            { fn: noOp, arg: 'Black_Soldier_3', delay: 1000 },
            //
            // ��1�h2
            { fn: noOp, arg: 'Black_Horse_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_49', delay: 1000 },
            //
            // 12. ?�@���|
            { fn: noOp, arg: 'Red_Chariot_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_12', delay: 1000 },
            //
            // ��2�i3
            { fn: noOp, arg: 'Black_Horse_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_48', delay: 1000 },
            //
            // 13. ?�|�i�C
            { fn: noOp, arg: 'Red_Chariot_1', delay: 1000 },
            { fn: noOp, arg: 'Black_Chariot_1', delay: 1000 }
            //
        ]
        //
    };
    //

})(chess.integrationTests);

// Shows that this js files' loaded from its path
console.log('Loaded js file integrationTest.js from path js/chineseChess/');
//