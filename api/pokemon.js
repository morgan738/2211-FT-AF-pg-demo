

const express = require('express')
const pokemonRouter = express.Router()
const { Pokemon, Trainer } = require('../db')


pokemonRouter.get("/", async (req, res) => {
    try {
      const data = await Pokemon.findAll()
      res.send(data);
    
    } catch (error) {
      res.status(500).send(`Something went wrong: ${error}`);
    }
  });
  pokemonRouter.get('/:id', async (req, res, next) => {
    const { id } = req.params
    console.log(req.params)
  
    try {
        const data = await Pokemon.findByPk(id)
        
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(`Something went wrong: ${error}`);
    }
    
  })

  
//   pokemonRouter.get('/', async (req, res, next) => {
        
//     try {
//         const data = await Pokemon.findAll({
//             where:{
//                 trainerId: 2,
//                 elementType: 'Rock'

//             },
//             include:[{
//                 model:Trainer
//             }]
//         })
        
//         res.status(200).send(data)
//     } catch (error) {
//         res.status(500).send(`Something went wrong: ${error}`);
//     }
    
//   })

pokemonRouter.post('/', async (req,res,next) => {
  const {name, elementType} = req.body
  try {
    const newPokemon = Pokemon.create({name: name, elementType:elementType})
    res.send(newPokemon)
  } catch (error) {
    next(error)
  }
})

  pokemonRouter.put('/addTrainer', async (req, res, next) => {
    const { trainerId, pokemonId } = req.body
    console.log(res)
   
    console.log(Pokemon)
    try {
        const trainer = await Trainer.findByPk(trainerId)
        const pokemon = await Pokemon.findByPk(pokemonId)
        
        await pokemon.setTrainer(trainer)
        res.status(200).send(pokemon)
    } catch (error) {
        res.status(500).send(`Something went wrong: ${error}`);
    }
    
  })


  pokemonRouter.delete('/:id', async (req, res, next) => {
    const { id } = req.params
  
    try {
        const data = await Pokemon.destroy({
            where: {id: id}
        })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(`Something went wrong: ${error}`);
    }
    
  })

  module.exports = pokemonRouter
