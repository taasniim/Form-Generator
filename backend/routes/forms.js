//endpoints or routes 
const express=require('express') 
const router =express.Router() 
const form=require('../models/formModel')
//get all the form
router.get('/',(req,res)=>{ 
    res.json({mssg:'Get all forms'})
})  
//get one form 
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get one form'})
}) 
//create
router.post('/',(req,res)=>{ 
    const {title,fields}=req.body 
    try {
        const form=form.create()
    } catch(error){
        res.status(400).json({error:error.message})
    }
    res.json({mssg:'create new form'})
}) 
//delete
router.delete('/:id',(req,res)=>{
    res.json({mssg:'delete form'})
})  
//update 
router.patch('/:id',(req,res)=>{
    res.json({mssg:'update one form'})
}) 

module.exports=router 