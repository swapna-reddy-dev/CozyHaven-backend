const { Schema , model } = require('mongoose')

const buildingsSchema = new Schema({
    ownerId:{
        type:Schema.Types.ObjectId,
        ref:'User'
        },
    profilePic:String,
    name:String,
    address:String,
    contact:String,
    deposit:Number,
    amenitiesPic:[{
        type: String,
      }],              
    rules:String,          
    license:[{
        type: String,   
      }],  
    geolocation:{
        lat:String,
        lng:String
    },
    isApproved:{
        type:String,
        default:'Pending'
    }
},{timestamps:true})

const Building = model('Building', buildingsSchema)

module.exports = Building

