import logo from './logo.jpg';
import valorant from './valorant.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Valorant Gamers" />
        <img src={valorant} className="App-valorant" alt="Valorant Gamers" />
        <a
          className="App-link"
          href="https://playvalorant.com/es-mx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bot">GAMERS</span>
        </a>
      </header>
    </div>
  );
}

export default App;
