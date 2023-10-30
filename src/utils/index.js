const express=require("express");
const {PORT} = require('../config/serverconfig.js');

const setupAndStartServer=async()=>{
    const app=express(); 
    app.listen(PORT,()=>{
        console.log(`the server started at ${PORT}`);

        
    })
}
setupAndStartServer();