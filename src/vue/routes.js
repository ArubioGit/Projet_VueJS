import Vue from 'vue'
import VueRouter from 'vue-router'
import moviesList from './components/movies-list.vue'
import addMovieForm from './components/add-movie.vue'
import movieDetail from './components/movie-detail.vue'
import editMovieForm from './components/edit-movie.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes : [
        { 
            path: '/', 
            name:'home', 
            component: moviesList  
        },
        { 
            path: '/addMovie', 
            name:'add', 
            component: addMovieForm 
        },
        { 
            path: '/movie/:id', 
            name:'movie', 
            component: movieDetail 
        },
        { 
            path: '/movie/:id/edit', 
            name:'edit', 
            component: editMovieForm 
        }
    ]
})
