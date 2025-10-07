const env = process.env.NODE_ENV || 'development' 
const config = {
    PORT: process.env.PORT || 5432,
    DATABASE: 'leaves_db',
    USERNAME: 'postgres',
    PASSWORD: '',
    HOST: '127.0.0.1',
    DIALECT: 'postgres',
    DB_URL: 'postgres://ud9pkq0k7mi2tr:p309d7f6cd50276e57402014441e33bea954518554ab58335ac232d1e16230386@c8qf22e50d0hk5.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/dcgdc966ji532j'
    
}

if(env == 'development'){
    config.DATABASE = 'dcgdc966ji532j'
    config.PASSWORD = 'p309d7f6cd50276e57402014441e33bea954518554ab58335ac232d1e16230386',
    config.USERNAME = 'ud9pkq0k7mi2tr',
    config.SSL_MODE = 'require',
    config.DB_PORT = '5432',
    config.HOST = 'c8qf22e50d0hk5.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
    config.DIALECT = 'postgres',
    config.DB_URL = 'postgres://ud9pkq0k7mi2tr:p309d7f6cd50276e57402014441e33bea954518554ab58335ac232d1e16230386@c8qf22e50d0hk5.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/dcgdc966ji532j'
    config.DIALECT_OPTIONS = {
        ssl: true,
        rejectUnauthorized: false
    }
}else if(env == 'production'){
    config.DATABASE = 'dcgdc966ji532j'
    config.PASSWORD = 'p309d7f6cd50276e57402014441e33bea954518554ab58335ac232d1e16230386',
    config.USERNAME = 'ud9pkq0k7mi2tr',
    config.SSL_MODE = 'require',
    config.DB_PORT = '5432',
    config.HOST = 'c8qf22e50d0hk5.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
    config.DIALECT = 'postgres',
    config.DB_URL = 'postgres://ud9pkq0k7mi2tr:p309d7f6cd50276e57402014441e33bea954518554ab58335ac232d1e16230386@c8qf22e50d0hk5.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/dcgdc966ji532j'
    config.DIALECT_OPTIONS = {
        ssl: true,
        rejectUnauthorized: false
    }
}

module.exports = {
    config
}
