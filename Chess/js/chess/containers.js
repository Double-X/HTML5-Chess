// Ensures all the needed js files are loaded before loading this one
if (!chess) {
    throw new Error('container.js must be loaded before loading container.js!');
}
//

// The container of promoting a promotable
chess.promotable =  { api: {}, hook: {}, unitTest: { hook: {} } };
//
// The container of recording special moves
chess.specialMoveRecords =  { api: {}, hook: {}, unitTest: { hook: {} } };
//

// Shows that this js files' loaded from its path
console.log('Loaded js file containers.js from path js/chess/');
//