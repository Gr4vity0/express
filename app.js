const { PORT } = process.env;

const express = require('express');

const app  = express();

console.log('Coucou');

const routes = require("./src/routes"); //si pas préciser va chercher app.js
//pour les utiliser
app.use("/", routes);


app.listen(PORT, () => {
    console.warn("Serveur Express started on port " + PORT);
})