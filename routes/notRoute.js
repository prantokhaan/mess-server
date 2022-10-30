const express = require("express");
const router = express.Router();
const Not = require("../models/notModel");

router.get("/getAllNots", async (req, res) => {
  try {
    const not = await Not.find();
    res.send(not);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addNot", async (req, res) => {
  try {
    const newNot = new Not(req.body);
    await newNot.save();
    res.send("Notification added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/editNot", async (req, res) => {
  try {
    const not = await Not.findOne({ _id: req.body._id });
    not.name = req.body.name;
    not.date = req.body.date;

    await not.save();

    res.send("Notification updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/deleteNot", async (req, res) => {
  try {
    await Not.findOneAndDelete({ _id: req.body.notId });

    res.send("Notification deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/updateStatus", async (req, res) => {
  try {
    await Not.findOne({ _id: req.body.notId });
    const newStatus = req.body;
    const options = { upsert: true };
    const updateStatus = {
      $set: {
        status: newStatus[0],
      },
    };
    await not.save();

    res.send("Notification updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
})

module.exports = router;
