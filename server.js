// Run server: npm run serve
// Run app: npm run
const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const { cache } = require("ejs");
const axios = require("axios");
const libraries = require("./server/db.json");


const client = new MongoClient(process.env.MONGO_URL);
/*  //connect to Mongo DB
const db="mongodb+srv://Dmytro:d3e4m5a2@cluster0.rvkcx.mongodb.net/nodeDB?retryWrites=true&w=majority"; 

//connect to Mongo DB
mongoose.connect(db).then((res)=>console.log("Connected to DB"));
 */
//const __dirname=path.resolve();
app.listen(process.env.PORT, () => console.log(`Server Started. PORT: ${process.env.PORT}`));

app.get("/", (req, res) => {
  res.send("Hello. Server is Good!");
});

const docs = [
  { name: "cake", healthy: false },
  { name: "lettuce", healthy: true },
  { name: "donut", healthy: false },
];

const startDb = async () => {
  try {
    await client.connect();
    console.log("Connected to DB");
    //client.db().createCollection("Test for Many2");
    const eat = client.db().collection("food");
    const result = await eat.insertMany(docs);
    const User = client.db().collection("Test for Users2");
    const result2 = User.insertMany(libraries);
    console.log("Finish...");
  } catch (e) {
    console.log(e);
  }
};
startDb();
