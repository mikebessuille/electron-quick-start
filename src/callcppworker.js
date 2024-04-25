// MRB: This file was created based on ..\renderer.js, and is specifically for the react application

import React, { useState, useEffect } from 'react';
import WorkerFactory from './WorkerFactory';
import cppworker from './cppworker';
      

const CPPResultComponent = () => {
    const [result, setResult] = useState(null);
    const [worker, setWorker] = useState(null);
  
    useEffect(() => {
      const myWorker = new Worker(new URL('./cppworker.js', import.meta.url));

      // Set up event listener for messages from the worker
      myWorker.onmessage = function (event) {
        console.log('Received result from worker:', event.data);
        setResult(event.data);
      };

      // Save the worker instance to state (this sets the "worker" value)
      setWorker(myWorker);
      setResult(5); // initial
  
      // Clean up the worker when the component unmounts
      return () => {
        myWorker.terminate();
      };
    }, []); // Run this effect only once when the component mounts

    const handleClick = () => {
      // Send a message to the worker
      if (worker) {
        console.log('handleClick called, posting a message to the worker');
        var seed = 5;
        if(result) 
          seed = result;
        worker.postMessage(seed); // Send the seed to the worker
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