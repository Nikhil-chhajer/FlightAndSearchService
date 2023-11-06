const {AirportService}=require('../services/index');
const airportservice=new AirportService();

const create=async (req,res)=>{
           try {
            const airport=await airportservice.createAirport(req.body);
            return res.status(201).json({
                data:airport,
                success:true,
                message:'successfully created a airport'
            })
           } catch (error) {
            console.log(error);
            return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a airport',
            err:error
        })
           }
}
module.exports={
    create
}