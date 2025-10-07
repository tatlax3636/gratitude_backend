'use strict';

module.exports = (sequelize, DataTypes) => {
    const Tree = sequelize.define('trees', {
        isPublic: DataTypes.BOOLEAN,
        name: DataTypes.STRING,
        theme: DataTypes.STRING,
        tree_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        access_code: DataTypes.STRING,
        admin_code: DataTypes.STRING
    }, {});

    Tree.associate = function (models) {
        Tree.hasMany(models.leaves,{foreignKey: 'tree_id'}); // Call hasMany on the User model instance
    };


    return Tree;
};
