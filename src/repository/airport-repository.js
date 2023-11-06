const {Airport}= require('../models/index');
const {Op}=require('sequelize');

class AirportRespository{
    async createAirport({name,cityId}){
        try {
            const airport=await Airport.create({name,cityId});
            return airport;
        } catch (error) {
            console.log("something wrong in the repository layer");
            throw {error};
        }
    }
    async updateAirport(airportId,data){
        try {
            const airport=await Airport.findByPk(airportId);
            airport.name=data.name;
            await airport.save();
            return airport;
        } catch (error) {
            console.log("something wrong in the repository layer");
            throw {error};
        }
    }
    async deleteAirport(airportId){
        try {
            await Airport.destroy({
                where:{
                    id:airportId
                }
            });
        
        } catch (error) {
            console.log("something wrong in the repository layer");
            throw {error};
        }
    }
    async getAirport(airportId){
        try {
            const airport=await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log("something wrong in the repository layer");
            throw {error};
        }
    }
}
module.exports=AirportRespository