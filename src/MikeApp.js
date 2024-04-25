import './App.css';
import CPPResultComponent from './callcppworker.js';
import { channels } from './constants';

function MikeApp() {
  const sendTestEventMike = () => {
    console.log(`MikeApp.js: sending a message from React to Electron`);
    window.ElectronAPI.send(channels.TEST_EVENT_MIKE, { product: 'notebook' });
    window.ElectronAPI.send(channels.TO_MAIN, 'Hi from react');
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
}

export default MikeApp;