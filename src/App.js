import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>counter</h1>
        <h2>You clicked {counter} times</h2>
        <div>
        <button onClick={() => setCounter(counter > 0 ? counter -1 : 0)}>-</button>
        <button onClick={() => setCounter(0)}>reset</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
