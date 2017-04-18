let routes = require('express').Router()
let house = require('../controllers/houseControls')

// get houses
routes.get('/houses', house.getHouse)

// create house
routes.post('/houses', house.postHouse)

// delete House
routes.delete('/houses/:id', house.deleteHouse)

// update house
routes.put('/houses/:id', house.updateHouse)


module.exports = routes;