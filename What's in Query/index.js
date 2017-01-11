var express = require('express')
var crypto = require('crypto')

var port = process.argv[2]

var app = express()

app.get('/search', (req, res) => {
  res.send(req.query)
})
app.listen(port)
