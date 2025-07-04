const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Movie', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT
    }
  });
};
