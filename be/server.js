const express = require('express')
const cors = require('cors')
const db = require('./app/db')
const https = require('https')
const fs = require('fs')
const path = require('path')
require('dotenv').config()

const app = express()
app.use(cors())

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use((error, req, res, next) => {
  console.log('This is the rejected field ->', error.field)
})

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to brumoh application.' })
})

// routes
require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)
require('./app/routes/admin.routes')(app)
require('./app/routes/training.routes')(app)

// set port, listen for requests
const PORT = process.env.PORT || 8088

// Read SSL certificate and key files
const options = {
  key: fs.readFileSync(path.join(__dirname, 'localhost-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'localhost.pem'))
}

// Create HTTPS server
const server = https.createServer(options, app)

server.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})
