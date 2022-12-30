const express = require("express");
const { DoIt } = require("../DB/Database");
const router = express.Router();

router.post("/addcomment", async (req, res) => {
  const body = req.body;
  const result = DoIt.collection("comments").insertOne(body);
  if (result.acknowledged) {
    return res.send({ status: true, message: "Operation successful" });
  }
  return res.send({ status: false, message: "Operation Failed" });
});
module.exports = router;
