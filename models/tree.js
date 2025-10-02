'use strict';
import leaf from "./leaf";

module.exports = (sequelize, DataTypes) => {
    const Tree = sequelize.define('trees', {
        isPublic: DataTypes.BOOLEAN,
        name: DataTypes.STRING,
        theme: DataTypes.STRING,
        algorithm: DataTypes.List[Object],
        id: {
            type: DataTypes.UUID.V4,
            defaultValue: sql.uuidV4,
            primaryKey: true
        },
        access_code: DataTypes.INTEGER,
        admin_code: DataTypes.INTEGER
    }, {});

    Tree.hasMany(leaf, {foreignKey: access_code})

    return Tree;
};
