import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadData = async () => {
    setLoading(true);
    const response = await fetch('http://localhost:3000/')
    const data = await response.json()
    setData(data)
    setLoading(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={loadData}>Load data</button>
        <div>
          {loading ? <p>Loading</p> : <ul>
            {data.map(item => <li key={item.id}>{JSON.stringify(item)}</li>)}
          </ul>}
        </div>
      </header>
    </div>
  );
}

export default App;
