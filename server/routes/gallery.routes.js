const router = require("express").Router();
const Image = require ('./../models/Image.model')

//mostramos la galeria de imagenes

router.get('/getAllImages', (req, res) =>{
    
    Image
        .find()
        .select ('title imageUrl')
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})

//detalles de una imagen

router.get('/getOneImage/:image_id', (req, res,) =>{

    const {image_id} = req.params

    Image
        .findById (image_id)
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})

//guardamos una imagen nueva

router.post('/saveImage', (req, res,) =>{

    const {title, imageUrl} = req.body

    Image
        .create ({title, imageUrl})
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})

//modificamos una imagen

router.put ('/modifyImage', (req, res) =>{

    const {title, imageUrl} = req.body

    Image
        .findByIdAndUpdate ({title, imageUrl})
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})

//eliminamos una imagen

router.delete ('/deleteImage', (req, res) =>{

    const {image_id} = req.params

    Image
        .findByIdAndDelete (image_id)
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})


module.exports = router;
