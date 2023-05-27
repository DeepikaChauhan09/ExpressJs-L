 
  const express=require("express")

  const app=express();

  

  app.get("/", (req, res)=>{
    
    res.send(" hello world  !!!!!!!!!!!!!!!!")

  })

  app.listen(8000, "localhost", (err)=>{
    console.log(" listening  ...........")
  })