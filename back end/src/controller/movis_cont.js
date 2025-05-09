const Movie = require('../models/movis_models');
const { ErrorHandler } = require('../middlewares/ErrorMiddl');
const catchAsyncError = require('../middlewares/catchAsyncError')

const createMovie = catchAsyncError(async (req, res, next) => {
    const movie = new Movie(req.body);
    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
});

const getAllMovies = catchAsyncError(async (req, res, next) => {
    const movies = await Movie.find();
    res.status(200).json(movies);
});

const getMovieById = catchAsyncError(async (req, res, next) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        return next(new ErrorHandler("Movie not found", 404));
    }
    res.status(200).json(movie);
});

const updateMovie = catchAsyncError(async (req, res, next) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!movie) {
        return next(new ErrorHandler("Movie not found", 404));
    }
    res.status(200).json(movie);
});

const deleteMovie = catchAsyncError(async (req, res, next) => {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
        return next(new ErrorHandler("Movie not found", 404));
    }
    res.status(200).json({ message: 'Movie deleted successfully' });
});

module.exports = {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovie
};
