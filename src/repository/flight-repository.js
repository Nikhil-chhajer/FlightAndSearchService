const { Flights } = require('../models/index');
const { Op } = require('sequelize');
class FlightRepository {
    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filterdepartureAirportId = data.departureAirportId;
        }
        // if (data.minPrice && data.maxPrice) {
        //     Object.assign(filter, {
        //         [Op.and]: [{
        //             price: { [Op.lte]: data.maxPrice }
        //         },
        //         {
        //             price: { [Op.gte]: data.minPrice }
        //         }]
        //     });
        // }
        let pricefilter=[];
        if(data.minPrice){
            // Object.assign(filter,{
            //     price:{[Op.gte]:data.minPrice}
            // })
            pricefilter.push({price:{[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice){
            // Object.assign(filter,{
            //     price:{[Op.lte]:data.maxPrice}
            // })
            pricefilter.push({price:{[Op.lte]:data.maxPrice}});
        }
        Object.assign(filter,{[Op.and]:pricefilter});
        return filter;
    }
    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("something wrong in the repository layer");
            throw { error };
        }
    }
    async getFlight(flightId) {
        try {
            const flight = await findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something wrong in the repository layer");
            throw { error };
        }
    }
    async getAllFlights(filter) {
        try {
            const filterObject=this.#createFilter(filter);
            const flight=await Flights.findAll({
                where:filterObject
            });
            return flight;

        } catch (error) {
            console.log("something wrong in the repository layer");
            throw { error };
        }
    }
}
module.exports = FlightRepository;