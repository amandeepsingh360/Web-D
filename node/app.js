const express=require("express")

const app=express();

app.set("view engine","pug");
var port=80;
// jab '/' pe jaenge to ye run hoga
app.get("/",(req,res)=>{
    // this will display on home 
    res.send("This is home");
})
app.get("/about",(req,res)=>{
    // this will display on home 
    res.send("This is get about");
})

app.post("/about",(req,res)=>{
    // this will display on home 
    res.send("This is post about");
})
app.get("/services",(req,res)=>{
    // this will display on home 
    res.send("This is services");
})

app.listen(port,()=>{
    console.log(`Application started successfully on ${port}`)
})