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
    config.DATABASE = 'aaburphzkfju6d'
    config.PASSWORD = 'bd12_efi56',
    config.USERNAME = 'disciplineDev',
    config.DB_PORT = '5432',
    config.HOST = 'aaburphzkfju6d.cmg9iliyxleb.us-east-1.rds.amazonaws.com',
    config.DIALECT = 'postgres'
}

module.exports = {
    config
}