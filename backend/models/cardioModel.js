const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema(
  {
    distance: {
      type: Number,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cardio", cardioSchema);
