const mongoose = require("mongoose")

 const {Schema} = mongoose

 const {serviceShema} = require("./Services")

 const partySchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    budget:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    services:{
        type:[serviceShema]
    },

 }, {timestamps:true}
 );
 const Party = mongoose("Party", partySchema);

 module.exports= Party;