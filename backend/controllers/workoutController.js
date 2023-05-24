const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// Get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// Get specific workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "Could not find workout" });
  }

  res.status(200).json(workout);
};

// Create workout
const createWorkout = async (req, res) => {
  const { title, sets, reps, weight } = req.body;

  try {
    const workout = await Workout.create({ title, sets, reps, weight });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const workout = await Workout.findByIdAndDelete(id);

  if (!workout) {
    return res.status(404).json({ error: "Could not find workout" });
  }

  res.status(200).json(workout);
};

// Update workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    return res.status(404).json({ error: "Could not find workout" });
  }

  res.status(200).json(workout);
};

module.exports = {
  getWorkout,
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
