const mongoose = require("mongoose")
require('dotenv').config()

mongoose.connect(`${process.env.MONGODB_URL}${process.env.DB_NAME}`)
// console.log(`${process.env.MONGODB_URL}${process.env.DB_NAME}`)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        dafault: false
    }
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = {
    Todo
}