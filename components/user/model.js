const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	contacts: [
		{
			type: Schema.ObjectId,
			required: false
		}
	],
	id_chats: [
		{
			type: Schema.ObjectId,
			required: false,
			ref: 'chat'
		}
	],
	avatar: {
		type: String,
		required: false
	},
	isAdmin: {
		type: Boolean,
		default: false
	}
});

const model = mongoose.model('user', mySchema);

module.exports = model;
