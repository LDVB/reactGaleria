import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import imagesService from '../../services/images.services'
import uploadService from '../../services/upload.services'

import "./EditImageForm.css"

const EditImageForm = () => {

    const [imagesData, setImagesData] = useState({

        title: '',
        imageUrl: '',

    })

    const { id } = useParams()

    const { title, imageUrl} = imagesData

    const [loadingImage, setLoadingImage] = useState(false)

    const navigate = useNavigate()

    const handleInputChange = e => {

        const { value, name } = e.target

        setImagesData({
            ...imagesData,
            [name]: value
        })
    }

    const uploadImage = e => {
        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('images', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setImagesData({
                    ...imagesData,
                    images: data.cloudinary_url
                })
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {

        e.preventDefault()

        imagesService
            .editOneImage(id, imagesData)
            .then(({ data }) => {
                console.log("se ha modificado la imagen", data)
                navigate("/")
            })

            .catch(err => console.log(err))
    }

    return ( 

        <>

            <div className='card-form'>
                

                <Form className="card-form" onSubmit={handleSubmit} >
                <div className="input">
                    <input type="text" class="input-field" value={title} onChange={handleInputChange} name= 'title'/>
                    <label className="input-label">Título</label>
                </div>
                <div className="input">
                <Form.Group className="input" controlId="image">
                <Form.Label className="input-label">Pega aqui el URL de la imagen</Form.Label>
                <Form.Control class="input-field" type="url" onChange={uploadImage} name="image" />
                </Form.Group>
                </div>

                <div >
                    <Button className='action-button'>Modificar Imagen</Button> 
                </div>
                </Form>
                
            </div>
            

         </>
    )

}

export default EditImageForm