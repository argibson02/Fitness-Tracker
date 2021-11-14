const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    required: "Enter a name for your workout."
    // c + w
  },
  type: {
    type: String,
    required: "Enter the type of exercise that you have preformed."
    // c + w
  },
  date: {
    type: Date,
    default: Date.now
  },
  distance: {
    type: Number,
    // C
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  duration: {
    type: Number,
    required: true
    // c + w
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
