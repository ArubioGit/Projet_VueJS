<template>
    <div class="main-container-item">
        <li> 
            <v-card class="v-card">
                <div class="movie-container">
                    <v-img
                        width="140px"
                        height="209px"
                        :src="movieitem.poster"
                    />

                    <div class="detail-container">
                        <v-card-title>
                            <div>
                                <h3 style="font-size: large;">{{movieitem.title.substring(0, 24)}}</h3>
                                <p><b>Genre</b> : {{movieitem.genre}}</p>
                                <p><b>Réalisateur</b> : {{movieitem.director.name}}</p>
                                <p><b>Synopsis</b> : {{movieitem.synopsis.substring(0, 130)+'...'}}</p>
                                <star-rating :rating="movieitem.note"></star-rating>
                            </div>
                        </v-card-title>
                    </div>
                </div>

                <div>
                    <v-card-actions class="action-container">
                        <v-btn color='error' v-on:click='deleteMovie(movieitem.id)'>Supprimer</v-btn>
                        <router-link :to="{path: '/movie/' + movieitem.id + '/edit', params: { id: movieitem.id }}"> 
                            <v-btn color='warning'>Modifier</v-btn> 
                        </router-link>
                        <router-link :to="{path: '/movie/' + movieitem.id, params: { id: movieitem.id }}"> 
                            <v-btn color='primary'>Détails</v-btn> 
                        </router-link>
                    </v-card-actions>
                </div>
            </v-card>
        </li> 
        <br/>
    </div>
</template>

<script>
export default {
    props: ['movieitem'],

    methods: {
        deleteMovie: function (id) {
			this.$store.dispatch('deleteOneMovie', id)
        },
        saveMovie: function(event){
            this.$emit('save')
        }
    }
}
</script>

<style lang="css">

    .main-container-item {
        margin: 20px; 
    }
	.movie-container {
		display: flex;
	}

    .detail-container {
        margin-top: 0;
        max-width: 210px;
        min-height: 309px;
    }
    .detail-container > div > div > p {
        margin-bottom: 0;
    }

    .action-container {
        display: flex;
        justify-content: space-between;
    }

    .v-card {
        border-radius: 18px;
    }
</style>