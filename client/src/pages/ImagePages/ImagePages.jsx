import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import imagesService from '../../services/images.services'
import { Container, Button, Col, Row } from "react-bootstrap"
import "./ImagePages.css"

const ImagePages = () => {

  const [imagesDetails, setImagesDetails] = useState({})
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect (()=>{

    imagesService
      .getOneImages(id)
      .then (({data})=>{
        setImagesDetails(data)
      })
      .catch( err=> console.log (err))
  }, [id])

    const deleteImage = () => {

      imagesService
        .deleteOneImage(id)
        .then(()=> navigate ('/'))
        .catch (err => console.log(err))

    }
    return (
        <>
          <Container>

              <h1 className="Name" >Detalles de la imagen</h1>
              <hr />
              <Row>
                <Col >
                    <h3>{imagesDetails.title}</h3>
                </Col>
                <Col>
                    <img src={imagesDetails.imageUrl} alt={imagesDetails.title} />
                </Col>
            </Row>

            <Link to={`/modificarImagen/${imagesDetails._id}`}>
              <Button variant="light">Editar Imagen</Button>
            </Link> 

            <Button variant="light" onClick={deleteImage}>Borrar imagen</Button>
              
            <Link to ='/'>
              <Button className="Button Volver">Volver</Button>
            </Link>
              


          </Container>
        </>

    )

}

export default ImagePages