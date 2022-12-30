const express = require("express");
const { ObjectId } = require("mongodb");
const { DoIt } = require("../DB/Database");
const router = express.Router();

router.put("/getpost:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const filter = { _id: ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = { $set: { body } };
  const result = DoIt.collection("task").updateOne(filter, updatedDoc, options);
  if (result.upsertedCount) {
    return res.send({ status: true, message: "Task Updated" });
  }
  return res.send({ status: false, message: "Operation Failed, Try again" });
});

module.exports = router;
