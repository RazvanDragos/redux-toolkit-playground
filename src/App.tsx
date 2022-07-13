import logo from "./logo.svg";
import { Counter } from "./components/Counter";
import "./App.css";
import Words from "./components/Words";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Words />
      </header>
    </div>
  );
}

export default App;
