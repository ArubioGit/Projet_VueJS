# Projet_VueJS

## ANTHONY RUBIO DAWIN ALT - anthony.rubio@etu.u-bordeaux.fr

## Lancer le projet

Se placer à la racine du projet et éxécuter la commande suivante :

`npm install && node_modules/.bin/webpack --progress --hide-modules && node src/node/app.js`

Le site est alors disponible sur localhost:8080 (de même que le serveur)

Lien du site : http://localhost:8080/#/

## Note sur Vuex

Étant habitué à manipuler un state en React ainsi que Redux pour son store, j'ai opté pour le gestionnaire d'état Vuex afin de géré le state de mon application grâce au store Vuex.

La documentation de Vuex est disponible ici : 
https://vuex.vuejs.org/fr/

## Note sur le composant stars-rating

Pour gérer les étoiles pour la notation, j'ai utilisé le composant **vue-dynamic-star-rating** (disponible ici https://github.com/JonathanDn/vue-stars-rating) dont j'ai réalisé une copie du composant .vue associé pour le customiser afin de l'adapter à mon besoin.

**Le composant custom est localisé dans src/vue/components/utils/star-rating.vue**
