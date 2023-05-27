 
  const express=require("express")

  const app=express();

  app.get("/", (req,res)=>{
     res.send(" this is home pageeeeee....");
  })

  app.get("/about", (req,res)=>{
    res.send(" this is about pageeeeee....");
 })
 app.get("/contact/email", (req,res)=>{
    res.send(" this is contact-email pageeeeee....");
 })

    app.get("/status", (req,res)=>{
    res.status(200).send(" this is home pageeeeee....");
 })

 //2  HOW TO  🔴 🔴SEND HTML ELEM 🔴 🔴 🔴 TO USER. ->SO CAN DO THAT THROUGH RES.SEND NF WRITE METHOD
  
 app.get("/cost", (req,res)=>{
    
    res.write(" <h1>cost is---> 4000 </h1>");
    res.write("<h1> 7 day ccost is ---> 9,00,000 </h1>")
    res.write("<h1> 1 month  cost is ---> 13,00,000 </h1>")
    res.end()
 })

  
   app.get("/color", (req,res)=>{
    
    res.send(" <h1>  yellow  </h1>");
    // res.send("<h1>  green </h1>")           
    // res.send("<h1> white  </h1>")

 //CAN'T HAVE RES.SEND(), METHOD MORE THAN 1 TIME. IF U HAVE, THEN ONLY 1ST ONE WILL WORK    
 })

  
 //3.  how to pass json data as a respond

   app.get("/india", (req, res)=>{
     res.send({
         name:"alexa",
         age:23,
         country:"india",
     })
   })
     
     //CAN ALSO SEND MUTLIPLE OBJECTS EITHER BY USING RES.WRITE OR BY SENDING ARRAY OF OBJECT

      app.get("/payment", (req,res)=>{
         res.send([
        
        {
            name:"alexa",
            age:23,
            country:"india",
        },

        {
        name:"bob",
        age:73,
        country:"usa",
        },
      ]
         )
    }
      )

    
  

 //listen request
 app.listen(8000, "localhost",(err)=>{})