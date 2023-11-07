const {FlightRepository,AirplaneRepository} = require('../repository/index');
const {compareTime}=require('../utils/helper');

class Flightservice {
    constructor(){
        this.airplaneRepository=new AirplaneRepository();
        this.flightRepository=new FlightRepository();
    }
    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{
                    error:'Arrival time or date can not be lesser then Departure time or departure time'
                }
            }
            const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);
        
            const flight=await this.flightRepository.createFlight({
                ...data,totalSeats:airplane.capacity
            });
            //we are adding total seats to data object
                return flight;

        } catch (error) {
            console.log("something wrong in the service layer");
            throw { error };
        }
    }
    async getAllFlightData(data){
        try {
            const flight=await this.flightRepository.getAllFlights(data);
            return flight;
            
        } catch (error) {
            console.log("something wrong in the service layer");
            throw { error };
        }
    }
}
module.exports=Flightservice;
