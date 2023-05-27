//WE HAVE TO CONNECT DATA FROM TEMPLATE ENG TO FLIPKART CSS CODE. ND THIS TIME FLIPKART CSS CODE J=HAS DYNAMIC DATA I.E DYNAMIC WEBSITE IT IS


const express=require("express");
  const app=express();
  const pathModule=require("path")


   console.log(__dirname);
  
   //REMEMBER IN CSS FOLDER, HTML FILE SHOULD BE NAMED AS INDEX.HTML 🔴🔴🔴🔴
   //BUILT IN MIDDLEWARE(I.E WORK BETWEEN REQUEST ND RESPONSE) ***
  const staticPath= pathModule.join(__dirname, "../flip_K2" )        
console.log(staticPath); 




//SET VIEW 
//=>bcoz of this, index.html in another file where css code written . its index.html file ould run
//app.set("view engine", "hbs")  

app.set("view engine","hbs");
 
  app.use(express.static(staticPath))    //-->this will bring css path for views. one

// RENDER HBS FILE(INDEX ONE) WHERE ALMOST HTML CODE IS THERE.

 app.get("/", (req, res)=>{            
  res.render("index")
 })


    app.get("/contact", (req,res)=>{           //==>worked right 100%%
      res.render('try');
    });

    app.get("/about", (req,res)=>{
      res.render("about")
    })

              
    //wont work , as it foloows top to bottom, top is given priority. afetr top the connection is closed 👍
  //  app.get("/", (req,res)=>
  //  {   res.send("doneee!!!s")
  //  })

    //ERROR PAGE
 app.get('*', (req,res)=>{
   //res.send("404 PAGE NOT FOUND")
   
   //can also render error page. that is doing some html in error pg. do that in .hbs file
   
    res.render("error")

 })





//use express's static methods
   
 





  app.listen(8000, "localhost", (err)=>{console.log("listening........")})