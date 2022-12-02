const Sequelize = require('sequelize')

// connects to the pokemonworld database
const db = new Sequelize('postgres://localhost/pokemonworld', { logging: false })

module.exports = db;