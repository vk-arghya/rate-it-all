const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('railway', 'root', 'VMrHAElWQVamgLPXqepENaXMegcAwxIW', {
  host: 'mysql-gf6d.railway.internal',
  dialect: 'mysql'
});

const Review = require('./review')(sequelize);

// Recreate tables on each restart (FOR DEVELOPMENT ONLY)
sequelize.sync(); // This will not delete existing data


module.exports = { sequelize, Review };
