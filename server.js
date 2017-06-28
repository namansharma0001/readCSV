const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var mongoose = require('mongoose')
var cookieParser = require('cookie-parser')
var moment = require('moment')

const app = express()

app.use(cookieParser('qwertyuiop123456789'))
const cookieExpirationDate = new Date()
const cookieExpirationDays = 365
cookieExpirationDate.setDate(cookieExpirationDate.getDate() + cookieExpirationDays)


const api = require('./server/routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'dist')))
app.use('/api', api)

app.get('*', (req, res) => {

  console.log(path.join(__dirname, 'dist/index.html'))
  res.sendFile(path.join(__dirname, 'dist/index.html'), function (err) {
    if (err) {
      console.log('Build Angular Project!!!')
    }
  })
})

const port = process.env.PORT || '3000'

app.set('port', port)

const server = http.createServer(app)

server.listen(port, () => console.log('\x1b[36m%s\x1b[0m','['+moment().format('dddd, MMMM Do YYYY, h:mm:ss a')+'] '+`Server running on http://localhost:${port}`))
