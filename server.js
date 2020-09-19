//MongoDB
//we need some tools to interact with MongoDB
const MongoClient = require('mongodb').MongoClient //to use MongoDB
const ObjectID = require('mongodb').ObjectID //to interact with each document's ID
require('dotenv').config() //to access hidden connection string to MongoDB

//Express
const express = require('express') //give me Express
const app = express() //app is our Express app
const port = 3000 //let's connect here
const bodyParser = require('body-parser') //needed for posting and res.json()

MongoClient.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, (err, client) => {
  if (err) return console.error(err)
  console.log('Connected to Database')
  const db = client.db('playground')
  const characters = db.collection('characters')

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded( {extended: true} ))

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/api/posts', (req, res) => {
    array = ["1", "2", "3"]
    res.json(array)
  })

  app.post('/api/characters', (req, res) => {
    res.json(req.body)
  })

  app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`)
  })

})
