const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
  name: {
    type: String,
  },
  roll: {
    type: String,
    required: [true, "Roll field is required"],
  },
  present: {
    type: Boolean,
    deafult: true,
  },
});

const Result = mongoose.model("student", ResultSchema);

module.exports = Result;
