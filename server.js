const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const databaseUrl = "workout";
const collections = ["exercise"];
const db = mongojs(databaseUrl, collections);

const app = express();
//morgan comes before any app.use
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


db.on("error", error => {
    console.log("Database Error:", error);
  });







app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
  