<template>
    <div style="width:70%; margin-left: auto; margin-right: auto; padding-top: 50px; padding-bottom: 50px;">

        <h1>Liste des films</h1>

        <p>Nombre de films : {{movies.length}}</p>

        <router-link :to="{path: '/addMovie'}"> 
			<v-btn color='primary'>Ajouter un film</v-btn> 
		</router-link>

        <v-text-field type="text" label='Rechercher un film :' v-model="search" style="width:25%;"/>
        <ul style="display: flex; justify-content: center; flex-wrap: wrap; list-style: none">
            <movie-item v-for="(movie) in movies_search" v-bind:key="movie.title" v-bind:movieitem="movie" v-on:edit="edit(movie)"></movie-item>
        </ul>

    </div>
</template>

<script>

export default {

    created: function() {
        this.$store.dispatch('getAllMovies')
    },

    data() {
        return {
            search: ""
        }
    },

    computed: {
        movies: function() {
            return this.$store.state.movies
        },
        movies_search: function() {
            return this.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!=-1)
        }
    }
}
</script>

<style>

</style>
