import React, { useState, useEffect } from 'react'

import "./Convolution.css"

const Convolution = props => {
    const dim = props.dim
    const [filter, setFilter] = useState({values: Array(dim*dim).fill(1), dim: dim})
    const [scale, setScale] = useState(1)

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

    return (
        <div className="convolution">
            <h2>Filter</h2>
            <div className="convolution-container" style={{gridTemplateColumns: `repeat(${filter.dim}, 1fr)`, width: filter.dim*50, height: filter.dim*50}}>
            {filter.values.map((n,i) => (
                <input className="filter-number" value={n} key={i} onChange={e => changeHandler(e, i)} type="number"/>
            ))}
            </div>
            <div className="filter-scale">
            <label htmlFor="scale">Scale</label>
            <input name="scale" value={scale} onChange={scaleChangeHandler} type="number"/>
            </div>
        </div>
    )
}

export default Convolution