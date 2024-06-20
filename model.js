const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://DoctorBlaze:docmongo@cluster0.bwnxa0p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const CatSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "cat(s) must be named."],
  },
  amount: {
    type: Number,
    required: [true, "cat number must an amount."],
  },
});

const Cats = mongoose.model("Schema", CatSchema);

module.exports = {
  Cats: Cats,
};
