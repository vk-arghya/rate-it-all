const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('railway', 'root', 'VMrHAElWQVamgLPXqepENaXMegcAwxIW', {
  host: 'switchyard.proxy.rlwy.net',
  port: 12623,
  dialect: 'mysql',
  logging: false,
});

const Review = require('./review')(sequelize);


sequelize.sync(); // Keep this for syncing

module.exports = { sequelize, Review };
