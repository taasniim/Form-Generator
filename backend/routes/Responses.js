
const express=require('express');
const router=express.Router(); 
const Response=require('../models/responseModel'); 
const {SaveResponse,getAllResponses}=require('../controllers/ResponsesController')

router.post('/',SaveResponse); 
router.get('/:formId',getAllResponses);





module.exports=router
