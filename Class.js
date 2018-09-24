// User.js
var mongoose = require('mongoose');  
var ClassSchema = new mongoose.Schema({  
    "name": String,
    "teacher": Number,
    "students": Array,
    "subject": String,
    "questions": Array
});
mongoose.model('Class', ClassSchema);
module.exports = mongoose.model('Class');