const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {

    },
    exercises: [{
        type: {

        },
        name: {

        },
        weight: {

        },
        sets: {

        },
        reps: {

        },
        distance: {

        },
        duration: {

        }
    }
    ]
})



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;