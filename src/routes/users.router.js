const userController = require('../controllers/user.controller');

const userRouter = require('express').Router();

// Autre façon d'écrire les routes, plutot utilisé en API. permet de definir la route et ensuite toutes les méthodes sur cette route (evite la redondance)
// router.route("users?")
// .get(()=>{})
// .post(()=>{})

// router.route("/users?:id")
// .get(()=>{})
// .patch(()=>{})
// .put(()=>{})
// .delete(()=>{})

//fonctionne avec user et users
userRouter.get("/", userController.getUser)

userRouter.post("/", userController.postUser)

    //sinon je redirige
    // res.redirect("/user?/42")

//Route dynamique en recuperant :id en parametre
userRouter.get("/:id([0-9]+)", userController.getUserById)

module.exports = userRouter;