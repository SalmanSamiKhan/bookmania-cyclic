import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
    {
    name:{type:String, required:true},
    slug:{type:String, required:true},
    author:{type:String, required:true},
    genre:{type:String, required:true},
    image:{type:String, required:true},
    year:{type:Number, required:true},
    stock:{type:Number, required:true},
    price:{type:Number, required:true},
    rating:{type:Number, required:true},
    review:{type:Number, required:true},
    desc:{type:String, required:true},
    },
    {
        timestamps:true
    }
)

const Book = mongoose.model('Book',bookSchema)
export default Book