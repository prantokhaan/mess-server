const express = require("express");
const router = express.Router();
const Deposit = require("../models/depositModel");

router.get("/getAllDeposits", async (req, res) => {
  try {
    const deposit = await Deposit.find();
    res.send(deposit);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addDeposit", async (req, res) => {
  try {
    const newDeposit = new Deposit(req.body);
    await newDeposit.save();
    res.send("Deposit added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/editDeposit", async (req, res) => {
  try {
    const deposit = await Deposit.findOne({ _id: req.body._id });
    deposit.prantoD = req.body.prantoD;
    deposit.farukD = req.body.farukD;
    deposit.opulD = req.body.opulD;
    deposit.raselD = req.body.raselD;
    deposit.mohibullahD = req.body.mohibullahD;
    deposit.kaisedD = req.body.kaisedD;

    await deposit.save();

    res.send("deposit updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

// router.post("/deleteCar", async (req, res) => {
//   try {
//     await Car.findOneAndDelete({ _id: req.body.carId });

//     res.send("car deleted successfully");
//   } catch (error) {
//     return res.status(400).json(error);
//   }
// });

module.exports = router;
