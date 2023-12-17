require('dotenv').config()
const express=require('express') ;
const bodyParser = require('body-parser'); 
const formsRoutes=require('./routes/forms') 
const mongoose=require('mongoose')
//express app
const app=express()
//middleware 
app.use((express.json()))
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
}) 
//routes
app.use('/api/forms',formsRoutes) 
//connect with the mongo db 
mongoose.connect(process.env.MONGO_UI)
//what we do after connect to the databes we listen to the requests 
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log('connected to db and listennig on port',process.env.PORT)
        }) 
    })  
    //what we do if the connect to the database failed 
    .catch((error)=>{
        console.log(error)
    })


process.env