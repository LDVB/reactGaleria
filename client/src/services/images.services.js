import axios from "axios";

class ImagesService {

    constructor () {
        this.api = axios.create({ baseURL: 'http://localhost:5005/api/gallery' })
    }

    getAllImages =()=>{
       return this.api.get ('/getAllImages')
    }

    getOneImages =( id)=>{
        return this.api.get (`/getOneImages/${id}`, id)
    }

    saveImage = image =>{
        return this.api.post('/saveImage', image)
    }

    editOneImage = (id, image) => {
        return this.api.put(`/modifyImage/${id}`, image)
    }

    deleteOneImage = id => {
        return this.api.delete(`/deleteImage/${id}`)
    }


}

const imagesService = new ImagesService()

export default imagesService