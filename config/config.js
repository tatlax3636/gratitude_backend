const env = process.env.NODE_ENV || 'development' 
const config = {
    PORT: process.env.PORT || 5432,
    DATABASE: 'leaves_db',
    USERNAME: 'postgres',
    PASSWORD: '',
    HOST: '127.0.0.1',
    DIALECT: 'postgres',
    DB_URL: 'postgres://jdqzbpafrdwsnv:abfd09955a551ac67d0d270c0c02022eb422f818742631551bf9a1a4567b30ca@ec2-44-205-137-176.compute-1.amazonaws.com:5432/d85aoa8mbtv9n5'
}

if(env == 'development'){
    config.DATABASE = 'da7f0hb89dvelu',
    config.PASSWORD = 'f18e935a7d7638ae9834a3b15aa0a647a54f820b5a3568a9e4957f7fe9db4172',
    config.USERNAME = 'jpurthkddrypva',
    config.SSL_MODE = 'require',
    config.DB_PORT = '5432',
    config.HOST = 'ec2-23-21-10-246.compute-1.amazonaws.com',
    config.DIALECT = 'postgres',
    config.DB_URL = 'postgres://jpurthkddrypva:f18e935a7d7638ae9834a3b15aa0a647a54f820b5a3568a9e4957f7fe9db4172@ec2-23-21-10-246.compute-1.amazonaws.com:5432/da7f0hb89dvelu',
    config.DIALECT_OPTIONS = {
        ssl: true,
        rejectUnauthorized: false
    }
}else if(env == 'production'){
    config.DATABASE = 'da7f0hb89dvelu',
    config.PASSWORD = 'f18e935a7d7638ae9834a3b15aa0a647a54f820b5a3568a9e4957f7fe9db4172',
    config.USERNAME = 'jpurthkddrypva',
    config.SSL_MODE = 'require',
    config.DB_PORT = '5432',
    config.HOST = 'ec2-23-21-10-246.compute-1.amazonaws.com',
    config.DIALECT = 'postgres',
    config.DB_URL = 'postgres://jpurthkddrypva:f18e935a7d7638ae9834a3b15aa0a647a54f820b5a3568a9e4957f7fe9db4172@ec2-23-21-10-246.compute-1.amazonaws.com:5432/da7f0hb89dvelu',
    config.DIALECT_OPTIONS = {
        ssl: true,
        rejectUnauthorized: false
    }
}

module.exports = {
    config
}
