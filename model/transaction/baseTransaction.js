const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BaseTransactionSchema = new Schema({
  projectName: {
    required: true,
    type: String,
  },
  projectClient: {
    required: true,
    type: String,
  },
  projectStartDate: {
    required: true,
    type: String,
  },
  projectEndDate: {
    required: false,
    type: String,
  },
  projectRemark: {
    required: false,
    type: String,
  },
  bufferList: [
    {
      type: {
        require: true,
        type: String,
      },
      code: {
        require: true,
        type: Number,
      },
      iL: {
        require: true,
        type: Number,
      },
    },
  ],
});

const BaseTransaction = mongoose.model(
  "baseTransaction",
  BaseTransactionSchema
);
module.exports = BaseTransaction;
