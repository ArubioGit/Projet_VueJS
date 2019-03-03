import Vue from 'vue'
import app from './app.vue'
import router from './routes.js'
import MovieItem from './components/movie-item.vue'
import store from './store.js'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import StarRating from './components/utils/star-rating.vue'

Vue.use(Vuetify, {

})

Vue.component('movie-item',MovieItem)
Vue.component('star-rating', StarRating)

new Vue({
    el: '#app',
    store : store,
    render : h => h(app),
    router : router,
    mounted() {
        this.$store.dispatch('getAllMovies')
        if (this.$route.params.id) {
            this.$store.dispatch('getOneMovie', this.$route.params.id)
        }
    }
})