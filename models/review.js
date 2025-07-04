const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Review', {
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    feedback: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reviewer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
