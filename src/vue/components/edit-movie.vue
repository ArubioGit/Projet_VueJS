<template lang="html">
    <div class="main-container">
        <div class="form-edit-content">
            <h1>Modification d'un film</h1>
            <hr>
            <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                    label="Nom du film "
                    v-model="movie.title"
                    :rules="requiredValidation"
                    required
                ></v-text-field>
                <v-text-field
                    label="Année de sortie "
                    v-model="movie.year"
                    :rules="yearValidation"
                    required
                ></v-text-field>
                <v-text-field
                    label="Nom du réalisteur "
                    v-model="movie.director.name"
                    :rules="requiredValidation"
                    required
                ></v-text-field>
                <v-text-field
                    label="Date de naissance du réalisteur "
                    v-model="movie.director.birthDate"
                    :rules="birthValidation"
                    required
                ></v-text-field>
                <v-text-field
                    label="Nationalité du réalisateur "
                    v-model="movie.director.nationality"
                    :rules="requiredValidation"
                    required
                ></v-text-field>
                <v-select
                    label="Genre du film "
                    v-model="movie.genre"
                    :items="items"
                    :rules="[input => !!input || 'Merci de sélectionner un genre']"
                    append-icon
                    required
                ></v-select>
                <v-text-field
                    name="note"
                    label="Note sur 5"
                    v-model="movie.note"
                    :rules="noteValidation"
                ></v-text-field>
                <v-text-field
                    name="synopsis"
                    label="Synopsis"
                    v-model="movie.synopsis"
                    textarea
                ></v-text-field>
                <br>
                <v-btn color='primary'
                    @click="submit"
                    :disabled="!valid"
                >
                    Confirmer
                </v-btn>
                <v-btn @click="backToHome" color='error'>Annuler</v-btn>
            </v-form>
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
                id: this.$route.params.id,
                valid: true,
                items: [
                    'Action',
                    'Guerre',
                    'Drame',
                    'Animation',
                    'Aventure',
                    'Comédie',
                    'Péplum',
                    'Thriller',
                    'Boxe'
                ],
                birthValidation: [
                    input => !!input || 'La date doit être au format jj/mm/aaaa',
                    input => /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(input) || 'La date doit être au format jj/mm/aaaa'
                ],
                yearValidation: [
                    input => !!input || "L'année doit être au format yyyy",
                    input => /[0-9]{4}/.test(input) || "L'année doit être au format yyyy"
                ],
                requiredValidation: [
                    input => !!input || "Ce champ est requis.",
                ],
                noteValidation: [
                    input => !!input || 'La note doit être comprise entre 0 et 5',
                    input => /[0-5]{1}/.test(input) || 'La note doit être comprise entre 0 et 5'
                ]
            }
        },

        computed: {
            movie: function() {
                return this.$store.state.currentMovie
            }
        },

        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    if (this.movie.synopsis.length === 0) {
                        this.movie.synopsis = "Aucun synopsis"
                    }
                    const movie = {
                        id: this.movie.id,
                        title: this.movie.title,
                        year: this.movie.year,
                        genre: this.movie.genre,
                        note: this.movie.note,
                        synopsis: this.movie.synopsis,
                        poster: this.movie.poster,
                    }

                    movie.director = {
                        name: this.movie.director.name,
                        birthDate: this.movie.director.birthDate,
                        nationality: this.movie.director.nationality
                    }

                    this.$store.dispatch('updateOneMovie', movie)
                        .then( () => {
                            this.$router.push({ path: `/movie/${this.movie.id}`, params: { id: this.movie.id } })
                        }
                    )
                }
            },
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

    .form-edit-content hr {
        margin-bottom: 20px;
    }

    .form-edit-content input[type="file"] {
        display: none;
    }
</style>
