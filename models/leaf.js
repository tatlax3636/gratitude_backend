'use strict';


module.exports = (sequelize, DataTypes) => {
  const leaves = sequelize.define('leaves', {
    author: DataTypes.STRING,
    content: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    x_location: DataTypes.INTEGER,
    y_location: DataTypes.INTEGER
  }, {});

  return leaves;
};