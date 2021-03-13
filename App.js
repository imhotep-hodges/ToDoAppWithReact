import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a test
        </p>
        <div className = "jumbotron">
          <h1>HNIC Prodigy</h1>
          <p>QB Long Island City NY</p>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HELP ME Learn React
        </a>
        
      </header>
      
    </div>
  );
}

export default App;
