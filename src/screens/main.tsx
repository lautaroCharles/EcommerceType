import NavBar from "../components/navBar/navBar";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Main = () => {
    const [locationurl, setLocationUrl] = useState('')
    const location = useLocation()

    useEffect(() => {
      setLocationUrl(location.pathname)
    }, [])
    return(
        <div>
            <NavBar location={locationurl}/>
        </div>
    )
}

export default Main;