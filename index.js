const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { Database } = require("./DB/Database");
// Default MiddleWare
app.use(cors());
app.use(express.json());

// modules
const addtask = require("./API/addTask");
const getPost = require("./API/getPost");
const deleteTask = require("./API/deletePost");
const updateTask = require("./API/updatePost");
const addComment = require("./API/addComment");
app.get("/", (req, res) => {
  res.send("Up and flying");
});
app.get("/getpost:email", getPost);
app.delete("/getpost:id", deleteTask);
app.post("/addtask", addtask);
app.put("/getpost:id", updateTask);
app.post("/addcomment", addComment);

app.listen(port, () => {
  Database();
  "app is running on port", port;
});
