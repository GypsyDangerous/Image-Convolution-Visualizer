import React, { useState, useCallback } from 'react';
import './App.css';
import ImageDisplay from './components/ImageDisplay';
import Convolution from './components/Convolution';

function App() {
  
  const [filter, setFilter] = useState()
  const [scale, setScale] = useState()

  const inputHandler = useCallback((f, s) => {
    setFilter(f)
    setScale(s)
  }, [])

  return (
    <div className="App">
     <ImageDisplay filter={filter} scale={scale}/>
     <Convolution onInput={inputHandler}/>
    </div>
  );
}

export default App;
