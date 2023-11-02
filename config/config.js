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

}else if(env == 'production'){
    config.DATABASE = 'd1b06vk8qi3puk'
    config.PASSWORD = '418038998ddb52517aba74042893a65a684c851a92cbb4210a826b3c8f46cbd8',
    config.USERNAME = 'hbphhhwnpcxtae',
    config.SSL_MODE = 'require',
    config.DB_PORT = '5432',
    config.HOST = 'ec2-44-205-137-176.compute-1.amazonaws.com',
    config.DIALECT = 'postgres',
    config.DB_URL = 'postgres://hbphhhwnpcxtae:418038998ddb52517aba74042893a65a684c851a92cbb4210a826b3c8f46cbd8@ec2-3-232-218-211.compute-1.amazonaws.com:5432/d1b06vk8qi3puk',
    config.DIALECT_OPTIONS = {
        ssl: true,
        rejectUnauthorized: false
    }
}

module.exports = {
    config
}
