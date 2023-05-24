require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const cardioRoutes = require("./routes/cardio");

const app = express();

app.use(express.json());

// log any requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// ROUTES
app.use("/api/workouts", workoutRoutes);
app.use("/api/cardio", cardioRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db. Listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

process.env;
