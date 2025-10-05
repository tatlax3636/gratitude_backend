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
        access_code: DataTypes.INTEGER,
        admin_code: DataTypes.INTEGER
    }, {});


    return Tree;
};
