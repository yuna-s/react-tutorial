
// 各モジュールをインポート
var createError = require('http-errors');
var express = require('express');
var path = require('path');
// sessionを使うのに求められる
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// pathを定義
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginFRouter = require('./routes/loginfail');
var loginRouter = require('./routes/login');

var app = express();

//session有効
var session = require('express-session');
app.use(session({
  //クッキー改ざん検証用ID
  secret: 'nekoneko',
  //未初期化のセッションを保存するか
  saveUninitialized: false,
  //他にもsessionの寿命とか、httpsならsecureも設定できる
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

//追記ここから
app.use('/loginfail', loginFRouter);
app.use('/login', loginRouter);


//認証セクション
var passport = require('passport');
var OpenidConnectStrategy = require('passport-openidconnect').Strategy;

app.use(passport.initialize());
app.use(passport.session());

passport.use(new OpenidConnectStrategy({
  issuer:"http://localhost:8080/openam/oauth2",
  authorizationURL: "http://localhost:8080/openam/oauth2/authorize",
  tokenURL: "http://localhost:8080/openam/oauth2/access_token",
  userInfoURL: "http://localhost:8080/openam/oauth2/userinfo",
  clientID: "sampleRP",
  clientSecret: "nekoneko",
  callbackURL: "http://localhost:3000/oauth2callback",
  scope: ["openid", "email", "profile" ]
}, function(profile, accessToken, refreshToken, done) {
  //認証成功したらここにくる
  //ここでID tokenの検証を行う
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

app.get('/auth/openidconnect', passport.authenticate('openidconnect'));

app.get('/oauth2callback', passport.authenticate('openidconnect', {
    failureRedirect: '/loginfail'
}), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/login');
});
//ここまで

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