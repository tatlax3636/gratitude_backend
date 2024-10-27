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
    config.DATABASE = 'd23biaoe2mmot8'
    config.PASSWORD = 'p20cffd739176323a0be33ebab8dd49e45a031b73e0865ed715a0f816cceea825',
    config.USERNAME = 'u35d7q95pstf5g',
    config.SSL_MODE = 'require',
    config.DB_PORT = '5432',
    config.HOST = 'c1i13pt05ja4ag.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
    config.DIALECT = 'postgres',
    config.DB_URL = 'postgres://u35d7q95pstf5g:p20cffd739176323a0be33ebab8dd49e45a031b73e0865ed715a0f816cceea825@c1i13pt05ja4ag.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d23biaoe2mmot8'
    config.DIALECT_OPTIONS = {
        ssl: true,
        rejectUnauthorized: false
    }
}else if(env == 'production'){
    config.DATABASE = 'd23biaoe2mmot8'
    config.PASSWORD = 'p20cffd739176323a0be33ebab8dd49e45a031b73e0865ed715a0f816cceea825',
    config.USERNAME = 'u35d7q95pstf5g',
    config.SSL_MODE = 'require',
    config.DB_PORT = '5432',
    config.HOST = 'c1i13pt05ja4ag.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
    config.DIALECT = 'postgres',
    config.DB_URL = 'postgres://u35d7q95pstf5g:p20cffd739176323a0be33ebab8dd49e45a031b73e0865ed715a0f816cceea825@c1i13pt05ja4ag.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d23biaoe2mmot8'
    config.DIALECT_OPTIONS = {
        ssl: true,
        rejectUnauthorized: false
    }
}

module.exports = {
    config
}
