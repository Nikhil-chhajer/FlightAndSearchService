const express = require('express');
const { FlightMiddleware } = require('../../middlewares/index');
const CityController = require('../../controller/city-controller');
const AirportController = require('../../controller/airport-controller');
const FlightController = require('../../controller/flight-controller');
const router = express.Router();
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);
router.post('/airport', AirportController.create);
router.post('/flights',
    FlightMiddleware.validateCreateFlight,
    FlightController.create);
router.get('/flights', FlightController.getAll)
module.exports = router;