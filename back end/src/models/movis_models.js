const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 'Documentary', 'Other'],
        default: 'Other'
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        url: {
            type: String,
            required: true
        }
    },
    releaseDate: {
        type: Date
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    }
}, {
    timestamps: true
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
