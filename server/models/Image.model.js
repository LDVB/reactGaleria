const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'El titulo de la imagen es obligatorio'],
      minlength: [3, 'El titulo debe tener min, 3 caracteres']

    },

    imageUrl: {
      type: String,
      required: [true,'La imagen es obligatoria']
    }

  },

  {
    
    timestamps: true,
  }
  
);

const Image = model("Image", userSchema);

module.exports = Image;
