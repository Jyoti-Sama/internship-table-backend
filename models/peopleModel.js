import mongoose from "mongoose";

const PeopleSchema = new mongoose.Schema({
    name:String,
    email:String,
    hobbies:String,
    ph:Number,    
    createDate:{
        type: Date,
        default:new Date()
    }
})

const PeopleModel = mongoose.model("peoples",PeopleSchema);
export default PeopleModel;
