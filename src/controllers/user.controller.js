// C'est là oùu l'on aura toute la logique de gestion de la réponse
// C'est ici qu'on va apeller le(s) service(s) qui, eux, accedent à la sdb
//Ensuite, on verifie si cette tache s'est faite correctement et envoyer la bonn rep en fonction
// En mode templating, Envoyer la bonne page avec les infos dedans
// En mode API : Envoie le bon code http avec (potentiellement) la ressource liée

const userController = {
    getUser : (req, res) => {
        //Recuperer la liste des users
        //vérifier si on a obtenu no users
        // Si on a nos users, on rend le template
        res.send("<h1>Liste des utilisateurs</h1>");
        // si erruer, on rend une page d'erreur
    },

    postUser: (req, res) => {
        res.redirect("/user?/42");
    },

    getUserById: (req, res) => {
    res.send("<h1>Utilisateur dont l'id est : " + " " + req.params.id + " </h1>" )}

}

module.exports = userController;