var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
//session有効
var session = require('express-session');
app.use(session({
  secret: 'bWFGupMCur_npxclxHE0lGzX',
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

var passport = require('passport');
var session = require('express-session');
app.use(passport.initialize());

var OpenidConnectStrategy = require('passport-openidconnect').Strategy;

app.use(passport.initialize());
app.use(passport.session());

passport.use(new OpenidConnectStrategy({
  issuer: "accounts.google.com",
  authorizationURL: "https://accounts.google.com/o/oauth2/auth",
  tokenURL: "https://accounts.google.com/o/oauth2/token",
  userInfoURL: "https://www.googleapis.com/oauth2/v1/userinfo",
  clientID: "205758550807-s1sa09qu8hot5a7v9nbu316rb2qnvlft.apps.googleusercontent.com",
  clientSecret: "bWFGupMCur_npxclxHE0lGzX",
  callbackURL: "http://localhost:3000/oauth2callback",
  scope: ["openid", "email", "profile" ]
}, function(profile, accessToken, refreshToken, done) {
  console.log('accessToken: ', accessToken);
  console.log('refreshToken: ', refreshToken);
  return done(null, profile);
}));

passport.serializeUser(function(user, done){
  //userにはprofileが入る
  done(null, user);
});

passport.deserializeUser(function(obj, done){
  done(null, obj);
});

app.get('/auth/google', passport.authenticate('openidconnect'));

app.get('/oauth2callback', passport.authenticate('openidconnect', {
    failureRedirect: '/login'
}), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;