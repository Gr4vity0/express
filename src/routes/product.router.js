const productRouter = require('express').Router();

productRouter.get("/", (req, res) => {
    res.writeHead(200, {"content-type": "application/json"});
    res.end(JSON.stringify({ 
        products: [
            {
                id: 1,
                name: "T-shirt",
                price: 10
            }
        ]
    }));
});

    productRouter.post("/", (req, res) => {
    res.send("<h1>POST </h1>")})
//Route dynamique en recuperant :id en parametre
productRouter.get("/:id([0-9]+)", (req, res) => {
    res.send("<h1>Produit dont l'id est : " + " " + req.params.id + " </h1>" )})

module.exports = productRouter;