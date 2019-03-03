<template lang="html">
	<div class="main-container">
		<div class="movie-detail-content">
			<v-btn @click="backToHome" color='primary'>Liste des films</v-btn> 
			<h1>{{movie.title}}</h1>
			<hr>
			<v-container fluid grid-list-md>
				<img class="poster" :src="movie.poster" alt="poster">
					<div>
						<span class="property">Année de sortie : </span>{{movie.year}}<br/>
						<span class="property">Réalisateur : </span>{{movie.director.name}}<br/>
						<span class="property">Nationalité : </span>{{movie.director.nationality}}<br/>
						<span class="property">Genre du film : </span>{{movie.genre}}<br/>
						<span class="property">Note : </span>
						<star-rating :rating="movie.note"></star-rating>
					</div>
					<v-layout row class="synopsis">
						<v-flex>
							<h2>SYNOPSIS :</h2>
							<p>{{movie.synopsis}}</p>
						</v-flex>
					</v-layout>
					<div class="actions">
						<router-link :to="{path: '/movie/' + movie.id + '/edit', params: { id: movie.id }}"> 
							<v-btn color='primary'>Modifier</v-btn> 
						</router-link>
					</div>
			</v-container>
		</div>
	</div>
</template>

<script>

    export default {

		created() {
    		this.$store.dispatch('getOneMovie', this.$route.params.id)
		},
		  
        data() {
            return {
                'id' : this.$route.params.id
            }
        },
        computed: {
            movie: function() {
                return this.$store.state.currentMovie
            }
        },
        methods:{
            backToHome : function() {
				this.$router.push({ path: `/` })
			}
		}
    }
</script>

<style lang="css">

    .main-container {
        padding-top: 50px;
        padding-bottom: 50px;
        padding-left: 400px;
        padding-right: 400px;
        text-align: center;
    }

	h1 {
		margin-top: 30px;
		text-transform: uppercase;
	}

	.actions {
		margin-top: 25px;
	}

	.property {
		font-weight: bold;
	}

	.synopsis {
		margin-top: 30px !important;
	}

	.poster {
		width: 280px;
		margin-left: 1%;
		margin-top: 18px;
		margin-bottom: 18px;
	}

</style>
