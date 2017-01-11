var express = require('express')
var fs = require('fs')

var port = process.argv[2]
var file = process.argv[3]

var app = express()

app.get('/books', (req, res) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(500)
    }
    try {
      res.json(JSON.parse(data))
    }
    catch {
      res.sendStatus(500)
    }
  })
})
app.listen(port)
