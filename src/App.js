import React, { useState, useCallback, useRef } from 'react';
import './App.css';
import ImageDisplay from './components/ImageDisplay';
import Convolution from './components/Convolution';

function App() {
  const [dim, setDim] = useState(3)
  const [filter, setFilter] = useState()
  const [scale, setScale] = useState()
  const selectRef = useRef()

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

  const selectChangeHandler = () => {
    let presetFilter
    switch(selectRef.current.value){
      case "3x3 horz edge":
        presetFilter = {
          values: [-5, -5, -5, 5, 5, 5, 0, 0, 0], 
          dim: 3
        }
        setFilter(presetFilter)
        setDim(3)
        setScale(1)
      break;
      case "3x3 vert edge":
        presetFilter = {
          values: [-5, 5, 0, -5, 5, 0, -5, 5, 0],
          dim: 3
        }
        setFilter(presetFilter)
        setDim(3)
        setScale(1)
      break;
      case "3x3 gen edge":
        presetFilter = {
          values: [-2, -2, -2, -2, 16, -2, -2, -2, -2],
          dim: 3
        }
        setFilter(presetFilter)
        setDim(3)
        setScale(1)
      break;
      case "5x5 blur":
        presetFilter = {
          values: Array(25).fill(1),
          dim: 5
        }
        setFilter(presetFilter)
        setDim(5)
        setScale(25)
      break;
      case "5x5 gauss blur":
        presetFilter = {
          values: [1, 4, 6, 4, 1, 4, 16, 24, 16, 4, 6, 24, 36, 24, 6, 4, 16, 24, 16, 4, 1, 4, 6, 4, 1],
          dim: 5
        }
        setFilter(presetFilter)
        setDim(5)
        setScale(256)
      break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div className="dimension"><h1>Image Convolver</h1></div>
     <Convolution dim={dim} filter={filter} scale={scale} onInput={inputHandler}/>
     <ImageDisplay filter={filter} scale={scale}/>
      <div className="">
        <label htmlFor="dimension">Filter Size</label>
        <input min="3" max="7" onChange={changeHandler} value={dim} type="number" id="dimension"/>
      </div>
      <div>
        <label htmlFor="presets">Filter Presets</label>
        <select ref={selectRef} onChange={selectChangeHandler} id="presets">
          <option value="3x3 horz edge">3x3 Horizontal Edge Detection</option>
          <option value="3x3 vert edge">3x3 Vertical Edge Detection</option>
          <option value="3x3 gen edge">3x3 General Edge Detection</option>
          <option value="5x5 blur">5x5 blur</option>
          <option value="5x5 gauss blur">5x5 Gaussian blur</option>
          {/* <option value="5x5">5x5</option> */}
        </select>
      </div>
    </div>
  );
}

export default App;
