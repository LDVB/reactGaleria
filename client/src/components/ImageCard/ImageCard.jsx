import { Button, Card } from "react-bootstrap"
import "./ImageCard.css"
        
const ImageCard = ({title, imageUrl}) => {

    return (

        <Card className="ImageCard">
        <Card.Img variant="top"  className="Picture" src={imageUrl} />
        <Card.Body>
            <Card.Title className="Name">{title}</Card.Title>
        
            <Button className="Button Edit">Editar</Button>
            <Button className="Button Delete">Eliminar</Button>
        </Card.Body>
        </Card>
    )

}

export default ImageCard