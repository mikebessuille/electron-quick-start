import './App.css';
import DisplayCPPResult from './callcppworker.js';


function MikeApp() {
  return (
    <div className="MikeApp">
      <header className="Mike-App-header">
        <p>
          This is from <code>src/MikeApp.js</code>.
        </p>
        <h3>Below will be created from <code>callcppworker.js</code></h3>
        <DisplayCPPResult />
      </header>
    </div>
  );
}

export default MikeApp;