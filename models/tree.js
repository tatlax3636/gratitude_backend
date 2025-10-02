'use strict';

module.exports = (sequelize, DataTypes) => {
    const Tree = sequelize.define('trees', {
        isPublic: DataTypes.BOOLEAN,
        name: DataTypes.STRING,
        theme: DataTypes.STRING,
        // id: {
        //     type: DataTypes.UUID.V4,
        //     primaryKey: true
        // },
        access_code: DataTypes.INTEGER,
        admin_code: DataTypes.INTEGER
    }, {});


    return Tree;
};
