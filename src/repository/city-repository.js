//In repository we will write all interaction with the models
//In services we will write the business logic
//In controller we will hit the API's
const {City}= require('../models/city');
class CityRepository{
    async createCity({name}){
        try{
            const city=await City.create({name});
            return city;
        }
        catch(error){
            console.log("something wrong in the repository layer");
            throw {error};
        }
    }
    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                     id:cityId
                }
            });
        }
        catch(error){
            console.log("something wrong in the repository layer");
            throw {error};
        }
    }


    async updateCity(cityId,data){
        try {
            const city= await City.update(data,{
                where:{
                    id :cityId
                }
            });
            return city;
        } catch (error) {
            console.log("something wrong in the repository layer");
            throw {error};
        }

    }
    async getCity(cityId){
        try{
            const city=await City.findByPK(cityId);
            return city;
        }
        catch(error){
            console.log("something wrong in the repository layer");
            throw {error};
        }
    }
}
module.exports=CityRepository;