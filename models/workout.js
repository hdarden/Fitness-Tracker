const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

})



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;