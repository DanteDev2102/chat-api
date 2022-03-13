const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const PassportLocal = require('passport-local');

const { dbURL, port, host, publicRoute } = require('./config.js');
const socket = require('./socket');
const routes = require('./network/routes');
const db = require('./db');



app.use(bodyParser.json());

socket.connect(server);


routes(app);
app.use(cors());

db(dbURL).catch((err) => {
	console.error('[db] error connect');
	console.error(err);
});

app.use(publicRoute, express.static('public'));

server.listen(port, () => {
	console.log(`server listen in ${host}:${port}`);
});
