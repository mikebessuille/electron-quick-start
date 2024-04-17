/*
* MRB: This works for the Electron-html version (not the Electron-React version).
* I created a separate copy of this under \src called called "cppworker" to work with React
*/

//address of native addon 
const {add} = require('./CPP_Addon/build/Release/addon.node'); 

//Calling functions of native addon 
var result = add(3,4); 
//console.log(result);

//communicating with main process of electron app.
postMessage(result);