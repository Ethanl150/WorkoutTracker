const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path")

const PORT = process.env.PORT || 3000;

const db = require("./models");
// const Exercise = require("./models/exerciseModel");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

app.get("/", (req, res) => {
    res.render("index.html")
})

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "public/stats.html"))
    // res.sendFile(path.join(__dirname, '../public', 'index1.html'));
})

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "public/exercise.html"))
})

app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, data) => {
        res.json(data)
    })
})

app.post("/api/workouts", (req, res) => {
    console.log(req.body)
    db.Workout.create(req.body, (err, data) => {
        if (err) throw err;
        res.json(data)
    })
})

app.put("/api/workouts/:id", (req, res) => {
    db.Workout.update({_id: mongoose.Types.ObjectId(req.params.id)}, {$push: {exercises: req.body}}, (err, data) => {
        if (err) throw err;
        res.json(data)
    })
})

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}, (err, data) => {
        res.json(data)
    })
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });