const { MongoClient } = require("mongodb");
require("dotenv").config();
const uri = process.env.db_uri;
const client = new MongoClient(uri);

const DoIt = client.db("DoIt");

const Database = () => {
  try {
    client.connect((err) => {
      if (!err) {
        console.log("db connected");
      } else {
        console.error(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { Database, DoIt };
