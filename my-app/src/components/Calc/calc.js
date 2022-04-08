import React, { useState, useEffect } from 'react';
import './calc.css';

function Calc() {
  const [screen, setScreen] = useState(0);
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [typeOfCalc, setTypeOfCalc] = useState(''); 
  const ADD = 'ADD';
  const SUBTRACT = 'SUBTRACT';
  const MULTIPLY = 'MULTIPLY';
  const DIVIDE = 'DIVIDE';


  useEffect(() => {
    console.log(typeOfCalc, screen, firstValue, secondValue);
  }, [typeOfCalc, screen, secondValue, firstValue]);

  const reset = () => {
   setScreen(0);
  }

  const getPercent = () => {
    setScreen(screen * 0.01);
  }

  const negate = () => {
    setScreen(-screen);
  }

  const handleDigit = (digit) => {
    if (!typeOfCalc) {
      let newValue;
      if (!firstValue) {
        newValue = digit;
      } else {
        newValue = screen + digit.toString();
      }

      setScreen(newValue);
      setFirstValue(newValue);
      // STEP 2 (AFTER SELECTING TYPE OF CALC)
    } else {
      let newValue;
      if (!secondValue) {
        newValue = digit;
      } else {
        newValue = screen + digit.toString();
      }
      
      setScreen(newValue);
      setSecondValue(newValue);
    }
  }

  const one = () => {
    handleDigit(1);
  }

  const two  = () => {
    handleDigit(2);
  }

  const three = () => {
    handleDigit(3);
  }

  const four = () => {
    handleDigit(4);
  }

  const five = () => {
    handleDigit(5);
  }

  const six = () => {
    handleDigit(6);
  }

  const seven = () => {
    handleDigit(7);
  }

  const eight = () => {
    handleDigit(8);
  }

  const nine = () => {
    handleDigit(9);
  }

  const zero = () => {
    handleDigit(0);
  }

  const calculateResult = () => {
    const firstValueNum = Number(firstValue);
    const secondValueNum = Number(secondValue);

    if (typeOfCalc === ADD) {
      setScreen(firstValueNum + secondValueNum);
    } 
    else if (typeOfCalc === SUBTRACT) {
      setScreen(firstValueNum - secondValueNum);
    } 
    else if (typeOfCalc === MULTIPLY) {
      setScreen(firstValueNum * secondValueNum);
    } 
    else if (typeOfCalc === DIVIDE) {
      setScreen(firstValueNum / secondValueNum);
    } 

    setTypeOfCalc(''); 
  }


  return (
    <div id="main">
      <div id="menu">
        <span>&#215;</span>
        <span>&#8722;</span>
        <span>+</span>
      </div>
      <div id="field">{screen}</div>
      <div id="container">
        <div className="row">
          <button onClick={reset}>AC</button>
          <button onClick={negate}>+/-</button>
          <button onClick={getPercent}>%</button>
          <button onClick={() => setTypeOfCalc(DIVIDE)}>&#247;</button>
        </div>
        <div className="row">
          <button onClick={seven}>7</button>
          <button onClick={eight}>8</button>
          <button onClick={nine}>9</button>
          <button onClick={() => setTypeOfCalc(MULTIPLY)}>&#215;</button>
        </div>
        <div className="row">
          <button onClick={four}>4</button>
          <button onClick={five}>5</button>
          <button onClick={six}>6</button>
          <button onClick={() => setTypeOfCalc(SUBTRACT)}>&#8722;</button>
        </div>
        <div className="row">
          <button onClick={one}>1</button>
          <button onClick={two}>2</button>
          <button onClick={three}>3</button>
          <button onClick={() => setTypeOfCalc(ADD)}>+</button>
        </div>
        <div className="row">
          <button id="big" onClick={zero}>0</button>
          <button>,</button>
          <button onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calc;
