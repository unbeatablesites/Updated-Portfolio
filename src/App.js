import logo from './logo.jpeg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Happy New Year!! Deployed Happy coding.
        </p>
        <a
          className="App-link"
          href="http://frankuzoka.com"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
