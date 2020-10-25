const env = process.env.NODE_ENV || 'development' 

const config = {
    PORT: process.env.PORT || 8005,
    DATABASE: 'leaves_db',
    USERNAME: 'postgres',
    PASSWORD: '',
    HOST: '127.0.0.1',
    DIALECT: 'postgres'   
}

module.exports = {
    config
}