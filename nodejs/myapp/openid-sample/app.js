//後でenvにまとめる予定
var ISSUER_IDENTIFIER = "http://localhost:8080/openam/oauth2";
var AUTHORIZATION_ENDPOINT = "http://localhost:8080/openam/oauth2/authorize";
var TOKEN_ENDPOINT = "http://localhost:8080/openam/oauth2/access_token";
var USERINFO_ENDPOINT = "http://localhost:8080/openam/oauth2/userinfo";
var CLIENT_ID = "205758550807-s1sa09qu8hot5a7v9nbu316rb2qnvlft.apps.googleusercontent.com";
var CLIENT_SECRET = "bWFGupMCur_npxclxHE0lGzX";
var CALLBACK = "http://www.example2.local:3000/";
var SCOPE = ["profile", "email"];
var ALGORITHM = "RS256"; // 署名アルゴリズムにはRS256を使用


var createError = require('http-errors');
var express = require('express');
var passport = require('passport');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//passport
var passport = require('passport');
var OpenidConnectStrategy = require('passport-openidconnect').Strategy;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var login = require('./routes/login');

var app = express();
//passport利用を宣言
app.use(passport.initialize());
//自己署名ではない場合に1を指定
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

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
//app.use('/login', login);

passport.use(new OpenidConnectStrategy(
  {
    // OPの設定
    authorizationURL: AUTHORIZATION_ENDPOINT,
    tokenURL: TOKEN_ENDPOINT,
    userInfoURL: USERINFO_ENDPOINT,
    realm: "http://localhost:8080",
 
    // RPの設定。
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK
  }, function(iss, sub, profile, jwtClaims, accessToken, refreshToken, params, done) {
    console.log('openid strategy starts');
    console.log('accessToken:', accessToken);
    // IDトークンやパラメータの検証。
     // 署名アルゴリズムの検証
    // ID Tokenのヘッダに含まれる署名アルゴリズムが、定義したALGORITHM値と一致することを検証する
    var headerStr = new Buffer(params.id_token.split(".")[0], "base64").toString();
    var header = JSON.parse(headerStr);
    if (header.alg !== ALGORITHM) {
      done("Missmatch Algorithm", null);
    }
 
    // issクレームの検証
    // issクレームの値が、定義したISSUER_IDENTIFIERと一致することを検証する
    if (jwtClaims.iss !== ISSUER_IDENTIFIER) {
      done("Missmatch Issuer", null);
    }
 
    // audクレームの検証
    // audクレームの値が、定義したCLIENT_IDが含まれることを検証する
    if (jwtClaims.aud.indexOf(CLIENT_ID) < 0) {
      done("Missmatch Audience", null);
    }
 
    // azpクレームの検証
    // audクレームの値が複数ある場合に、azpクレームが、定義したCLIENT_IDと一致することを検証する
    if (jwtClaims.aud.length > 1 &&
        (!params.claims.azp || params.claims.azp !== CLIENT_ID)) {
      done("Missmatch Authorized party", null);
    }
 
    // expクレームの検証
    // expクレームの値が、現在時刻よりも大きいることを検証する
    var now = Math.round(Date.now()/1000);
    if (jwtClaims.exp <= now) {
      done("Expired token", null);
    }
 
    // iatクレームの検証
    // iatクレームの値が、現在時刻から一時間以内かどうかを検証する
    var ONE_HOUR = 3600;
    var now = Math.round(Date.now()/1000);
    if (jwtClaims.iat + ONE_HOUR <= now) {
      done("Expired token", null);
    }
 
    // ID Tokenの署名検証
    // ID Tokenの署名が正しいかどうかを検証する
    var getPem = require('rsa-pem-from-mod-exp');
    var modulus = ""; // 公開鍵のmodulusの値を指定
    var exponent = ""; // 公開鍵のexponentの値を指定
    var pem = getPem(modulus, exponent);
    var token = params.id_token;
 
    var jwt = require('jsonwebtoken');
    jwt.verify(token, pem, function(err, decoded) {
      if (err) {
        done("Invalid Signature", null);
      } else {
        console.log("OK");
        done(null, profile, jwtClaims);
      }
    });
  }
));
 
// ユーザーの情報を受け取り利用するための設定。
passport.serializeUser(function(user, done){
  done(null, user);
});
 
passport.deserializeUser(function(obj, done){
  done(null, obj);
});


//get request
app.get("/auth/openid",　passport.authenticate("openidconnect"));
app.get('/login',function(req, res){
  res.sendFile(__dirname + '/public/login.html');
});

app.get("/cb", passport.authenticate("openidconnect", {failureRedirect: "/"}),
  function(req, res) {
    res.redirect("/");
  }
)

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
