import Vue from 'vue'
import Vuex from 'vuex'

const axios = require('axios')
Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        movies: [],
        currentMovie: null
    },

    mutations: {
        mountMoviesList(state, movies) {
            state.movies = movies
        },

        mountMovieDetail(state, movie) {
            state.currentMovie = movie
        },

        deleteMovie(state, id) {
            let index = state.movies.findIndex(movie => movie.id === id)
            if (index !== -1) {
                state.movies.splice(index, 1)
            }
        },

        addMovie(state, movie) {
            state.movies.push(movie)
        },

        updateMovie(state, movie) {
            state.movies.forEach( m => {
                if(m.id === movie.id){
                    return m = movie
                }
            })
        }
    },

    actions: {
        getAllMovies(context) {
            axios.get('/movies')
            .then( res => {
                context.commit('mountMoviesList', res.data)
            })
        },

        getOneMovie(context, id) {
            axios.get(`/movies/${id}`)
            .then( res => {
                context.commit('mountMovieDetail', res.data)
            })
        },

        deleteOneMovie(context, id) {
            console.log('id movie to delete', id)
            return new Promise((resolve, reject) => {
                axios.delete(`/movie/${id}`)
                    .then(() => {
                        context.commit('deleteMovie', id)
                        resolve()
                    })
                    .catch(() => {
                        reject()
                })
            })
        },

        addNewMovie(context, params) {
            return new Promise((resolve, reject) => {
                axios.put('/movies', params)
                    .then((response) => {
                        context.commit('addMovie', response.data)
                        resolve(response.data)
                    })
                    .catch(() => {
                        reject()
                    })
            })
        },

        updateOneMovie(context, params) {
            return new Promise((resolve, reject) => {
                axios.put(`/movies/edit`, params)
                    .then((response) => {
                        console.log('route success', response)
                        context.commit('updateMovie', response.data)
                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })
        }
    }
})

export default store