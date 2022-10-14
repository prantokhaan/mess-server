const mongoose = require("mongoose");

const notSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    data: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);
const notModel = mongoose.model("not", notSchema);
module.exports = notModel;
