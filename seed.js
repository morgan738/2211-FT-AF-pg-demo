
const { db, Pokemon, Trainer } = require('./db')


async function syncDB() {
  try {

    await db.sync({ force: true })

    await Pokemon.create({
      name: 'Pikachu',
      elementType: 'Thunder',
    })

    await Pokemon.create({
      name: 'Mr. Mime',
      elementType: 'Psychic',
    })

    await Pokemon.create({
      name: 'Tyranitar',
      elementType: 'Rock',
    })

    await Pokemon.create({
      name: 'Dragonite',
      elementType: 'Dragon',
    })

    await Pokemon.create({
        name: 'Omanyte',
        elementType: 'Rock',
      })

      await Pokemon.create({
        name: 'Butterfree',
        elementType: 'Bug',
      })

      await Pokemon.create({
        name: 'Primeape',
        elementType: 'Fighting',
      })

      await Pokemon.create({
        name: 'Golbat',
        elementType: 'Poison',
      })

    console.log('Created all the pokemon...')

    await Trainer.create({
        name: 'Gary'
    })
    await Trainer.create({
        name: 'Ash'
    })
    await Trainer.create({
        name: 'Jessie'
    })
    await Trainer.create({
        name: 'James'
    })

    console.log('Created the trainers...')



   

    
  } catch (err) {
    console.log(err)
  } finally {
    
    await db.close()

    console.log('Closed DB connection.')
  }
}
syncDB()