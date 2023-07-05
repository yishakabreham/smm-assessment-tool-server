const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  project_id: {
    require: true,
    type: Number,
  },
  project_name: {
    require: true,
    type: String,
  },
  project_description: {
    require: true,
    type: String,
  },
  start_date: {
    require: false,
    type: Date,
  },
  end_date: {
    require: false,
    type: Date,
  },
  client: {
    require: true,
    type: String,
  },
  project_maturity: {
    require: true,
    type: String,
  },
  assessment: [
    {
      phase: [
        {
          id: {
            require: true,
            type: Number,
          },
          phase_maturity_level: {
            require: true,
            type: String,
          },
          pactice: [
            {
              id: {
                require: true,
                type: Number,
              },
              sub: [
                {
                  id: {
                    require: true,
                    type: Number,
                  },
                  implementation_level: {
                    require: true,
                    type: String,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

const Project = mongoose.model("project", ProjectSchema);
module.exports = Project;
