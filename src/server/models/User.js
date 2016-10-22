var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  local: {
    username: { type: String, unique: true },
    password: String,
    phone:String,
    email: String,
  },
  facebook: {
    id: String,
    username: String,
    token: String,
    email: String,
  },
  wechat:{//todo wechat info
  username:String,

  }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);
