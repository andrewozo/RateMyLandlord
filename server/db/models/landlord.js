const Sequelize = require("sequelize");
const db = require("../db");

const Landlord = db.define("landlord", {
  landlordName: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  comments: {
    type: Sequelize.TEXT,
  },
  rating: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Landlord
