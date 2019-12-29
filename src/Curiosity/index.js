import React, {useState, useEffect} from 'react'
import { withRouter, Link } from 'react-router-dom'
import {MoonLoader} from "react-spinners"

function Curiosity() {
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      console.log("this mounted")
      const getData = async () => {
        const data = await fetch("/api/v1")
        console.log(data, "this is the mounted data")
      }
      getData()
      setIsLoading(false)
    },
    [])
    return(
        <div className="container">
            <MoonLoader />
            this is curiosity
        </div>
    )
}

export default withRouter(Curiosity)