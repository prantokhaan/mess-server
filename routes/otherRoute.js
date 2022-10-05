const express = require("express");
const router = express.Router();
const Other = require("../models/otherModel");

router.get("/getAllOthers", async (req, res) => {
  try {
    const other = await Other.find();
    res.send(other);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addOther", async (req, res) => {
  try {
    const newOther = new Other(req.body);
    await newOther.save();
    res.send("Other Cost added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/editOther", async (req, res) => {
  try {
    const other = await Other.findOne({ _id: req.body._id });
    other.name = req.body.name;
    other.amount = req.body.amount;
    other.date = req.body.date;

    await other.save();

    res.send("other cost updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/deleteOther", async (req, res) => {
  try {
    await Other.findOneAndDelete({ _id: req.body.otherId });

    res.send("Other cost deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
