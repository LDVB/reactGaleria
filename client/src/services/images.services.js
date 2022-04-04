import axios from "axios";

class ImagesService {

    constructor () {
        this.api = axios.create({ baseURL: 'http://localhost:5005/api/gallery' })
    }

    getAllImages =()=>{
       return this.api.get ('/getAllImages')
    }

    saveImage = image =>{
        return this.api.post('/saveImage', image)
    }


}

const imagesService = new ImagesService()

export default imagesService