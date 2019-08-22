/**
 * Copyright (C) 2016 OGIS-RI Co., Ltd. All rights reserved.
 * 
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

// passport, passport-openidconnectモジュールのロード
var passport = require('passport');
var OpenidConnectStrategy = require('passport-openidconnect').Strategy;

var app = express();
// passportを利用することの宣言
app.use(passport.initialize());
// 【非推奨】サーバ証明書に自己署名証明書を用いた環境でお試しされる場合は0を指定
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var ISSUER_IDENTIFIER = "https://openidprovider.sample.domain:443/openam/oauth2";
var AUTHORIZATION_ENDPOINT = "https://openidprovider.sample.domain:443/openam/oauth2/authorize";
var TOKEN_ENDPOINT = "https://openidprovider.sample.domain:443/openam/oauth2/access_token";
var USERINFO_ENDPOINT = "https://openidprovider.sample.domain:443/openam/oauth2/userinfo";
var CLIENT_ID = "sampleRP";
var CLIENT_SECRET = "password";
var CALLBACK = "https://relyingparty.sample.domain/cb";
var SCOPE = ["profile", "email"];
var ALGORITHM = "RS256";

passport.use(new OpenidConnectStrategy(
  {
    // OPの設定
    authorizationURL: AUTHORIZATION_ENDPOINT,
    tokenURL: TOKEN_ENDPOINT,
    userInfoURL: USERINFO_ENDPOINT,
    
    // RPの設定。
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK,
    scope: SCOPE
  }, function(iss, sub, profile, jwtClaims, accessToken, refreshToken, params, done) {
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
        (!input.claims.azp || input.claims.azp !== CLIENT_ID)) {
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
    var token = input.id_token;

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

passport.serializeUser(function(user, done){
  done(null, user);
});

passport.deserializeUser(function(obj, done){
  done(null, obj);
});

module.exports = app;
