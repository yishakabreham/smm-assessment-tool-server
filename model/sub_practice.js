const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubPracticeSchema = new Schema({
  sub_practice_id: {
    require: true,
    type: Number,
  },
  description: {
    require: true,
    type: String,
  },
  evolution_level: {
    require: true,
    type: Number,
  },
  remark: {
    require: false,
    type: String,
  },
});

const SubPractice = mongoose.model("sub-practice", SubPracticeSchema);
module.exports = SubPractice;
