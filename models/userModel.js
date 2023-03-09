import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name:{type:String, required:true, minLength:2},
        email:{type:String, required:true, unique:true},
        password:{type:String, required:true, minLength:6},
        isAdmin:{type:Boolean, required:true, default:false}
    },
    {
        timestamps:true
    }
)

const User = mongoose.model('User',userSchema)
export default User