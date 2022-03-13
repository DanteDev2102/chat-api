const store = require('./store');

function addUser(user) {
	const { email, name, password } = user;

	if (!email || !password || !name)
		return Promise.reject('invalid data');

	return store.add(user);
}

function getUsers() {
	return new Promise((resolve, reject) => {
		resolve(store.list());
	});
}

function getUser(id) {
	return new Promise((resolve, reject) => {
		resolve(store.get(id));
	});
}

module.exports = {
	addUser,
	getUsers,
	getUser
};
