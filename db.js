const db = require('mongoose');

db.Promise = global.Promise;

async function connected(dbURL) {
    await db.connect(dbURL);
    console.log('[db] conected :)');
}

module.exports = connected;