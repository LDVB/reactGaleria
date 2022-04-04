import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import ImageList from "../../components/ImageList/ImageList"
import imagesService from "../../services/images.services"

import "./GalleryPages.css"

const Gallery = () => {

    let [images, setImages] = useState([])

    useEffect(() => {

        imagesService
            .getAllImages()
            .then(({ data }) => setImages(data))
            .catch(err => console.log(err))

    }, [])

    return (
        <>
          <Container>
                
              <h1 className="Name" >Añade tus fotos favorias!</h1>
              <hr />
              <ImageList images={images}/>


          </Container>
        </>

    )

}

export default Gallery