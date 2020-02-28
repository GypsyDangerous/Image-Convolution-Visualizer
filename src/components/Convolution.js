import React, { useState, useEffect, useRef } from 'react'

import "./Convolution.css"

const Convolution = props => {
    const dim = props.dim
    const [filter, setFilter] = useState({values: Array(dim*dim).fill(1), dim: dim})
    const [scale, setScale] = useState(1)
    const selectRef = useRef()

    useEffect(() => {
        props.onInput(filter, scale)
    }, [filter.dim])

    useEffect(() => {
        setFilter(props.filter)
        setScale(props.scale)

    }, [props.filter, props.scale])

    useEffect(() => {
        const dim = props.dim
        setFilter({ values: Array(dim * dim).fill(1), dim: dim })
    }, [props.dim])
    
    const changeHandler = (e, i) => {
        const temp = {...filter}
        temp.values[i] = Number(e.target.value)
        setFilter(temp)
        props.onInput(temp, scale)
    }

    const scaleChangeHandler = e => {
        setScale(Number(e.target.value))
        props.onInput(filter, Number(e.target.value))
    }

    const selectChangeHandler = () => {
        let presetFilter
        switch (selectRef.current.value) {
            case "3x3 horz edge":
                presetFilter = {
                    values: [-5, -5, -5, 5, 5, 5, 0, 0, 0],
                    dim: 3
                }
                setFilter(presetFilter)
                setScale(1)
                break;
            case "3x3 vert edge":
                presetFilter = {
                    values: [-5, 5, 0, -5, 5, 0, -5, 5, 0],
                    dim: 3
                }
                setFilter(presetFilter)
                setScale(1)
                break;
            case "3x3 gen edge":
                presetFilter = {
                    values: [-2, -2, -2, -2, 16, -2, -2, -2, -2],
                    dim: 3
                }
                setFilter(presetFilter)
                setScale(1)
                break;
            case "5x5 blur":
                presetFilter = {
                    values: Array(25).fill(1),
                    dim: 5
                }
                setFilter(presetFilter)
                setScale(25)
                break;
            case "5x5 gauss blur":
                presetFilter = {
                    values: [1, 4, 6, 4, 1, 4, 16, 24, 16, 4, 6, 24, 36, 24, 6, 4, 16, 24, 16, 4, 1, 4, 6, 4, 1],
                    dim: 5
                }
                setFilter(presetFilter)
                setScale(256)
                break;
            default:
                break;
        }
    }

    return (
        <div className="convolution">
            <h2 className="dimension" id="filter-title">Filter</h2>
            <div className="convolution-container" style={{gridTemplateColumns: `repeat(${filter.dim}, 1fr)`, width: filter.dim*50, height: filter.dim*50}}>
            {filter.values.map((n,i) => (
                <input className="filter-number" value={n} key={i} onChange={e => changeHandler(e, i)} type="number"/>
            ))}
            </div>
            <div className="setting filter-scale">
            <label htmlFor="scale">Filter Scale</label>
            <input className="nonfilter-number" name="scale" value={scale} onChange={scaleChangeHandler} type="number"/>
            </div>
            <div className="setting size">
                <label htmlFor="dimension">Filter Size </label>
                <input className="nonfilter-number" min="3" max="7" onChange={changeHandler} value={dim} type="number" id="dimension" />
            </div>
            <div className="setting dimension">
                <label htmlFor="presets">Filter Presets</label>
                <select ref={selectRef} onClick={selectChangeHandler} id="presets">
                    <option value="3x3 horz edge">3x3 Horizontal Edge Detection</option>
                    <option value="3x3 vert edge">3x3 Vertical Edge Detection</option>
                    <option value="3x3 gen edge">3x3 General Edge Detection</option>
                    <option value="5x5 blur">5x5 blur</option>
                    <option value="5x5 gauss blur">5x5 Gaussian blur</option>
                    {/* <option value="5x5">5x5</option> */}
                </select>
            </div>
        </div>
    )
}

export default Convolution