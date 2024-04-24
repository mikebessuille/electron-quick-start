import logo from './logo.svg';
import './App.css';
import MikeApp from './MikeApp';
import React, { useEffect } from 'react';


function App() {
  // This is from COPILOT
  /*
  useEffect(() => {
    // Example: Send data to the main process
    window.api.send('toMain', 'Hello from React!');

    // Example: Receive data from the main process
    window.api.receive('fromMain', (data) => {
        console.log(`Received data from main process: ${data}`);
    });
  }, []); 
  */
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Blah Blah Blah inserted by MRB
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MikeApp />
      </header>
    </div>
  );
}

export default App;