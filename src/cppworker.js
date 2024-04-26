// cppworker.js


//address of native addon
const {add} = require('./CPP_Addon/build/Release/addon.node'); 

onmessage = function (event) {
    console.log('Received message from the main thread:', event.data);
  
    // Perform some computation
    const result = event.data * 2;
    // const result2 = add(3,4); // Calls the CPP Addon

    // Send the result back to the main thread
    postMessage(result);
};


/* THIS WAS THE OLD STUFF FROM THE NON-REACT APP; doesn't work in react

//address of native addon
const {add} = require('../CPP_Addon/build/Release/addon.node'); 

//Calling functions of native addon 
var result = add(3,4); 
console.log(result);

//communicating with main process of electron app.
postMessage(result);

*/