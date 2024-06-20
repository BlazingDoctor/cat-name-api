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

app.post("/expenses", async function (request, response) {
  const data = request.body;

  try {
    let newCat = new model.Expense({
      name: data.name,
      count: data.count,
    });
    let error = newCat.validateSync();
    if (error) {
      response.status(400).send(error);
      return;
    }
    await newCat.save();
    response.status(204).json(newCat);
  } catch (error) {
    response.status(400).send(error);
  }
});
app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
