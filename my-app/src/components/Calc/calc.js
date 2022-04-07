import './calc.css';

function Calc() {
  return (
    <div id="main">
      <div id="menu">
        <span>&#215;</span>
        <span>&#8722;</span>
        <span>+</span>
      </div>
      <div id="field">0</div>
      <div id="container">
        <div className="row">
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button>&#247;</button>
        </div>
        <div className="row">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>	&#215;</button>
        </div>
        <div className="row">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>&#8722;</button>
        </div>
        <div className="row">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        <div className="row">
          <button id="big">0</button>
          <button>,</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calc;
