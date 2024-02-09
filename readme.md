# Créer un projet Express

## 1) Créer un projet Node

npm init

Structure du projet: 
- controllers -> Logique de traitement en fonction de la route et de la methode, on va renvoyer une vue (si templating) ou une reponse API (si api) avec success ou error
- middlewares -> va intercepter la requete et faire des traitments dessus (plusieurs types de middleware (app, route, error))
- models -> modeles représentants nos objets en db (en fonction du langage, mongoose si mongo, sequalize si sql (type-orm si sql en typescript)
- routes -> Definition de toutes les routes de notre application
- services -> logique d'appel db en fonction des models
- validators -> grâce à une librairie (la plus connue: yup) on definit les schemas des objets json qu'on s'attend à recevoir
- views (si en mode templating) -> vos pages de rendu html avec lib de votre choix (ejs merci)
- app.js
- .env (PORT=8080)

## 2) Installer Express
<a href="https://expressjs.com/en/starter/installing.html" target="_blank">-> Doc install express <-</a>
```
npm i express 
```
</br>
</hr>



```
npm i -D nodemon
```


### Bonus:
#### Extention gitignore par codeZombie
`en appuyant sur f1, vous permet de créer un gitignore pour le type de techno selectionnéee`