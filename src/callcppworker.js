// MRB: This file was created based on ..\renderer.js, and is specifically for the react application

import React, { useState, useEffect } from 'react';
import WorkerFactory from './WorkerFactory';
import cppworker from './cppworker';
      

const CPPResultComponent = () => {
    const [result, setResult] = useState(null);
    const [worker, setWorker] = useState(null);
  
    useEffect(() => {
      // Create a new web worker
      // TODO: This was the original version...
      // const myWorker = new Worker('./cppworker.js');
      
      // This is the new version:  (THIS GIVES AN ERROR...)
      console.log('Calling WorkerFactory');
      const myWorker = new WorkerFactory(cppworker);

      // Set up event listener for messages from the worker
      myWorker.onmessage = function (event) {
        console.log('Received result from worker:', event.data);
        setResult(event.data);
      };

      // Save the worker instance to state (this sets the "worker" value)
      setWorker(myWorker);
  
      // Clean up the worker when the component unmounts
      return () => {
        myWorker.terminate();
      };
    }, []); // Run this effect only once when the component mounts

    const handleClick = () => {
      // Send a message to the worker
      if (worker) {
        console.log('handleClick called, posting a message to the worker');
        worker.postMessage(5); // Send the number 5 to the worker
      }
      else
      {
        console.log('handleClick called but no worker value');
      }
    };

    return (
        <div>
            <p>This is from <code>src/callcppworker.js</code>.</p> 
            <p>Result from the worker: {result}</p>
            <button onClick={handleClick}>Calculate in Web Worker using CPP Addon</button>
        </div>
    );
  };
  
  export default CPPResultComponent;


// EVERYTHING BELOW DOES NOT WORK...
/*
import {createRoot} from 'react-dom/client';

// ERROR: This line causes a syntax error... if uncommented  
// var worker = new Worker('./cppworker.js');

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


function DisplayCPPResult() {
    return (
        <div className="DisplayCPPResult">
            <p> This is from <code>src/callcppworker.js</code>.</p> 
        <p id="replacewithcpp">REPLACEME</p>
        </div>
    );
  }
  
  export default DisplayCPPResult;

  */