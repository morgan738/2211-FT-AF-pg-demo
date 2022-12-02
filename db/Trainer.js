const Sequelize = require('sequelize')
const db = require('./db')

const Trainer = db.define('trainer', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = Trainer