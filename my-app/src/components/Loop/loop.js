import React, {useEffect, useState} from 'react';
import './loop.css';

function Loop() {
  const [content, setContent] = useState(null);
  const classes = ['one', 'two', 'three', 'four', 'five'];
  const shapes = ['shape1', 'shape2', 'shape3', 'shape4', 'shape5'];
  const Squares = Array(Math.round(Math.random() * 100) + 500).fill('');
  
  let sequence = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setContent(generateSquares());
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  const generateSquares = () => {
    
    if (sequence > 0) {
      sequence--;
    } else {
      sequence = 4;
    }

    const randomShape = shapes[sequence];

    return (
      <>
        {
        Squares.map((el, index) => {
        const random = Math.round(Math.random() * (classes.length - 1));
        const randomClass = classes[random];

        return (
        <span className={randomShape}>
          <span className={randomClass} key={index}></span>
        </span>)
        })}
      </>
    );
  }

  return (
    <div className="Loop">
      {content}
    </div>
  );
}

export default Loop;
