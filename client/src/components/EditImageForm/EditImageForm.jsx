import { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import imagesService from '../../services/images.services'
import uploadService from '../../services/upload.services'

const EditImageForm = () => {

    const [imagesData, setImagesData] = useState({

        title: '',
        imageUrl: '',

    })

    const { _id } = useParams()

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
        uploadData.append('image', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setImagesData({
                    ...imagesData,
                    image: data.cloudinary_url
                })
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {

        e.preventDefault()

        imagesService
            .editOneImage(_id, imagesData)
            .then(({ data }) => {
                console.log("se ha modificado la imagen", data)
                navigate("/")
            })

            .catch(err => console.log(err))
    }

    return ( 

        <>

            <div className='card-form'>

                <Form class="card-form" onSubmit={handleSubmit} >
                <div class="input">
                    <input type="text" class="input-field" value={title} onChange={handleInputChange} name= 'title'/>
                    <label class="input-label">Título</label>
                </div>
                            <div class="input">
                    <input type="url" class="input-field" value={imageUrl} onChange={uploadImage} name='imageUrl'/>
                    <label class="input-label">Pega aqui el URL de la imagen</label>
                </div>

                <div class="action">
                    <Button variant="light" type="submit">Modificar Imagen</Button> 
                </div>
                </Form>
                
            </div>
            

         </>
    )

}

export default EditImageForm