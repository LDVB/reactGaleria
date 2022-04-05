import { Col, Row } from "react-bootstrap"
import ImageCard from "../ImageCard/ImageCard"




const ImageList = ({images}) => {

    return (
        <>
        {images.map(images => {
                return (
                    <div >
                        <Row> 
                            <Col md={4} key={images._id} > 
                                <ImageCard {...images}/>  
                            </Col> 
                        </Row>
                    </div>
                 )

            })
        }
        </>
    )

}

export default ImageList

