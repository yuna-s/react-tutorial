var express = require('express');
var router = express.Router();

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


router.get('/',
  function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/',
  passport.authenticate('local', {failureRedirect: '/login',
                                   failureFlash: false,
                                   session: false }),
  function(req, res, next){
    res.send("login success");
  }
);
module.exports = router;