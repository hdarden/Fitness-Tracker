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
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $push: {
          exercises: req.body,
        },
      }
    ).then((dbWorkout) => {
      res.json(dbWorkout);
    });
  });

  //createWorkout
  app.post("/api/workouts", ({ body }, res) => {
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
    const blankArr = []
    db.Workout.findOne(
      {
      "exercises.weight": { $gte: 100},
      "exercises.weight": { $lte: 400},
    })
    .then((dbWorkout) => {
      console.log(dbWorkout)
      blankArr.push(dbWorkout)
      res.json(blankArr)

    })
  });

  //get workout by id
  app.get("/api/workouts/:id", (req, res) => {
    db.Workout.findOne(
      {
        _id: req.params.id,
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
