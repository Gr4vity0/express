const { PORT } = process.env;


const express = require('express');

console.log('Coucou');

const app  = express();

app.listen(PORT, () => {
    console.warn("Serveur Express started on port " + PORT);
})