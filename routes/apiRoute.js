const router = require("express").Router();
const Workout = require("../models/workouts");

// Finds all workouts
router.get('/workouts', (req, res) => {
    Workout.find({}).sort({ date: -1 })
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})


  // add a workout to an exercise
  router.put("/workouts/:?", ({ body }, res) => {
    Workout.updateOne(body)
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



  // creates a new workout
  router.post("/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



  // retrieves workout ranges
  router.get('/workouts/range', (req, res) => {
    Workout.find({}).sort({ date: -1 })
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})




module.exports = router;
