const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            required: "Please enter the type of exercise that you have performed."
            // Resistance & Cardio
        },
        name: {
            type: String,
            required: "Please enter a name for your exercise."
            // Resistance & Cardio
        },
        duration: {
            type: Number,
            required: "Please enter a duration for your exercise."
            // Resistance & Cardio
        },
        distance: {
            type: Number
            // Cardio
        },
        weight: {
            type: Number
            // Resistance
        },
        reps: {
            type: Number
            // Resistance
        },
        sets: {
            type: Number
            // Resistance
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
