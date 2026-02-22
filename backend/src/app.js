const express = require('express');
const cors = require('cors'); 
const morgan = require('morgan');

const app = express();

//1)middlewares globales
app.use(cors());

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//2)rutas base

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Servidor funcionando correctamente'
    });
});

//3)manejo para rutas no encontradas
app.use((req, res) => {
    res.status(404).json({
        error: 'Ruta no encontrada'
    });
});

//4)manejo global de errores
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(err.status || 500).json({
        error: err.message || 'Error interno del servidor'
    });
});

module.exports = app;