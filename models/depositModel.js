const mongoose = require("mongoose");

const depositSchema = new mongoose.Schema(
  {
    prantoD: { type: Number, required: true },
    farukD: { type: Number, required: true },
    opulD: { type: Number, required: true },
    raselD: { type: Number, required: true },
    mohibullahD: { type: Number, required: true },
    kaisedD: { type: Number, required: true },
    
  },
  { timestamps: true }
);
const depositModel = mongoose.model("deposit", depositSchema);
module.exports = depositModel;
