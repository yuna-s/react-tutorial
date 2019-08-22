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

// passport, passport-openidconnect���W���[���̃��[�h
var passport = require('passport');
var OpenidConnectStrategy = require('passport-openidconnect').Strategy;

var app = express();
// passport�𗘗p���邱�Ƃ̐錾
app.use(passport.initialize());
// �y�񐄏��z�T�[�o�ؖ����Ɏ��ȏ����ؖ�����p�������ł����������ꍇ��0���w��
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
    // OP�̐ݒ�
    authorizationURL: AUTHORIZATION_ENDPOINT,
    tokenURL: TOKEN_ENDPOINT,
    userInfoURL: USERINFO_ENDPOINT,
    
    // RP�̐ݒ�B
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK,
    scope: SCOPE
  }, function(iss, sub, profile, jwtClaims, accessToken, refreshToken, params, done) {
    // �����A���S���Y���̌���
    // ID Token�̃w�b�_�Ɋ܂܂�鏐���A���S���Y�����A��`����ALGORITHM�l�ƈ�v���邱�Ƃ����؂���
    var headerStr = new Buffer(params.id_token.split(".")[0], "base64").toString();
    var header = JSON.parse(headerStr);
    if (header.alg !== ALGORITHM) {
      done("Missmatch Algorithm", null);
    }

    // iss�N���[���̌���
    // iss�N���[���̒l���A��`����ISSUER_IDENTIFIER�ƈ�v���邱�Ƃ����؂���
    if (jwtClaims.iss !== ISSUER_IDENTIFIER) {
      done("Missmatch Issuer", null);
    }

    // aud�N���[���̌���
    // aud�N���[���̒l���A��`����CLIENT_ID���܂܂�邱�Ƃ����؂���
    if (jwtClaims.aud.indexOf(CLIENT_ID) < 0) {
      done("Missmatch Audience", null);
    }

    // azp�N���[���̌���
    // aud�N���[���̒l����������ꍇ�ɁAazp�N���[�����A��`����CLIENT_ID�ƈ�v���邱�Ƃ����؂���
    if (jwtClaims.aud.length > 1 &&
        (!input.claims.azp || input.claims.azp !== CLIENT_ID)) {
      done("Missmatch Authorized party", null);
    }

    // exp�N���[���̌���
    // exp�N���[���̒l���A���ݎ��������傫���邱�Ƃ����؂���
    var now = Math.round(Date.now()/1000);
    if (jwtClaims.exp <= now) {
      done("Expired token", null);
    }

    // iat�N���[���̌���
    // iat�N���[���̒l���A���ݎ�������ꎞ�Ԉȓ����ǂ��������؂���
    var ONE_HOUR = 3600;
    var now = Math.round(Date.now()/1000);
    if (jwtClaims.iat + ONE_HOUR <= now) {
      done("Expired token", null);
    }

    // ID Token�̏�������
    // ID Token�̏��������������ǂ��������؂���
    var getPem = require('rsa-pem-from-mod-exp');
    var modulus = ""; // ���J����modulus�̒l���w��
    var exponent = ""; // ���J����exponent�̒l���w��
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
