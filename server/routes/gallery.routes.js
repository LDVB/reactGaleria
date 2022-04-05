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

//detalles de la imagen

router.get("/getOneImages/:id", (req, res, next) => {

    const { id } = req.params
  
    Image
      .findById(id)
      .then(response => res.json(response))
      .catch(err => res.status(500).json(err))
  });


//guardamos una imagen nueva

router.post('/saveImage', (req, res,) =>{

    const {title, imageUrl} = req.body

    Image
        .create ({title, imageUrl})
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})

//modificamos una imagen

router.put ('/modificar-imagen/:id', (req, res) =>{

    const { id } = req.params

    Image
        .findByIdAndUpdate (id, req.body, { new: true })
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})

//eliminamos una imagen

router.delete ('/deleteImage/:id', (req, res) =>{

    const {id} = req.params

    Image
        .findByIdAndDelete(id)
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})


module.exports = router;
