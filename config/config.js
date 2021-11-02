const env = process.env.NODE_ENV || 'development' 
const config = {
    PORT: process.env.PORT || 8005,
    DATABASE: 'leaves_db',
    USERNAME: 'postgres',
    PASSWORD: '',
    HOST: '127.0.0.1',
    DIALECT: 'postgres' 
}

if(env == 'development'){

}else{
    config.DATABASE = 'd7q5tufv8n8h7p'
    config.PASSWORD = '590453d3ecb0a321fc1d57f0b708891b9195f64424b084c640f80c362e3f0e94',
    config.USERNAME = 'mmqxsypeshmgpa',
    config.SSL_MODE = 'require',
    config.DB_PORT = '5432',
    config.HOST = 'ec2-52-207-124-89.compute-1.amazonaws.com?sslmode=require',
    config.DIALECT = 'postgres'
}

module.exports = {
    config
}
