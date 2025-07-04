const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('arghyadb', 'root', 'Arghya@738455', {
  host: 'localhost',
  dialect: 'mysql'
});

const Review = require('./review')(sequelize);

// Recreate tables on each restart (FOR DEVELOPMENT ONLY)
sequelize.sync(); // This will not delete existing data


module.exports = { sequelize, Review };
