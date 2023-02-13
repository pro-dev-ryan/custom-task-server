const express = require("express");
const { DoIt } = require("../DB/Database");
const router = express.Router();

router.get("/getdone", async (req, res) => {
  const filter = { status: true };
  const result = await DoIt.collection("task").find(filter).toArray();
  if (result?.length >= 1) {
    return res.send({ status: true, result });
  }
  return res.send({ status: false, message: "No task has been completed yet" });
});

module.exports = router;
