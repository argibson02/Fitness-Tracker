const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for your workout"
    // c + w
  },
  value: {
    type: Number,
    required: "Enter the amount that you did for this workout."
    // c + w
  },
  date: {
    type: Date,
    default: Date.now
  },

  type: {
    type: String,
    trim: true,
    required: true

  },
  name: {
    type: String,
    trim: true,
    required: true

  },
  distance: {
    type: String,
    trim: true,
    // C
  },
  weight: {
    type: String,
    trim: true,
  
  },
  sets: {
    type: String,
    trim: true,
  
  },
  reps: {
    type: String,
    trim: true,
  
  },
  duration: {
    type: String,
    trim: true,
    required: true
    // c + w
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
