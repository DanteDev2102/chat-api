const config = {
    dbURL: process.env.DB_URL || 'mongodb://127.0.0.1:27017/db_chat_app',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || '/files'
};

module.exports = config;