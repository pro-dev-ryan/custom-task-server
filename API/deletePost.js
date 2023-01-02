const express = require("express");
const { ObjectId } = require("mongodb");
const { DoIt } = require("../DB/Database");
const router = express.Router();

router.delete("/getpost", async (req, res) => {
  const id = req.query.id;
  const cursor = { _id: ObjectId(id) };
  const result = DoIt.collection("task").deleteOne(cursor);
  if (result?.deletedCount) {
    res.send({ status: true, message: "Task Deleted" });
  }
  return res.send({ status: false, message: "Operation Failed, Try again" });
});

module.exports = router;
