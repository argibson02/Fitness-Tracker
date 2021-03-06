const router = require("express").Router();
const Workout = require("../models/workouts");

// Finds all workouts
router.get('/api/workouts', (req, res) => {
    Workout.find({}).sort({ date: -1 })
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})


// add a workout to an exercise
router.put("/api/workouts/:id", ({ params, body }, res) => {
    console.log(params.id);
    Workout.updateOne(
        {
            _id: params.id
        },
        {
            $push: {
                exercises: body
            }
        })
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});



// creates a new workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});



// retrieves workout ranges
router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})




module.exports = router;
