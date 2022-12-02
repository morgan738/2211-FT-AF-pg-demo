const Sequelize = require('sequelize')
const db = require('./db')

const Pokemon = db.define('pokemon', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    elementType: {
        type: Sequelize.STRING
    },
    
})

module.exports = Pokemon

