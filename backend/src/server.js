const app = require('./app');
const connectDB = require('./config/db');
require('./config/env');

const PORT = process.env.PORT || 3000;

//inicializacion del servidor

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en puerto ${PORT}`);
        });

    } catch (error) {
        console.error('Error al iniciar el servidor:', error.message);
        process.exit(1);
    }
};

startServer();