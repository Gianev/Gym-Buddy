const express = require("express");
const Cardio = require("../models/cardioModel");

const {
  createRun,
  deleteRun,
  getRuns,
  getRun,
  updateRun,
} = require("../controllers/cardioController");

const router = express.Router();

// Get all runs
router.get("/", getRuns);

// Get specific run
router.get("/:id", getRun);

// Record a new run
router.post("/", createRun);

// Delete a previous run
router.delete("/:id", deleteRun);

// Update a previous run
router.patch("/:id", updateRun);

module.exports = router;
