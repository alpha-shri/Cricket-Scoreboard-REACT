import logo from './logo.svg';
import './css/App.css';
import Score from './components/Score';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Live Cricket Scoreboard</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Score />
    </div>
  );
}

export default App;
