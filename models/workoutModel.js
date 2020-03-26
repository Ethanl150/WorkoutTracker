const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now(),
        required: true
    },
    exercises: [{
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        weight: Number,
        sets: Number,
        reps: Number,
        distance: Number
    }]
})

// name, type, weight, sets, reps, and duration of exercise DISTANCE

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;