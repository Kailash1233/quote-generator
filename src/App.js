import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const App = () => {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="App">
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='glow-on-hover' type="button" onClick={fetchAdvice}>
          <span>Get my Advice!😌</span>
        </button>
      </div>
    </div>
  );
};

export default App;
