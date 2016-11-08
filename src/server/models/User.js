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
  wechat: {//todo wechat info
    "openid": String,
    "nickname": String,
    "sex": String,//"1",
    "province": String,//"PROVINCE",
    "city": String,//"CITY",
    "country": String,//"COUNTRY",
    "headimgurl": String,//"http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46",
    "privilege": Array,// ["PRIVILEGE1", "PRIVILEGE2" ]
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
