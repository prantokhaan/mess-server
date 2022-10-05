const mongoose = require("mongoose");

const otherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: String, required: true },
    person: {type: String, required: true },
  },
  { timestamps: true }
);
const otherModel = mongoose.model("other", otherSchema);
module.exports = otherModel;
