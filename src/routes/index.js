// const express = require('express');
// const router = express.Router();
const userRouter = require('./users.router');
const productRouter = require('./product.router');
const router = require("express").Router();

router.get('/', (req, res) => {
    res.send("<a>Coucou</a>")
})

router.use('/users?', userRouter);
router.use('/products?', productRouter);



router.get("**", (req, res) => {
    res.send("<h1>Page non trouvée</h1>")})


module.exports = router;