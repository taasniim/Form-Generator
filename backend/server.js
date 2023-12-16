require('dotenv').config()
const express=require('express')
//express app
const app=express()
//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.get('/',(req,res)=>{
    res.json({mssg:"welcome to app"})
})

//liste for requests 
app.listen(process.env.PORT,()=>{
    console.log('listennig on port',process.env.PORT)
}) 
process.env