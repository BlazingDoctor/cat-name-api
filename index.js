const express = require("express");
const model = require("./model");
const app = express();
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());

app.get("/cats", async (request, response) => {
  // get data from mongoDB
  try {
    let cats = await model.Cats.find();
    response.json(cats);
  } catch {
    response.status(400).send("generic error");
  }
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
