const Model = require('./model');
const { hash } = require('bcryptjs');

async function addUser(user) {
	const myUser = new Model(user);
	const { email, password } = user;

	const found = await Model.findOne({ email });
	if (found) return 'email is already in use';

	myUser.password = await hash(password, 10); 
	console.log(user.password);

	return myUser.save();
}

async function listUsers() {
	try {
		const users = await Model.find();
		return users;
	} catch (err) {
		console.error(err.message);
	}
}

async function getUser(email) {
	try {
		const user = await Model.find({ email }, { password: 0 });
		return user;
	} catch (err) {
		console.error(err.message);
	}
}

module.exports = {
	add: addUser,
	list: listUsers,
	get: getUser
};
