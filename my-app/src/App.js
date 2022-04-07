import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="main">
          <div id="menu">
            <span>&#215;</span>
            <span>&#8722;</span>
            <span>+</span>
          </div>
          <div id="field">0</div>
          <div id="container">
            <div className="row">
              <button className="darkgrey">AC</button>
              <button className="darkgrey">+/-</button>
              <button className="darkgrey">%</button>
              <button className="orange">&#247;</button>
            </div>
            <div className="row">
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button className="orange">	&#215;</button>
            </div>
            <div className="row">
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button className="orange">&#8722;</button>
            </div>
            <div className="row">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button className="orange">+</button>
            </div>
            <div className="row">
              <button id="big">0</button>
              <button>,</button>
              <button className="orange">=</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
