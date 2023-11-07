const express=require('express');
const CityController=require('../../controller/city-controller');
const AirportController=require('../../controller/airport-controller'); 
const FlightController=require('../../controller/flight-controller');
const router=express.Router();
router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);
router.post('/city/airport',AirportController.create);
router.post('/flights',FlightController.create);
router.get('/flights',FlightController.getAll)
module.exports=router;