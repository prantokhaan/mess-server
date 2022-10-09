const mongoose = require("mongoose");

const bazarSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);
const bazarModel = mongoose.model("bazar", bazarSchema);
module.exports = bazarModel;
