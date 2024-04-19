// cppworker.js

// TODO:  Make this call the CPP Addon
// TODO: Fix this, right now this seems to create an infinite loop where this is run
// over and over but none of the other stuff in callcppworker.js is ever run
onmessage = function (event) {
    console.log('Received message from the main thread:', event.data);
  
    // Perform some computation
    const result = event.data * 2;
  
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