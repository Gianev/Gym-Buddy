const Cardio = require("../models/cardioModel");
const mongoose = require("mongoose");

// Get all runs
const getRuns = async (req, res) => {
  const run = await Cardio.find({}).sort({ createdAt: -1 });

  res.status(200).json(run);
};

// Get specific run
const getRun = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const run = await Cardio.findById(id);

  if (!run) {
    return res.status(404).json({ error: "Could not find run" });
  }
  res.status(200).json(run);
};

// Record a new run
const createRun = async (req, res) => {
  const { distance, time } = req.body;

  try {
    const run = await Cardio.create({ distance, time });
    res.status(200).json(run);
  } catch (error) {
    res.status(400).json({ error: "Unable to record a new run" });
  }
};

// Delete a previous run
const deleteRun = async (req, res) => {
  const { id } = req.params;

  // check if ID is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const run = await Cardio.findByIdAndDelete(id);

  if (!run) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  res.status(200).json(run);
};

// Update a previous run
const updateRun = async (req, res) => {
  const { id } = req.params;

  // check if ID is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const run = await Cardio.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!run) {
    return res.status(404).json({ error: "Could not find run" });
  }

  res.status(200).json(run);
};

module.exports = {
  getRuns,
  getRun,
  createRun,
  deleteRun,
  updateRun,
};
