const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema(
    {
       name: {
            type: String,
            required: true,
            trim: true
       } ,
       previewImage: {
            type: String, //para la url de la imagen
            required: true
       },
       backgroundColor: {
            type: String,
       },
       isActive: {
            type: Boolean,
            default: true
       }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Template', templateSchema);