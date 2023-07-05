var mongoose = require("mongoose");
const BaseTransaction = require("../transaction/baseTransaction");

var ProjectAPI = {
  find: function (request, response) {
    BaseTransaction.findById(request.params.id, function (error, project) {
      if (error) {
        throw error;
      } else {
        response.status(200).json(project);
      }
    });
  },
};

module.exports = ProjectAPI;
