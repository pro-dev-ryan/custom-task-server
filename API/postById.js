const express = require("express");
const { ObjectId } = require("mongodb");
const { DoIt } = require("../DB/Database");
const router = express.Router();

router.get("/getpost/single/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: ObjectId(id) };
  const result = await DoIt.collection("task").findOne(filter);
  if (result) {
    return res.send({ status: true, result });
  }
  return res.send({ status: false, message: "No Task Found" });
});

module.exports = router;
