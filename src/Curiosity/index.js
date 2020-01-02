import React, {useState, useEffect} from 'react'
import { withRouter, Link } from 'react-router-dom'
import {MoonLoader} from "react-spinners"

function Curiosity() {
    const [isLoading, setIsLoading] = useState(true)
    const [images, setImages] = useState([])

    const getData = async () => {
        setIsLoading(true)
        const data = await(await fetch("/api/v1")).json()
        console.log(data, "this is the mounted data")
        const photoArr = []
        data.photos.map(photo => {
            photoArr.push(photo.img_src)
        })
        setImages(photoArr)
        setIsLoading(false)
    }

    useEffect(() => {
      console.log("this mounted")
      getData()
    },
    [])

    const displayImages = images.map((photo, i) => {
        return (
            <div key={i}>
                <img src={photo}/>
            </div>
        )
    })

    return(
        <div className="container">
            this is curiosity
            <MoonLoader
                size={"50px"}
                color={"rgb(138, 138, 255)"}
                loading={isLoading}
            />
            <>
                {displayImages}
            </>
        </div>
    )
}

export default withRouter(Curiosity)