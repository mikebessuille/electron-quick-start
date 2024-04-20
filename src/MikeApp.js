import './App.css';
//import './callcppworker.js';
import CPPResultComponent from './callcppworker.js';

function MikeApp() {
  return (
    <div className="MikeApp">
      <header className="Mike-App-header">
        <p>This is from <code>src/MikeApp.js</code></p>
        <CPPResultComponent />
      </header>
    </div>
  );
}

// Simple version without <CPPResultComponent /> because it just isn't working with the worker thread.
/*
function MikeApp() {
  return (
    <div className="MikeApp">
      <header className="Mike-App-header">
        <p>This is from <code>src/MikeApp.js</code></p>
      </header>
    </div>
  );
}
*/

export default MikeApp;   


/* 
// TODO:  interact from React code to electron : using this example code from
// https://medium.com/free-code-camp/building-an-electron-application-with-create-react-app-97945861647c


const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;

*/