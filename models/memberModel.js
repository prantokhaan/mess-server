const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    meal: { type: Number, required: true },
    deposit: { type: Number, required: true }, 
  },
  { timestamps: true }
);
const memberModel = mongoose.model("member", memberSchema);
module.exports = memberModel;
