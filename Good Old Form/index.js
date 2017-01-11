var express = require('express')
var bodyparser = require('body-parser')

var port = process.argv[2]

var app = express()

app.use(bodyparser.urlencoded({extended: false}))
app.post('/form', (req, res) => {
  if (req.body) {
    var poke = req.body.str.split('').reverse().join('')
    res.send(poke)
  }
})
app.listen(port)
