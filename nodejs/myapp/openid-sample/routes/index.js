var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  var sessionId = req.cookies.express;
  if(checkSession(sessionId)){
    // コンテンツを返却する処理を実装する。
  } else {
    res.redirect("/login");
  }
});
 
function checkSession(sessionId) {
  // Sessionの確認を実装する。
}

router.get("/F", passport.authenticate("openidconnect", {failureRedirect: "/"}),
  function(req, res) {
    if (req.authInfo && checkIssuerAndSub(req.authInfo.iss, req.authInfo.sub)) {
      var user = req.authInfo.iss + "#" + req.authInfo.sub;
      var sessionId = createSession(user);
      res.cookie("express", sessionId,
        { secure: true, httpOnly: true }
      );
      res.redirect("/");
    } else {
      var error = { message: "Forbidden", error: { status: 403, stack: "" } }
      res.render("error", error);
    }
  }
);
 
function checkIssuerAndSub(iss, sub) {
  // Issuerを確認してbooleanを返す関数を実装する。
}
 
function createSession(user) {
  // Sessionの生成を実装する。
}
module.exports = router;
