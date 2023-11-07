const { Flightservice } = require('../services/index');
const flightservice = new Flightservice();

const create = async (req, res) => {
    try {
        let flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            arrivalAirportId: req.body.arrivalAirportId

        }
        const flight = await flightservice.createFlight(flightRequestData);
        return res.status(201).json({
            data: flight,
            success: true,
            messgage: 'Sucessfully created a flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        })
    }
}
const getAll = async (req, res) => {
    try {
        const response = await flightservice.getAllFlightData(req.query);
        return res.status(201).json({
            data: response,
            success: true,
            messgage: 'Sucessfully fetch a flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch a flight',
            err: error
        })
    }
}
module.exports = {
    create,
    getAll
}