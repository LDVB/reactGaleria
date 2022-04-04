import { Col, Row } from "react-bootstrap"
import ImageCard from "../ImageCard/ImageCard"




const ImageList = ({images}) => {

    return (
        <>
        {images.map(images => {
                return (
                    <div key={images._id}>
                        <Row> 
                            <Col > 
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

