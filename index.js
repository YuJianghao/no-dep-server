const http = require("http")
const host = process.env.HOST || "localhost"
const port = process.env.PORT || 3000

function jsonHandler(req, res) {
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ message: "Hello World" }))
}

function defaultHandler(req, res) {
  res.setHeader("Content-Type", "text/plain")
  res.end("Hello World")
}

function requestHandler(req, res) {
  res.statusCode = 200
  switch (req.url) {
    case "/json": {
      jsonHandler(req, res)
      break
    }
    default: {
      defaultHandler(req, res)
      break
    }
  }
}

const server = http.createServer(requestHandler)

server.listen(port, host, (err) => {
  if (err) {
    return console.log("something bad happened", err)
  }

  console.log(`server is listening on ${host}:${port}`)
})
