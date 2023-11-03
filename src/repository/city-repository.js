//In repository we will write all interaction with the models
//In services we will write the business logic
//In controller we will hit the API's
const {City}= require('../models/index');
const {Op}=require('sequelize');
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
        //The below approach also works but will not return updated object
        //if we use Pg then returning :true can be used else not
        // try {
        //     const city= await City.update(data,{
        //         where:{
        //             id :cityId
        //         },
        //     });
        //for getting updated data in mysql we use the below approach
        try{
            const city=await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
            return city;
        
        } catch (error) {
            console.log("something wrong in the repository layer");
            throw {error};
        }

    }
    async getCity(cityId){
        try{
            const city=await City.findByPk(cityId);
            return city;
        }
        catch(error){
            console.log("something wrong in the repository layer");
            throw {error};
        }
    }
    async getAllCities(filter){
        try{
            if(filter.name){
                const cities=await City.findAll({
                    where:{
                        name:{
                               [Op.startsWith]:filter.name,
                        }
                    }
                })
                return cities;
            }
            const cities=await City.findAll();
            return cities;
        }
        catch(error){
            console.log("something wrong in the repository layer");
            throw {error};
        }
    }
}
module.exports=CityRepository;