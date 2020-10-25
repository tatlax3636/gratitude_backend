'use strict';


module.exports = (sequelize, DataTypes) => {
  const leaves = sequelize.define('leaves', {
    author: DataTypes.STRING,
    content: DataTypes.STRING,
    x_location: DataTypes.INTEGER,
    y_location: DataTypes.INTEGER,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {});

  return leaves;
};