import React, {useRef, useState, useEffect} from 'react'

import "./ImageDisplay.css"

const index = (x, y, width) => (x+y*width)*4

const floor = Math.floor

const convolve = (img, filter, scl, x, y) => {
    let r = 0, b = 0, g = 0
    const dim2 = floor(filter.dim / 2)
    for (let i = -dim2; i <= dim2; i++){
        for (let j = -dim2; j <= dim2; j++){
            const filterIndex = floor(index(i+dim2, j+dim2, filter.dim)/4)
            const filterValue = filter.values[filterIndex]/scl
            const pixelIndex = index(x+i, y+j, 500)
            r += img.data[pixelIndex] * filterValue
            g += img.data[pixelIndex + 1] * filterValue
            b += img.data[pixelIndex + 2] * filterValue
        }
    }
    return [r, g, b]
}

const ImageDisplay = props => {
    const displayRef = useRef()
    const convoledRef = useRef()
    const fileRef = useRef()
    const downloadRef = useRef()
    const [image, setImage] = useState()

    const pickHandler = e => {
        if (e.target.files && e.target.files.length === 1) {
            const file = e.target.files[0];
            const fileReader = new FileReader()
            fileReader.onload = () => {
                const img = new Image()
                img.src = fileReader.result
                setImage(img)
            }
            fileReader.readAsDataURL(file)
        } 
    }

    useEffect(() => {
        if(image && props.filter){
            const ctx = displayRef.current.getContext("2d")
            const otherCtx = convoledRef.current.getContext("2d")
            ctx.drawImage(image, 0, 0, 500, 500)
            let imgPixels = ctx.getImageData(0, 0, 500, 500);
            const height = 500, width = 500
            ctx.putImageData(imgPixels, 0, 0);
            const newImage = new ImageData(width, height)
            for(let i = 1; i < width-1; i++){
                for(let j = 1; j < height-1; j++){
                    const [r, g, b] = convolve(imgPixels, props.filter, props.scale, i, j)
                    const pixelIndex = index(i, j, width)
                    newImage.data[pixelIndex] = r
                    newImage.data[pixelIndex+1] = g
                    newImage.data[pixelIndex+2] = b
                    newImage.data[pixelIndex+3] = 255
                }
            }
            otherCtx.putImageData(newImage, 0, 0)
        }

    }, [props.filter, props.scale, image])

    const fileClickHandler = () => {
        fileRef.current.click()
    }

    const downloadHandler = e => {
        const ctx = convoledRef.current
        const img = ctx.toDataURL("image/png")
        downloadRef.current.href = img
    }

    return (
        <div className="image-display">
            <h2 id="original">Original</h2>
            <h2 id="convolved">Convolved</h2>
            <canvas ref={displayRef} height="500" width="500" id="display"></canvas>
            <canvas ref={convoledRef} height="500" width="500" id="convolved-display"></canvas>
            <input id="image-input" ref={fileRef} type="file" name="img" onChange={pickHandler} accept="image/png, image/jpeg"/>
            <button id="image-button" className="image-button" onClick={fileClickHandler}>Choose Image</button>
            <a id="download-button" ref={downloadRef} onClick={downloadHandler} className="image-button" download="convolved.png" href="f">Download Convolved Image</a>
        </div>
    )
}

export default ImageDisplay