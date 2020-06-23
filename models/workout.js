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
            trim: true,
            required: "Please enter an exercise type."
        },
        name: {
            type: String,
            trim: true,
            required: "Please enter the exercise name."
        },
        weight: Number,
        sets: Number,
        reps: Number,
        distance: Number,
        duration: Number
    }]
})

workoutSchema.methods.workoutComplete = function() {
    //not sure yet what to do with this
}

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;