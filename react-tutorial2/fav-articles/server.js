const faker = require('faker')
const jsonServer = require('json-server')
const server = jsonServer.create()
const express = require('express')

server.use((req, res, next) => {
  //CORS実現のために、ヘッダーに以下を追加
  //あとで確認
  //HTTP通信を許可するURIを指定
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS")
  //continue to JSON server router
  next()
})

// URIとjsonのkeyを一致させる
const rewriter = jsonServer.rewriter({'/api/*': '/$1'})
//表示したいjsonの内容をrouterで渡す
//{articles: [articlesのリスト]}が返ってくる
const router = jsonServer.router(getArticles())

server.use('/api/', router)
server.use('/static', express.static(__dirname + '/dist/static'))
server.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

function getArticles() {
  const articles = []

  for (var id = 1; id < 51; id++) {
    // fakerでデータ作成
    articles.push({
      "id": id,
      "title": faker.lorem.words(),
      "description": faker.lorem.paragraphs(),
      "isFavorite": false
    })
  }

  return { "articles": articles }
}

module.exports = server
