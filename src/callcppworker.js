/**
 *  MRB: This file was created based on ..\renderer.js, and is specifically for the react application
 */


import {createRoot} from 'react-dom/client';

// TODO: This line causes a syntax error...
// var worker = new Worker('./cppworker.js');

/*
worker.onmessage = function(event)
{ 
    // print result on console
    console.log("cppworker : ", event.data);
    
    // MRB: This was the old version for the html app
    // document.querySelector('h2').innerHTML = "native addon add function(3, 4): " + event.data;

    // MRB: replace the contents of the tag whose id="replacewithcpp"
    const domNode = document.getElementById('replacewithcpp');
    domNode.innerHTML = "native addon add function(3, 4): " + event.data;

    // MRB: Not sure why this doesn't work...
    // const root = createRoot(domNode);
    // const mytext = "native addon add function(3,4): " + event.data;
    // root.render(mytext);

    // terminate webworker
    worker.terminate();
    // set it to undefined
    worker = undefined;
};


worker.onerror = function (event)
{
    console.log(event.message, event);
};
*/

function DisplayCPPResult() {
    return (
        <div className="DisplayCPPResult">
            <p> This is from <code>src/callcppworker.js</code>.</p> 
        <p id="replacewithcpp">REPLACEME</p>
        </div>
    );
  }
  
  export default DisplayCPPResult;