# ✨ SimplyLovelyLetter

Una aplicación web pensada para que niños y niñas creen cartas digitales usando su voz, elijan plantillas visuales y las envíen por correo electrónico.

## Índice
- [Descripción](#descripción)
- [Características (MVP)](#características-mvp)
- [Tecnologías](#tecnologías)

## Descripción
SimplyLovelyLetter facilita que niños creen cartas digitales mediante comandos de voz (Web Speech API), las personalicen con plantillas visuales y las envíen por correo.

## Características (MVP)
- Registro / Login de usuarios
- Grabación por voz y transcripción (Speech-to-text del navegador)
- Edición del texto resultante antes de enviar
- Selección de plantillas visuales para la carta
- Envío por correo electrónico (Nodemailer)
- Historial de cartas enviadas por usuario

## Tecnologías

**Backend**
- Node.js
- Express
- Mongoose
- Nodemailer
- MongoDB Atlas

**Frontend**
- HTML, CSS, JavaScript (sin frameworks)
- Web Speech API (`SpeechRecognition`)

## Base de Datos
- Utilizaremos MongoDB(Atlas), que es:
    * Una base de datos NoSQL
    * Esta oriendata a documentos
    * Su modelo es basado en JSON
    * Es no relacional (aunque puede manejar referencias)