const express = require("express");
const router = express.Router();
const Bazar = require("../models/bazarModel");

router.get("/getAllBazars", async (req, res) => {
  try {
    const bazar = await Bazar.find();
    res.send(bazar);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addBazar", async (req, res) => {
  try {
    const newBazar = new Bazar(req.body);
    await newBazar.save();
    res.send("Bazar Date added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/editBazar", async (req, res) => {
  try {
    const bazar = await Bazar.findOne({ _id: req.body._id });
    bazar.name = req.body.name;
    bazar.date = req.body.date;

    await bazar.save();

    res.send("Bazar Date updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/deleteBazar", async (req, res) => {
  try {
    await Bazar.findOneAndDelete({ _id: req.body.bazarId });

    res.send("bazar deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
