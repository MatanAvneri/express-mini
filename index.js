'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.get('/', (req, res) => {
    res.json('ok')
})

app.post('/test', (req, res) => {
  res.json('ok')
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})