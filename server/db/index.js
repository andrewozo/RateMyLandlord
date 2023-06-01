const db = require("./db");

const User = require("./models/users");
const Landlord = require("./models/landlord");

User.hasMany(Landlord);
Landlord.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Landlord,
  },
};
