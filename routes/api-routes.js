const Workout = require("../models/index");

//getLastWorkout
app.get("/api/workouts", (req, res) => {
  db.Workout.find({}, (err, lastWorkout) => {
    if (err) {
      console.log(err);
    } else {
      res.json(lastWorkout);
    }
  });
});

//addExercise
/* app.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body, (err, addExercise) => {
    if (err) {
      console.log(err);
    } else {
      res.json(addExercise);
    }
  });
}); */

//createWorkout
/* app.post("/api/workouts", (req, res) => {
    db.Workout
}); */

//getWorkoutsInRange
/* app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}, (err, range) => {
        if(err) {
            console.log(err)
        } else {
            res.json(range)
        }
    })
}); */
