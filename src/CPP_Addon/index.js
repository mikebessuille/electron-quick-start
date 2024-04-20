const {add} = require("./build/Release/addon.node");
console.log("index.js running the add() method from the cpp addon:");
console.log(add(2, 3));
console.log("Finished running the cpp addon");

