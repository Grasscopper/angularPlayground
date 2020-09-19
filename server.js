const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser') //needed for res.json()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/posts', (req, res) => {
  array = ["1", "2", "3"]
  res.json(array)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
