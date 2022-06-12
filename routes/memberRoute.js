const express = require("express");
const router = express.Router();
const Member = require("../models/memberModel");

router.get("/getAllMembers", async (req, res) => {
  try {
    const member = await Member.find();
    res.send(member);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addMember", async (req, res) => {
  try {
    const newMember = new Member(req.body);
    await newMember.save();
    res.send("Member added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/editMember", async (req, res) => {
  try {
    const member = await Member.findOne({ _id: req.body._id });
    member.name = req.body.name;
    member.meal = req.body.meal;
    member.deposit = req.body.deposit;

    await member.save();

    res.send("member updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/deleteMember", async (req, res) => {
  try {
    await Member.findOneAndDelete({ _id: req.body.carId });

    res.send("Member deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
