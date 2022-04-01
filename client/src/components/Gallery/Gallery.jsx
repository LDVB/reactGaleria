import { useEffect, useState } from "react"
import axios from "axios"
import "./Gallery.css"


const Gallery = () => {

    let [images, setImages] = useState([])

    useEffect (()=>{

        axios
            .get('http://localhost:5005/api/gallery/getAllImages')
        .then (response=> setImages(response.data))
        .catch (err=>console.log (err))

            
    },[])

    return (
        <>
            <h1>GALERIA DE FOTOSSSS</h1>
        </>

    )

}

export default Gallery