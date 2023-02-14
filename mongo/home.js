const express = require('express')
const rota = express.Router()
const db = require('db')

//IR PARA HOME
rota.get('/', function(req, res)
{
    res.render('/views/layot/form')
})