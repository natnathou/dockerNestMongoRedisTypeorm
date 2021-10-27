// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'test') {
    dotenv.config({ path: path.join(__dirname, '.env.test') });
}

if (process.env.NODE_ENV === 'dev') {
    dotenv.config({ path: path.join(__dirname, '.env.dev') });
}

if (process.env.NODE_ENV === 'prod') {
    dotenv.config({ path: path.join(__dirname, '.env.prod') });
}

let config = {
    type: 'mongodb',
    host: process.env.MONGO_HOST,
    port: parseInt(process.env.MONGO_PORT),
    database: process.env.MONGO_DATABASE,
    useUnifiedTopology: true,
    useNewUrlParser:true,
};

switch (process.env.NODE_ENV) {
    case 'dev':
        config = {
            ...config,
            synchronize: true,
            logging: ['query'],
            entities: ['**/*.entity.js'],
            migrationsRun: false,
            migrations: ['src/migrations/**/*.js'],
            cli: {
                migrationsDir: 'src/migrations',
            },
        };

        break;
    case 'test':
        config = {
            ...config,
            synchronize: true,
            logging: false,
            entities: ['**/*.entity.ts'],
        };
        break;
    case 'production':
        config = {
            ...config,
            synchronize: false,
            logging: false,
            entities: ['**/*.entity.js'],
            migrationsRun: false,
            migrations: ['src/migrations/**/*.js'],
            cli: {
                migrationsDir: 'src/migrations',
            },
        };
        break;
    default:
        break;
}


module.exports = config;
