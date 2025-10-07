'use strict';

module.exports = (sequelize, DataTypes) => {
  const Leaf = sequelize.define('leaves', {
    author: DataTypes.STRING,
    content: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tree_id: DataTypes.INTEGER,
    x_location: DataTypes.INTEGER,
    y_location: DataTypes.INTEGER
  }, {});

  Leaf.associate = function (models) {
    Leaf.belongsTo(models.trees); // Call hasMany on the User model instance
  };

  return Leaf;
};