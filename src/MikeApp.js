import './App.css';
import CPPResultComponent from './callcppworker.js';
import { channels } from './constants';

function MikeApp() {
  const sendTestEventMike = () => {
    window.ElectronAPI.send(channels.TO_MAIN, { product: 'notebook' });
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