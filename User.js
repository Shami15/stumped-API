// User.js
var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  id : Number,   
  userName: String,
  fName : String,
  lName : String,
  email: String,
  password: String,
  Classes : Array
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');