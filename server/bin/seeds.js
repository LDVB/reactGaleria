
const mongoose = require('mongoose');
const Image = require('../models/Image.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/galeria';

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });


const image = [
    {
        title: "Acuarelas",
        imageUrl: "https://cdn.pixabay.com/photo/2016/12/06/01/26/colour-1885352__480.jpg",
       
    },
    {
        title: "Humo de colores",
        imageUrl: "https://blog.foto24.com/wp-content/uploads/2019/06/art-artistic-background-1328891-1024x723.jpg",
    },
    {
        title: "Pasteles",
        imageUrl: "https://i.ytimg.com/vi/xWRmOoDHWAs/maxresdefault.jpg",
    },
    {
        title: "Disparos",
        imageUrl: "https://i.pinimg.com/474x/90/cd/22/90cd22c08ea468b83f04cc5ccc3b7e1e.jpg",
    },
];



Image.create(image)
    .then(imageFromDB => {
        console.log(`Created ${imageFromDB.length} image`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating image from the DB: ${err}`));