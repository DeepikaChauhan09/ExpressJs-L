 //create server- of ur own

  const express=require("express");
  const app=express();
  const pathModule=require("path")


   console.log(__dirname);
  
   //REMEMBER IN CSS FOLDER, HTML FILE SHOULD BE NAMED AS INDEX.HTML 🔴🔴🔴🔴
  const staticPath= pathModule.join(__dirname, "../flipkart_css" )        
console.log(staticPath); 

//use express's static methods
   
 app.use(express.static(staticPath));

   app.get("/",(req,res)=>{
    res.send(" lets see responsive static website sending from server as a respond")
   })





  app.listen(8000, "localhost", (err)=>{console.log("listening........")})