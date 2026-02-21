const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//estas rutas osn para la autenticacion
//app.use("/api/auth", require("./routes/authRoutes"));
//app.use("/api/letters", require("./routes/letterRoutes"));

app.get("/", (req, res) => {
  res.send("API funcionando correctamente");
});

module.exports = app;