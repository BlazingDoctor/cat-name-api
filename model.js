const mongoose = require("mongoose");

mongoose
  .connect
  //fix later
  ();

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

const Cats = mongoose.model("JournalEntry", CatSchema);

module.exports = {
  Cats: Cats,
};
