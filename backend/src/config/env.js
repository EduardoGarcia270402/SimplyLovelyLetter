//en este archivo se cargan las variables de entorno desde el archivo .env 
//y se exportan para ser utilizadas en otras partes de la aplicación
require('dotenv').config(); 

module.exports = {
    PORT: process.env.PORT || 3000,
    DB_URI: process.env.DB_URI
};