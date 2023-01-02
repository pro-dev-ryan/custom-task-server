const express = require("express");
const { DoIt } = require("../DB/Database");
const router = express.Router();

router.get(`/getpost/:email`, async (req, res) => {
  const email = req.params.email;
  const cursor = { email: email };
  const result = await DoIt.collection("task").find(cursor).toArray();
  if (result.length >= 1) {
    return res.send({ status: true, result });
  }
  return res.send({ status: false, message: "No result Found" });
});

module.exports = router;
