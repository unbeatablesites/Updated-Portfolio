import logo from './logo.jpeg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Frank Uzoka</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Front End Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Back End Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Git Hub</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">LinkedIn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <header className="App-header">
        <div>
          Frank Uzoka
      </div>
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
