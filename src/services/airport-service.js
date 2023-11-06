const {AirportRepository}=require('../repository/index');
class AirportService{
    constructor(){
        this.airportRepository=new AirportRepository();
    }
    async createAirport(cityId,data){
          try {
            const airport=await this.airportRepository.createAirport(cityId,data);
            return airport;
            
          } catch (error) {
            console.log("something wrong in the Service layer");
            throw { error };
          }
    }
    async updateAirport(airportId,data){
        try {
          const airport=await this.airportRepository.updateAirport(airportId,data);
          return airport;
          
        } catch (error) {
          console.log("something wrong in the Service layer");
            throw { error };
        }
    }
    async deleteAirport(airportId){
        try {
          const response=await this.airportRepository.deleteAirport(airportId);
          return response;
          
        } catch (error) {
          console.log("something wrong in the Service layer");
            throw { error };
        }
    }
    async getAirport(airportId){
        try {
          const airport=await this.airportRepository.getAirport(airportId);
          return airport;
          
        } catch (error) {
          console.log("something wrong in the Service layer");
            throw { error };
        }
  }
}
module.exports=AirportService;