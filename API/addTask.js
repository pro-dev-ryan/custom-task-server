const express = require("express");
const { DoIt } = require("../DB/Database");
const router = express.Router();

router.post("/addtask", async (req, res) => {
  const taskData = req.body;
  const result = await DoIt.collection("task").insertOne(taskData);
  if (result?.acknowledged) {
    return res.send({ status: true, message: "Operation successful" });
  }
  return res.send({ status: false, message: "Operation Failed" });
});
module.exports = router;
