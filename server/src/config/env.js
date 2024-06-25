require('dotenv').config();

module.exports = {
    APP_VERSION: process.env.APP_VERSION ?? '0.0.0',
    PORT: process.env.PORT ?? 4000,
    MONGO_URI: process.env.MONGO_URI ?? 'mongodb://localhost:27017',
    JWT_SECRET: process.env.JWT_SECRET ?? 'secret'
}