import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
},{timestamps : true});
// timestamp helps us to known the time of Creation and time of updation

// Now create a Model
const User = mongoose.model("User",userSchema);

// Now export the model
export default User;

