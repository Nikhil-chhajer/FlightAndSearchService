const express = require("express");
const bodyParser = require('body-parser');
const { PORT } = require('../config/serverconfig.js');
const ApiRoutes = require('../routes/index');
//const db = require('../models/index');
const { City, Airport,Airplane } = require('../models/index');
//database ko call kar rahe hai use mein city,airport,airplanes,flight hai
const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', ApiRoutes);
    app.listen(PORT, async () => {
        console.log(`the server started at ${PORT}`);
        // if (process.env.Sync_DB) {
        //     db.sequelize.sync({
        //         alter: true
        //     });
        // }

        // const city = await City.findOne({
        //     where: {
        //         id: 1
        //     }
        // });
        // const airports = await city.getAirports();




        // const newAirport=await Airport.findOne({
        //     where:{
        //         id:5
        //     }
        // })
        // await city.addAirport(newAirport);
        // await city.addAirport({
        //     name:"jindal airport"
        // })
        //console.log(city, airports);

        //  await Airplane.create({
        //     modelNumber:'Bombardier CRJ',
        //     //capacity:100 bina capacity input kiya nhi automatic capaccity aa jaye gee kyuki hum default valueset kari hai 200
        //  });

    })
}
setupAndStartServer();