const Config = require('./config.js').config

let db_details = {
  'development': {
    'username': Config.USERNAME,
    'password': Config.PASSWORD,
    'database': Config.DATABASE,
    'host': Config.HOST,
    'dialect': Config.DIALECT,
  },
  'qa': {
    'username': Config.USERNAME,
    'password': Config.PASSWORD,
    'database': Config.DATABASE,
    'host': Config.HOST,
    'dialect': Config.DIALECT,
    "ssl": true,
    "dialectOptions": {
        "ssl": {
          "require": true 
        }
    }
  }
}

module.exports = (db_details)

