const mongoose=require('mongoose')
const Schema =mongoose.Schema 

//shema pour un champ de formulaire 
const formField=new Schema({
    label:{
        type : String,
        required:true,
    },
    type:{
        type : String,
        required :true,
        enum:['text', 'textarea', 'checkbox', 'select','number','email','date','file','tel','color','password'],
    },
    options:['String'],
});

//shema pour un un formulaire 
const formSchema =new Schema({
    title:{ 
        type:String,
        required:true
    }, 
    fields:[formField], 
    publish:{
        type:Boolean,
        default:false,
    }
});


module.exports=mongoose.model('form',formSchema)

