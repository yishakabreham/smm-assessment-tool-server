const mongoose = require("mongoose");
const SubPractice = require("./sub_practice");
const Schema = mongoose.Schema;

const PracticeSchema = new Schema({
  practice_id: {
    require: true,
    type: Number,
  },
  description: {
    require: true,
    type: String,
  },
  sub: [
    {
      sub_id: { type: Number },
      description: { type: String },
      evolution_level: { type: Number },
      remark: { type: String },
    },
  ],

  remark: {
    require: false,
    type: String,
  },
});

const Practice = mongoose.model("practice", PracticeSchema);
module.exports = Practice;
