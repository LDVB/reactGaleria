import { useState } from 'react'
import { Form, Button} from 'react-bootstrap'
import imagesService from '../../services/images.services'
import "./NewImageForm.css"




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
            <div className='card-form'>
           
            <Form class="card-form" onSubmit={handleSubmit} >
			<div class="input">
				<input type="text" class="input-field" value={title} onChange={handleImputChange} name= 'title'/>
				<label class="input-label">Título</label>
			</div>
						<div class="input">
				<input type="url" class="input-field" value={imageUrl} onChange={handleImputChange} name='imageUrl'/>
				<label class="input-label">Pega aqui el URL de la imagen</label>
			</div>
					
			<div class="action">
				<button class="action-button">Guardar imagen</button>
			</div>
		    </Form>
            </div>
        </>
    )

}

export default NewImageForm