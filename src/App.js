import logo from './logo.svg';
import './App.css';
import Home from './components/Basketball/Home.component';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home/>
      </header>
    </div>
  );
}

export default App;
