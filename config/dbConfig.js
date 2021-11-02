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
    'ssl_mode': Config.SSL_MODE,
    'password': Config.PASSWORD,
    'database': Config.DATABASE,
    'host': Config.HOST,
    'dialect': Config.DIALECT,
  }
}

module.exports = (db_details)

