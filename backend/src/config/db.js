//en este archivo se configura la conexión a la base de datos MongoDB utilizando Mongoose. 
//Se exporta una función que se puede llamar para establecer la conexion a la base de datos.
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB conectado corretamente');
    } catch (error) {
        console.error('Error al conectarse a MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;