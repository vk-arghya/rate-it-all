cconst sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
  }
);

const sequelize = new Sequelize('railway', 'root', 'VMrHAElWQVamgLPXqepENaXMegcAwxIW', {
  host: 'mysql-gf6d.railway.internal',
  dialect: 'mysql'
});

const Review = require('./review')(sequelize);

// Recreate tables on each restart (FOR DEVELOPMENT ONLY)
sequelize.sync(); // This will not delete existing data


module.exports = { sequelize, Review };
