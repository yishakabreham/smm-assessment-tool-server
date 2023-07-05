const express = require("express");
const Phase = require("../model/phase");
const BaseTransaction = require("../model/transaction/baseTransaction");
var ProjectAPI = require("../model/transaction/fetching");

const router = express.Router();

//Post Method
router.post("/post", async (req, res) => {
  const data = new Phase({
    phase_id: req.body.phase_id,
    name: req.body.name,
    description: req.body.description,
    practice: req.body.practice,
    remark: req.body.remark,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/postTransaction", async (req, res) => {
  const data = new BaseTransaction({
    projectName: req.body.projectName,
    projectClient: req.body.projectClient,
    projectStartDate: req.body.projectStartDate,
    projectEndDate: req.body.projectEndDate,
    projectRemark: req.body.projectRemark,
    bufferList: req.body.bufferList,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Phase.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getAllProjects", async (req, res) => {
  try {
    const data = await BaseTransaction.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("get");

//Get by ID Method
router.post("/getProject", async (req, res) => {
  try {
    const base = await BaseTransaction.findById(req.body.id);
    res.json(base);
  } catch (err) {
    console.log("Error");
  }
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

// Add a new document to the collection
router.post("/postPhase", async (req, res) => {
  let collection = await db.collection("phase");
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

module.exports = router;
