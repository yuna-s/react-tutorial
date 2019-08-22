//const http = require('http');
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const app = express();
app.use(passport.initialize());

//openid
const OpenIDStrategy = require('passport-openid').Strategy;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var api = require('./api/');
app.use('/api', api);

//path指定用モジュール
const path = require('path');
app.listen(8080, () => {
	console.log('Running at Port 8080...');
});

//静的ファイルのルーティング
//expressの静的メソッドstaticを利用
//staticに静的ファイル群のルートパスを渡すと、その配下のファイルに対する
//リクエストをうまく捌いてくれるミドルウェアを生成してくれる
app.use(express.static(path.join(__dirname, 'public')));
//console.log(path.join(__dirname, 'public'));

app.get('/',isAuthenticated, function(req, res, next) {
	res.render('index', { title: 'Express' });
  });

app.get('/api/v1/list',isAuthenticated, (req, res) => {
	//クライアントに送るjsonデータ
	const todoList = [
		{titile: 'javascriptマスターになる！', done:true},
		{titile: 'Nodejsを勉強する', done:false}
	];

	//jsonを送る
	res.json(todoList);
})

//local
passport.use(new LocalStrategy(
    {
        usernameField: 'username',
		passwordField: 'password'
		
    }, (username, password, done) => {
		//以下、assport.authenticate('local')を実行した際に呼ばれる処理

        //const result = userSearch(mailAddress, password); 
        // userSearch() はメールアドレスとパスワードからユーザを検索する処理
        // 処理内容は別途考えてください． 例:DB検索をして一致するユーザが居ればtrueを返す
        // 今回は返り値をBooleanとします．

        if(username == "test" && password == "test"){
            return done(null, {
                username: username
            });
        }else {
            return done(null, false, {
                message: 'ログインに失敗'
            });
        }
    })
);



app.post('/auth/openid', passport.authenticate('openid'));
app.get('/auth/openid/return', 
  passport.authenticate('openid', { successRedirect: '/', failureRedirect: '/openidLogin' }));
									

app.get('/login',function(req, res){
    res.sendFile(__dirname + '/public/login.html');
});

app.get('/',function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/openidLogin',function(req, res){
    res.sendFile(__dirname + '/public/openidLogin.html');
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/login',
	passport.authenticate('local',
	{ successRedirect: '/',
	failureRedirect: '/login' }),
    function(req, res){
		//認証が成功するとここに来る
        res.redirect('/foo/bar');
	}

);

app.use(session({
    secret: '12345',
}));
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

function isAuthenticated(req, res, next){
    if (req.isAuthenticated()) {  // 認証済
        return next();
    }
    else {  // 認証されていない
        res.redirect('/login');  // ログイン画面に遷移
    }
}

//404 error
app.use((req, res) => {
	res.sendStatus(404);
});


