const mongoose = require("mongoose");

const notSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    data: { type: String, required: false },
    status: {type: String, required: false },
  },
  { timestamps: true }
);
const notModel = mongoose.model("not", notSchema);
module.exports = notModel;
