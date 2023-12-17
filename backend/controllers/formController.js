const Form=require('../models/formModel') 
const mongoose=require('mongoose')

//get all forms
const getAllForms=async(req,res)=>{
    const forms=await Form.find({}).sort({createdAt:-1})
    res.status(200).json(forms)
}

// get one form 
const getoneforms=async(req,res)=>{
    const{id}=req.params 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such form'})
    }
    const form=await Form.findById(id)
    if (!form)
    {
        return res.status(404).json({error:'No  such form'})
    } 
    res.status(200).json(form)
}


//create one form 

const createoneForm=async(req,res)=>{
    const {title,fields}=req.body  
    //add form to db 
    try {
        const form=await Form.create({title,fields})
        res.status(200).json(form)
    } catch(error){
        res.status(400).json({error:error.message})
    }
    res.json({mssg:'create  new form'})
}

//delete one form
const deleteoneForm=async(req,res)=>{
    const{id}=req.params 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such form'})  
    } 
    const form=await Form.findOneAndDelete({_id:id}) 
    if (!form)
    {
        return res.status(404).json({error:'No such form'})
    } 
    res.status(200).json(form)
}

//update one form 
const updateoneForm=async(req,res)=>{
    const {id}=req.params 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such form'})  
    }  
    const form=await Form.findByIdAndUpdate({_id:id},{
        ...req.body
    }) 
    if (!form)
    {
        return res.status(404).json({error:'No such form'})
    } 
    res.status(200).json(form)
}


module.exports={
    createoneForm, 
    getAllForms,
    getoneforms,
    deleteoneForm, 
    updateoneForm
}