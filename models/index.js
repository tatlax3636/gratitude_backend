'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
//const config = require('../config/dbConfig.js').development;
const config = require('../config/config.json').production;
const db = {};

//let  sequelize = new Sequelize(config.database, config.username, config.password, config);

//let sequelize = new Sequelize(`${config.DB_URL}?sslmode=require`) 
let sequelize = new Sequelize(process.env.DB_URL, {
  dialect: `postgres`,
  dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
  }
})

const Leaf = require('./leaf')
const Tree = require('./tree')

Tree.hasMany(Leaf, { foreignKey: 'tree_id', as: 'leaves' }); // A tree has many leaves
Leaf.belongsTo(Tree, { foreignKey: 'tree_id', as: 'tree' }); // A Post belongs to one User

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
