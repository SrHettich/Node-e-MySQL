const mongoose = require("mongoose")
const express = require('express')
const app = express()

const mongoClient = require("mongodb").MongoClient
mongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true },
(error, conection) => 
{
  if(error) 
  {
    return console.log(error)
  }
  else
  {
    global.conection = conection.db("mongo")
    console.log('Conectado!')
  }
})

module.exports = {}