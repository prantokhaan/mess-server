const mongoose = require("mongoose");

const costSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);
const costModel = mongoose.model("cost", costSchema);
module.exports = costModel;
