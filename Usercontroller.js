// UserController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('./User');

// User.statics.authenticate = function (email, password, callback) {
//     User.findOne({ email: email })
//       .exec(function (err, user) {
//         if (err) {
//           return callback(err)
//         } else if (!user) {
//           var err = new Error('User not found.');
//           err.status = 401;
//           return callback(err);
//         }
    
//         User.findOne({ password: password })
//         .exec(function (err, user) {
//           if (err) {
//             return callback(err)
//           } else if (!user) {
//             var err = new Error('User not found.');
//             err.status = 401;
//             return callback(err);
//           }  
          
//         }


//         // bcrypt.compare(password, user.password, function (err, result) {
//         //   if (result === true) {
//         //     return callback(null, user);
//         //   } else {
//         //     return callback();
//         //   }
//         // })
//       });
//   }

// CREATES A NEW USER
router.post('/', function (req, res) {
    User.create({
            id : req.body.id,
            userName : req.body.userName,
            email : req.body.email,
            password : req.body.password,
            fName : req.body.fName,
            lName : req.body.lName,
            Classes : req.body.Classes
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});




module.exports = router;