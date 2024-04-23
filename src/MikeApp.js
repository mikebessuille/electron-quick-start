import './App.css';
import CPPResultComponent from './callcppworker.js';
import { channels } from './constants';

// TODO: This doesn't work...  can't get the ipcRenderer
/*
import { getMainWindow } from 'electron-main-window';
const mainWindow = getMainWindow();
const { ipcRenderer } = mainWindow.require('electron');
*/


function MikeApp() {
  // This stuff doesn't work...
  /*
  const sendTestEventMike = () => {
    ipcRenderer.send(channels.TEST_EVENT_MIKE, { product: 'notebook' });
  }

  return (
    <div className="MikeApp">
      <header className="Mike-App-header">
        <p>This is from <code>src/MikeApp.js</code></p>
        <CPPResultComponent />
        <p>This next button is from MikeApp.js and is for sending info from React to Electron</p>
        <button onClick={sendTestEventMike}>Test Event Mike</button>
      </header>
    </div>
  );
  */

  /* */
  return (
    <div className="MikeApp">
      <header className="Mike-App-header">
        <p>This is from <code>src/MikeApp.js</code></p>
        <CPPResultComponent />
      </header>
    </div>
  );
  /**/
}

export default MikeApp;   


/* 
// TODO:  interact from React code to electron : using this example code from
// https://medium.com/free-code-camp/building-an-electron-application-with-create-react-app-97945861647c


const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;

*/