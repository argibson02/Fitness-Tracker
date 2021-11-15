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
            required: "Please enter a duration for your exercise.",
            validate: [({ VALUE }) => VALUE >= 0, "Must be a positive number."]
            // Resistance & Cardio
        },
        distance: {
            type: Number,
            validate: [({ VALUE }) => VALUE >= 0, "Must be a positive number."]
            // Cardio
        },
        weight: {
            type: Number,
            validate: [({ VALUE }) => VALUE >= 0, "Must be a positive number."]
            // Resistance
        },
        reps: {
            type: Number,
            validate: [({ VALUE }) => VALUE >= 0, "Must be a positive number."]
            // Resistance
        },
        sets: {
            type: Number,
            validate: [({ VALUE }) => VALUE >= 0, "Must be a positive number."]
            // Resistance
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
