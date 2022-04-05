import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import "./ImageCard.css"
        
const ImageCard = ({imageUrl, title, _id}) => {




    return (

        <Card className="ImageCard">
        <Card.Img variant="top"  className="Picture" src={imageUrl} />
        <Card.Body>
            <Card.Title className="Name">{title}</Card.Title>
            <Link to={`/detallesImagen/${_id}`}>
            <Button className=" Detalles ">Ver detalles</Button>
            </Link>
        </Card.Body>
        </Card>
    )

}

export default ImageCard