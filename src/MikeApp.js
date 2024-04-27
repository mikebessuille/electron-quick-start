import './App.css';
import CPPResultComponent from './callcppworker.js';
import { channels } from './constants';
import React, { useEffect } from 'react';
import { useState } from 'react';
import TodoList from './todolist.js'

function MikeApp() {
  const [myVal, setMyVal] = useState(0);

  // Method to send information from React to Electron (called from the button click)
  const sendTestEventMike = () => {
    console.log(`MikeApp.js: sending a message from React to Electron`);
    window.ElectronAPI.send(channels.TEST_EVENT_MIKE, { product: 'notebook' });
    window.ElectronAPI.send(channels.TO_MAIN, 'Hi from react');
  }

  // Handler to receive data from the main process and update some element in my component
  useEffect(() => {
    window.ElectronAPI.receive(channels.FROM_MAIN, (data) => {
        console.log(`Received data from main process: ${data}, called from MikeApp.js`);
        // Update the react component:
        setMyVal(data);
    });
  }, []); 

  return (
    <div className="MikeApp">
      <header className="Mike-App-header">
        <p>This is from <code>src/MikeApp.js</code></p>
        <CPPResultComponent />
        <p>This next button is from MikeApp.js and is for sending info from React to Electron</p>
        <button onClick={sendTestEventMike}>Send To Electron</button>
        <p>Value returned from Electron: {myVal}</p>
      </header>
      <TodoList />
    </div>
  );
}

export default MikeApp;