import React, { useState, useCallback, useRef } from 'react';
import './App.css';
import ImageDisplay from './components/ImageDisplay';
import Convolution from './components/Convolution';

function App() {
  const [dim, setDim] = useState(3)
  const [filter, setFilter] = useState()
  const [scale, setScale] = useState()
  

  const inputHandler = useCallback((f, s) => {
    setFilter(f)
    setScale(s)
  }, [])

  const changeHandler = e => {
    const n = Number(e.target.value)
    if(n %2 === 0){
      setDim(n+Math.sign(n-dim))
    }else{
      setDim(n)
    }
  }



  return (
    <div className="App">
      <div className="dimension"><h1 className="title">Image Convolution Demonstration</h1></div>
     <Convolution dim={dim} filter={filter} scale={scale} onInput={inputHandler}/>
     <ImageDisplay filter={filter} scale={scale}/>
      
      
    </div>
  );
}

export default App;
