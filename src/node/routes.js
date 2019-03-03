const express = require('express')
const path = require('path')
const router = express()
const data = require('../data/data')

const multer = require('multer')
const cors = require('cors')
const upload = multer({ dest: './src/static/poster/' })
const fs = require("fs")

router.use(express.json())

router.use('/static', express.static(path.join(__dirname + '/../static')))

const movies = data.movies 

const type = upload.single('file')

router.get('/src/dist/build.js', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/build.js'))
})

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../../index.html'))
})


router.get('/movies', (req, res) => {
    res.json(movies)
})

router.get('/movies/:id', (req, res) => {
    let movie = movies.find(movie => movie.id == req.params.id)
    if (movie !== null) {
        res.json(movie)
    } 
    else {
        res.status(404)
        res.json({error: "resource not found"})   
    }
})

router.delete('/movie/:id', (req, res) => {
    if(req.params.id) {
        for(var i = 0; i < movies.length; i++) {
            if(movies[i].id == req.params.id) {
                movies.splice(i, 1)
                break
            }
        }
        res.json(movies)
    } 
    else {
        res.status(404)
        res.json({error: "resource not found"})
    }
})

router.put('/movies/edit', (req, res) => {
    console.log('server edit', req.body)
    let movie = req.body
    if(movies.findIndex(m => movie.id === m.id) !== -1) {
        movies.splice(movies.findIndex(m => movie.id === m.id), 1, movie)
        res.json(movies)
    } 
    else {
        res.status(404)
        res.json({error: "resource not found"})
    }
})

router.put('/movies', (req, res) => {
    let movie = req.body
    let id = null
    do {
        id = Math.random().toString(36).slice(2)
    } while (movies.some(movie => movie.id === id))
    movie.id = id
    movies.push(movie)
    res.status(200)
    res.json(movie)
})

router.post('/movies/upload', type, (req, res) => {
    if (!req.file) {
        return res.send({
            success: false
        })
    } 
    else {
        const extension = req.file.originalname.split(".").reverse()[0]
        const filename = req.file.originalname.split(".")[0] + "_" + req.body.movieId + "." + extension
        const newPath = req.file.destination + filename

        let index = movies.findIndex(m => m.id == req.body.movieId)
        if(index !== -1) {
            movies[index].poster = "/../../static/poster/" + filename
            fs.rename(req.file.path, newPath,
                err => {
                    if (err) {
                        throw (err)
                    }
                }
            )
            res.status(200)
            res.json(movies)
        }
        else {
            res.status(404)
            res.json({error: "resource not found"})
        }
    }
})

module.exports = router