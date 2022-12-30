const express = require("express");
const { DoIt } = require("../DB/Database");
const router = express.Router();

router.get("/getpost", async (req, res) => {
  const mail = req.params.email;
  const cursor = { mail: mail };
  const result = DoIt.collection("task").find(cursor).toArray();
  if (result) {
    return res.send({ status: true, result });
  }
  return res.send({ status: false, message: "No result Found" });
});

module.exports = router;
