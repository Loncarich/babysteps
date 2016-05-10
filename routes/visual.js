var express = require('express');
var router = express.Router();
var Q = require('q');
var verify = require('../tokens.js').verifyToken;
var Condition = require('../db.js').conditions;
var User = require('../db.js').users;

// authentication
router.use(function(req, res, next) {
  verify(req.headers.token, res, next);
});

// routes
router.get('/', function(req, res) {
  var childFirstName = req.headers.child;
  var username = req.headers.username;
  findCondition(username, childFirstName, res);
});

var findCondition = function(username, childFirstName, res) {
  return new Q(User.findOne({'username': username}).exec())
    .then(function(user) {
      var condition;
      for(var i = 0; i < user.children.length; i++) {
        if (user.children[i].firstName === childFirstName) {
          condition = user.children[i].condition;
        }
      }
      return new Q(Condition.findOne({'name': condition}).exec());
    })
    .then(function(condition) {
      res.json({
        success: true,
        condition: condition
      });
    });
};

module.exports = router;
