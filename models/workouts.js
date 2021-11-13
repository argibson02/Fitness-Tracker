const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for your workout."
    // c + w
  },
  type: {
    type: String,
    trim: true,
    required: "Enter the type of exercise that you have preformed."
    // c + w
  },
  date: {
    type: Date,
    default: Date.now
  },
  distance: {
    type: Number,
    trim: true,
    // C
  },
  weight: {
    type: Number,
    trim: true,
  },
  sets: {
    type: Number,
    trim: true,
  },
  reps: {
    type: Number,
    trim: true,
  },
  duration: {
    type: Number,
    trim: true,
    required: true
    // c + w
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
