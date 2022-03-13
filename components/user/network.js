const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
	controller
		.getUsers()
		.then((users) => {
			response.success(req, res, users, 200);
		})
		.catch((err) => {
			response.error(req, res, 'Unexpected error');
		});
});

router.put('/', (req, res) => {
	controller
		.addUser(req.body)
		.then((data) => {
			response.success(req, res, data, 201);
		})
		.catch((err) => {
			response.error(req, res, 'internal error', 500, err);
		});
});

router.get('/:id', (req, res) => {
	controller
		.getUser(req.params.id)
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch((err) => {
			response.error(req, res, 'internal error', 500, err);
		});
});

module.exports = router;
