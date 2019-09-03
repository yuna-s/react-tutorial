const faker = require('faker')
const jsonServer = require('json-server')
const server = jsonServer.create()

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS")
  next()
})

const rewriter = jsonServer.rewriter({'/api/*': '/$1'})
const router = jsonServer.router(getArticles())

server.use(rewriter)
server.use(router)

function getArticles() {
  const articles = []

  for (var id = 1; id < 51; id++) {

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
