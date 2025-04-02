;
const { default: mongoose } = require("mongoose");

const contactschema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    subject:{
        type:String
    },
    message:{
        type:String
    },
})
const contacts=mongoose.model('contact',contactschema)
module.exports=contacts