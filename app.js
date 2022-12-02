const express = require('express')
const morgan = require('morgan')
//const path = require('path') 
const app = express()
// const pokemonRouter = require('./api/pokemon')
// const client = require('./api')

app.use(morgan('tiny'))
app.use(express.urlencoded({extended: false}))
//app.listen(express.json())

app.get('/', (req,res,next) => {
    res.send("Hello! Homepage")
})

app.use('/api', require('./api'))






const PORT = 1337
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}...`)
})