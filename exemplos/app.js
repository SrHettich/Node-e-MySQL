const express = require('express')
const app = express()

app.get('/', function(req, res)
{
    res.sendFile(__dirname + "/index.html")
})

app.get('sobre', function(req, res)
{
    res.render('form')
})




app.listen(3000, function() {console.log('Rodando!')})