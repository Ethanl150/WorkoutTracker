const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    sets: Number,
    reps: Number,
    distance: Number
})

// name, type, weight, sets, reps, and duration of exercise DISTANCE

const Exercise = mongoose.model("Exercise", ExerciseSchema)
module.exports = Exercise;