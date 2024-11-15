"use client"

import { useRef, useState } from "react"
import classes from "./image-picker.module.css"
import Image from "next/image"

function ImagePicker({ label, name }) {
    const imageInput = useRef()
    const [pickedImage, setPickedImage] = useState()
    function handlePickClick() {
        imageInput.current.click()
    }
    function handleImageChange(event) {
        const file = event.target.files[0]

        if (!file) {
            setPickedImage("")
            return
        }
        const fileReader = new FileReader
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>{pickedImage ? <Image src={pickedImage} alt="User picked image" fill /> : <p>No image selected</p>}</div>
                <input type="file" className={classes.input} id={name} accept="image/png, image/jpg" name={name} ref={imageInput} onChange={handleImageChange} required />
                <button className={classes.button} onClick={handlePickClick} type="button">Pick an Image</button>
            </div>

        </div>
    )
}

export default ImagePicker
