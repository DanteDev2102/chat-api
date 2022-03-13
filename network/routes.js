const express = require('express');
const msg = require('../components/message/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');

const routes = function (server) {
	server.use('/api/msg', msg);
	server.use('/api/user', user);
	server.use('/api/chat', chat);
};

module.exports = routes;
