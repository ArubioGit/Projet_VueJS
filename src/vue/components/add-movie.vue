<template lang="html">
    <div class="form-edit-content">
        <div class="main-container">
            <h1>Ajouter un film</h1>
            <hr>
            <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                    label="Nom du film "
                    v-model="movieToAdd.title"
                    :rules="requiredValidation"
                    required
                ></v-text-field>
                <v-text-field
                    label="Année de sortie "
                    v-model="movieToAdd.year"
                    :rules="yearValidation"
                    required
                ></v-text-field>
                <v-text-field
                    label="Nom du réalisateur "
                    v-model="movieToAdd.director.name"
                    :rules="requiredValidation"
                    required
                ></v-text-field>
                <v-text-field
                    label="Date de naissance du réalisteur "
                    v-model="movieToAdd.director.birthDate"
                    :rules="birthValidation"
                    required
                ></v-text-field>
                <v-text-field
                    label="Nationalité du réalisateur "
                    v-model="movieToAdd.director.nationality"
                    :rules="requiredValidation"
                    required
                ></v-text-field>
                <v-select
                    :items="items"
                    label="Genre du film "
                    v-model="movieToAdd.genre"
                    :rules="[input => !!input || 'Merci de sélectionner un genre']"
                    append-icon
                    required
                ></v-select>
                <v-text-field
                    name="note"
                    label="Note sur 5"
                    v-model="movieToAdd.note"
                    :rules="noteValidation"
                ></v-text-field>

                <v-text-field
                    name="synopsis"
                    v-model="movieToAdd.synopsis"
                    label="Synopsis"
                    textarea
                    style="margin-top: 10px;"
                ></v-text-field>
                <br>
                <v-btn color='primary'
                        @click="submit"
                        :disabled="!valid"
                >
                    Ajouter !
                </v-btn>
                <v-btn @click="backToHome" color='error'>Annuler</v-btn>
            </v-form>
        </div>
    </div>
</template>

<script>

    export default {
        
        data: () => ({
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

            movieToAdd : {
                title: '',
                year: '',
                language: '',
                note: 0,
                genre: null,
                director : {
                    name: '',
                    birthDate: '',
                    nationality: ''
                },
                synopsis: '',
                poster: ''
            },

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
        }),

        methods: {
            submit() {
                if (this.$refs.form.validate()) {

                    const movie = {
                        title: this.movieToAdd.title,
                        year: this.movieToAdd.year,
                        genre: this.movieToAdd.genre,
                        note: this.movieToAdd.note,
                        synopsis: this.movieToAdd.synopsis,
                        poster: this.movieToAdd.poster ? this.movieToAdd.poster : '/../../static/poster/no_poster.jpg'
                    }

                    movie.director = {
                        name: this.movieToAdd.director.name,
                        birthDate: this.movieToAdd.director.birthDate,
                        nationality: this.movieToAdd.director.nationality
                    }

                    this.$store.dispatch('addNewMovie', movie)
                        .then( (res) => {
                            console.log('réponse', res)
                            this.$router.push({ path: `/movie/${res.id}`, params: { id: res.id } })
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

</style>
