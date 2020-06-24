const db = require("../models");

module.exports = function (app) {

  //getLastWorkout
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //addExercise
  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then();
  });

  //createWorkout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //getWorkoutsInRange
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({});
  });

  //get workout by id
  app.get("/api/workouts/:id", (req, res) => {
    db.Workout.findOne(
      {
        _id: mongojs.ObjectId(req.params.id),
      },
      (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      }
    );
  });
};
