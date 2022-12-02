const db = require('./db')
const Pokemon = require('./Pokemon')
const Trainer = require('./Trainer')

// This is a good place to form associations
Pokemon.belongsTo(Trainer)
Trainer.hasMany(Pokemon)

module.exports = {
  db,
  Pokemon,
  Trainer,
}