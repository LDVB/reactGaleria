import { useEffect, useState } from "react"
import axios from "axios"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import "./GalleryPages.css"


const Gallery = () => {

    let [images, setImages] = useState([])

    useEffect(() => {

        axios
            .get('http://localhost:5005/api/gallery/getAllImages')
            .then(({ data }) => setImages(data))
            .catch(err => console.log(err))

    }, [])

    return (
        <>
            <Container>

                <h1 className="Name" >Añade tus fotos favorias!</h1>
                <hr />
                
                    {images.map(images => {
                        return (
                            
                            <div key={images._id}>
                                <Row>
                                <Col >
                                <Card className="ImageCard">
                                    <Card.Img variant="top"  className="Picture" src={images.imageUrl} />
                                    <Card.Body>
                                        <Card.Title className="Name">{images.title}</Card.Title>
                                       
                                        <Button className="Button Edit">Editar</Button>
                                        <Button className="Button Delete">Eliminar</Button>
                                    </Card.Body>
                                </Card>
                                </Col>
                                </Row>
                               

                            </div>
                            
                        )
                    
                    })}
              

              

            </Container>
        </>

    )

}

export default Gallery