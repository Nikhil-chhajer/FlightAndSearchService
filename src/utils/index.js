const express=require("express");
const {PORT} = require('../config/serverconfig.js');
const port=process.env.PORT
const setupAndStartServer=async()=>{
    const app=express(); 
    app.listen(port,()=>{
        console.log(`the server started at ${port}`);
        
    })
}
setupAndStartServer();