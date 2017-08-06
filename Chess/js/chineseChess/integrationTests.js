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
            // 1. 炮二平五
            { fn: cellDomId, arg: { x: 2, y: 3 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 3 }, delay: 1000 },
            //
            // 砲8平5
            { fn: cellDomId, arg: { x: 2, y: 8 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 8 }, delay: 1000 },
            //
            // 2. ?一進一
            { fn: cellDomId, arg: { x: 1, y: 1 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 1, y: 2 }, delay: 1000 },
            //
            // 馬8進7
            { fn: cellDomId, arg: { x: 2, y: 10 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 3, y: 8 }, delay: 1000 },
            //
            // 3. ?一平六
            { fn: cellDomId, arg: { x: 1, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 6, y: 2 }, delay: 1000 },
            //
            // 車9平8
            { fn: cellDomId, arg: { x: 1, y: 10 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 2, y: 10 }, delay: 1000 },
            //
            // 4. 傌二進三
            { fn: cellDomId, arg: { x: 2, y: 1 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 3, y: 3 }, delay: 1000 },
            //
            // 車8進6
            { fn: cellDomId, arg: { x: 2, y: 10 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 2, y: 4 }, delay: 1000 },
            //
            // 5. ?六進七
            { fn: cellDomId, arg: { x: 6, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 6, y: 9 }, delay: 1000 },
            //
            // 馬2進1
            { fn: cellDomId, arg: { x: 8, y: 10 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 9, y: 8 }, delay: 1000 },
            //
            // 6. ?九進一
            { fn: cellDomId, arg: { x: 9, y: 1 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 9, y: 2 }, delay: 1000 },
            //
            // 砲2進7
            { fn: cellDomId, arg: { x: 8, y: 8 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 8, y: 1 }, delay: 1000 },
            //
            // 7. 炮八進五
            { fn: cellDomId, arg: { x: 8, y: 3 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 8, y: 8 }, delay: 1000 },
            //
            // 馬7退8
            { fn: cellDomId, arg: { x: 3, y: 8 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 2, y: 10 }, delay: 1000 },
            //
            // 8. 炮五進四
            { fn: cellDomId, arg: { x: 5, y: 3 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 7 }, delay: 1000 },
            //
            // 士6進5
            { fn: cellDomId, arg: { x: 4, y: 10 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 9 }, delay: 1000 },
            //
            // 9. ?九平六
            { fn: cellDomId, arg: { x: 9, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 6, y: 2 }, delay: 1000 },
            //
            // 將5平6
            { fn: cellDomId, arg: { x: 5, y: 10 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 4, y: 10 }, delay: 1000 },
            //
            // 10. 前?進一
            { fn: cellDomId, arg: { x: 6, y: 9 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 6, y: 10 }, delay: 1000 },
            //
            // 士5退4
            { fn: cellDomId, arg: { x: 5, y: 9 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 6, y: 10 }, delay: 1000 },
            //
            // 11. ?六平四
            { fn: cellDomId, arg: { x: 6, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 4, y: 2 }, delay: 1000 },
            //
            // 砲5平6
            { fn: cellDomId, arg: { x: 5, y: 8 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 4, y: 8 }, delay: 1000 },
            //
            // 12. ?四進六
            { fn: cellDomId, arg: { x: 4, y: 2 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 4, y: 8 }, delay: 1000 },
            //
            // 將6平5
            { fn: cellDomId, arg: { x: 4, y: 10 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 10 }, delay: 1000 },
            //
            // 13. 炮八平五
            { fn: cellDomId, arg: { x: 8, y: 8 }, delay: 1000 },
            { fn: cellDomId, arg: { x: 5, y: 8 }, delay: 1000 }
            //
        ],
        //
        // It uses selectable ids and can only be run at the starting game state
        selectableIdCoreOnly: [
            // 1. 炮八平五
            { fn: noOp, arg: 'Red_Cannon_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_13', delay: 1000 },
            //
            // 馬8進7
            { fn: noOp, arg: 'Black_Horse_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_44', delay: 1000 },
            //
            // 2. 傌八進七
            { fn: noOp, arg: 'Red_Horse_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_15', delay: 1000 },
            //
            // 馬2進1
            { fn: noOp, arg: 'Black_Horse_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_49', delay: 1000 },
            //
            // 3. ?九進一
            { fn: noOp, arg: 'Red_Chariot_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_9', delay: 1000 },
            //
            // 象7進5
            { fn: noOp, arg: 'Black_Elephant_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_46', delay: 1000 },
            //
            // 4. ?九平四
            { fn: noOp, arg: 'Red_Chariot_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_4', delay: 1000 },
            //
            // 士6進5
            { fn: noOp, arg: 'Black_Advisor_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_54', delay: 1000 },
            //
            // 5. ?四進五
            { fn: noOp, arg: 'Red_Chariot_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_40', delay: 1000 },
            //
            // 車9平6
            { fn: noOp, arg: 'Black_Chariot_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_54', delay: 1000 },
            //
            // 6. ?四平三
            { fn: noOp, arg: 'Red_Chariot_2', delay: 1000 },
            { fn: noOp, arg: 'Black_Soldier_2', delay: 1000 },
            //
            // 砲8退2
            { fn:noOp, arg: 'Black_Cannon_1', delay: 1000 },
            { fn:noOp, arg: 'Neutral_Space_44', delay: 1000 },
            //
            // 7. 傌二進三
            { fn: noOp, arg: 'Red_Horse_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_11', delay: 1000 },
            //
            // 砲8平7
            { fn: noOp, arg: 'Black_Cannon_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_46', delay: 1000 },
            //
            // 8. ?三進一
            { fn: noOp, arg: 'Red_Chariot_2', delay: 1000 },
            { fn: noOp, arg: 'Black_Horse_1', delay: 1000 },
            //
            // 砲2平7
            { fn: noOp, arg: 'Black_Cannon_2', delay: 1000 },
            { fn: noOp, arg: 'Red_Chariot_2', delay: 1000 },
            //
            // 9. 炮二進七
            { fn: noOp, arg: 'Red_Cannon_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_46', delay: 1000 },
            //
            // 前炮進5
            { fn: noOp, arg: 'Black_Cannon_2', delay: 1000 },
            { fn: noOp, arg: 'Red_Horse_1', delay: 1000 },
            //
            // 10. ?一進二
            { fn: noOp, arg: 'Red_Chariot_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_10', delay: 1000 },
            //
            // 前砲平3
            { fn: noOp, arg: 'Black_Cannon_2', delay: 1000 },
            { fn: noOp, arg: 'Red_Horse_2', delay: 1000 },
            //
            // 11. 炮五進四
            { fn: noOp, arg: 'Red_Cannon_2', delay: 1000 },
            { fn: noOp, arg: 'Black_Soldier_3', delay: 1000 },
            //
            // 馬1退2
            { fn: noOp, arg: 'Black_Horse_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_49', delay: 1000 },
            //
            // 12. ?一平四
            { fn: noOp, arg: 'Red_Chariot_1', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_12', delay: 1000 },
            //
            // 馬2進3
            { fn: noOp, arg: 'Black_Horse_2', delay: 1000 },
            { fn: noOp, arg: 'Neutral_Space_48', delay: 1000 },
            //
            // 13. ?四進七
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