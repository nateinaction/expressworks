var path = require('path')
var express = require('express')
//var pug = require('pug')

var port = process.argv[2]
var templateDir = process.argv[3]

var app = express()

app.set('views', path.join(templateDir))
app.set('view engine', 'jade')
app.get('/home', (req, res) => {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(port)
