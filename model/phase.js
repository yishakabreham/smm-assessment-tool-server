const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhaseSchema = new Schema({
  phase_id: {
    required: true,
    type: Number,
  },
  name: {
    required: false,
    type: String,
  },
  description: {
    required: false,
    type: String,
  },
  practice: [
    {
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
          sub_practice_id: {
            type: Number,
          },
          description: {
            type: String,
          },
          evolution_level: {
            type: Number,
          },
          remark: {
            type: String,
          },
        },
      ],

      remark: {
        require: false,
        type: String,
      },
    },
  ],
  remark: {
    required: false,
    type: String,
  },
});

const Phase = mongoose.model("phase", PhaseSchema);
module.exports = Phase;
