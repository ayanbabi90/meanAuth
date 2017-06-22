var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auth');
var db = mongoose.connection;

/* User Schema*/

var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index: true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	},
	profileimage: {
		type: String
	}
});

var User = module.exports = mongoose.model('User', UserSchema);
/*user varriable */
module.exports.createUser = function(newUser, callback) {
	newUser.save(callback);
}