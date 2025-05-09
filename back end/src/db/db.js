const mongoose = require('mongoose')

const DB = async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`)
            .then(() => console.log('Connected to MongoDB'))

    } catch (error) {
        console.log("db is not canact", error);

    }
}

module.exports = DB