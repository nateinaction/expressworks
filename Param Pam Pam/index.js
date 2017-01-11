var express = require('express')
var crypto = require('crypto')

var port = process.argv[2]

var app = express()

var hashThis = (id) => (
  crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex')
)

app.put('/message/:id', (req, res) => {
  res.send(hashThis(req.params.id))
})
app.listen(port)
