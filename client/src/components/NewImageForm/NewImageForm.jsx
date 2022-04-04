import { useState } from 'react'
import { Form, Button} from 'react-bootstrap'
import imagesService from '../../services/images.services'




const NewImageForm = () => {

    const [imagesData, setImagesData] = useState({

        title:'',
        imageUrl:'',

    })

    const {title, imageUrl} = imagesData

    const handleImputChange = e => {

        const { value, name } = e.target

        setImagesData({
            ...imagesData,
            [name]: value  
        })

    }


    
    const handleSubmit = e => {

        e.preventDefault()

        imagesService
            .saveImage(imagesData)
            .then(({ data }) => {console.log (data)})
            .catch(err => console.log(err))
    }


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" value={title} onChange={handleImputChange} name= 'title'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="imageUrl">
                    <Form.Label>Url de la imagen</Form.Label>
                    <Form.Control type="url" value={imageUrl} onChange={handleImputChange} name='imageUrl' />
                </Form.Group>

                <div className='d-grid gap-2'>
                <Button type="submit">
                    Guardar imagen
                </Button>
                </div>
            </Form>
        </>
    )

}

export default NewImageForm