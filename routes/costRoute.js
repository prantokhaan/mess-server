const express = require("express");
const router = express.Router();
const Cost = require("../models/costModel");

router.get("/getAllCosts", async (req, res) => {
  try {
    const cost = await Cost.find();
    res.send(cost);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addCost", async (req, res) => {
  try {
    const newCost = new Cost(req.body);
    await newCost.save();
    res.send("Cost added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/editCost", async (req, res) => {
  try {
    const cost = await Cost.findOne({ _id: req.body._id });
    cost.name = req.body.name;
    cost.amount = req.body.amount;
    cost.date = req.body.date;

    await cost.save();

    res.send("cost updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/deleteCost", async (req, res) => {
  try {
    await Cost.findOneAndDelete({ _id: req.body.carId });

    res.send("cost deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
