//MongoDB
//we need some tools to interact with MongoDB
const MongoClient = require('mongodb').MongoClient //to use MongoDB
const ObjectID = require('mongodb').ObjectID //to interact with each document's ID
require('dotenv').config() //to access hidden connection string to MongoDB

//Express
const express = require('express') //give me Express
const cors = require('cors')
const app = express() //app is our Express app
const port = 3000 //let's connect here
const bodyParser = require('body-parser') //needed for posting and res.json()

//current Server Discover and Monitoring Engine is deprecated
//useUnifiedTopology: true for the new Server Discover and Monitoring engine
MongoClient.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, (err, client) => {
  if (err) return console.error(err)
  console.log('Connected to Database')
  const db = client.db('playground')
  const characters = db.collection('characters')

  app.use(cors())
  app.use(bodyParser.json())

  app.get('/api/characters', (req, res) => {
    characters.find({}).toArray()
    .then(documents => {
      res.json(documents)
    })
  })

  app.post('/api/characters', (req, res) => {
    let newCharacter = {
      name: req.body.name,
      talent: req.body.talent
    }
    characters.insertOne(newCharacter)
    res.json(newCharacter)
  })

  app.delete('/api/characters/:id', (req, res) => {
    characters.deleteOne({ _id: ObjectID(req.params.id) })
    .then(() => {
      return characters.find({}).toArray()
    })
    .then((characters) => {
      res.json(characters)
    })
  })

  app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`)
  })

})
