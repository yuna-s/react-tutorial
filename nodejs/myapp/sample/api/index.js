/**
 *  /api/index.js
 */
const express = require('express');
const router = express.Router(); //ミドルウェアの準備

router.get('/items', (req, res) => {
  res.json({ items: [] });
});

router.post('/registration', (req, res) => {
  res.end('Completed');
});

// JSONパース
router.use(express.json());

// /api/foo　へのGETリクエスト
router.get('/foo', (req, res) => {
  // ファイルを転送
  res.sendFile(__dirname + '/data.json', (err) => {
    if (err) {
      res.sendStatus(400);
    } else {
      console.log('sending completed');
    }
  });
});

// /api/bar へのGET・POSTリクエスト
router.route('/bar')
  .get((req, res) => {

    // 受け取ったパラメータをそのままJSONにして送り返している
    res.json(req.query);
  })
  .post((req, res) => {

    // 必須のデータ項目を、id,name,address として、受信データをチェックしている
    const nameAry = ['id', 'name', 'address'],
      failed = nameAry.some(v => !req.body[v]);

    if (failed) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });

module.exports = router;