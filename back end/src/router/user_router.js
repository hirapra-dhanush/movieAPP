const express = require('express');
const user_cont = require('../controller/user_cont');
const { createMovie, getAllMovies, getMovieById, updateMovie, deleteMovie } = require('../controller/movis_cont');

const router = express.Router();

router.post('/api/movies', createMovie);
router.get('/api/movies', getAllMovies);
router.get('/api/movies/:id', getMovieById);
router.put('/api/movies/:id', updateMovie);
router.delete('/api/movies/:id', deleteMovie);





module.exports = router;