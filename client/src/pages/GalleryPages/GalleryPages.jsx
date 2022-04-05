import { useEffect, useState } from "react"
import { Container, Modal,  } from "react-bootstrap"
import ImageList from "../../components/ImageList/ImageList"
import NewImageForm from "../../components/NewImageForm/NewImageForm"
import imagesService from "../../services/images.services"

import "./GalleryPages.css"

const Gallery = () => {

    const [images, setImages] = useState([])
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {

        imagesService
            .getAllImages()
            .then(({ data }) => setImages(data))
            .catch(err => console.log(err))

    }, [])

    const handleModalClose =() => setShowModal(false)
    const handleModalOpen =() => setShowModal(true)

    return (
        <>
            <Container>

                <h1 className="Name" >Añade tus fotos favorias! <span onClick={handleModalOpen}>+</span></h1>
                <hr />
                <ImageList images={images} />

            </Container>

            <Modal nameClass="modal-container" show={showModal} onHide={handleModalClose}>
                <div nameClass="modal">
                    <Modal.Header>
                        <div closeButton/>
                        <Modal.Title className="Title">Añadir Nueva Imagen</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewImageForm/>
                    </Modal.Body>
                </div>
            </Modal>
            
        </>

    )

}

export default Gallery