 
  const express =require("express");
  const app=express();
  const pathmodule=require("path")
 
   console.log(__dirname); //gives url of current directory u r on

    // TO CONNECT PATHS OF FOLDER WHERE HTML/CSS CODE ND FILES ARE +NT  , WITH, THE CURR FOLDER MEANSTHE FOLDER WHERE MY INDEX.JS PATH +NT OR WHERE I WANT TO CONNECT WITH====> we use path.join method see====>

    const staticPath_Linkage =pathmodule.join(__dirname, "../cssStatic_websites");
    console.log(staticPath_Linkage);
    
    const pg=app.use(express.static(staticPath_Linkage))
    





   app.get("/about", (req,res)=>{
    res.send(" lets learn how to send a static website in respon from server/backend side")
   
    //  res.send(pg);
   })

   app.listen(8000, "localhost", (err)=>{console.log("listening")})