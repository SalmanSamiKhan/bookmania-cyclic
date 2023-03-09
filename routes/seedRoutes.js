import express from 'express'
import data from '../data.js'
import Book from '../models/bookModel.js'
import User from '../models/userModel.js'

const seedRouter = express.Router()

// url - /api/seed
seedRouter.get('/', async (req,res)=>{
    await Book.remove({})
    const createdBooks = await Book.insertMany(data.books)
    await User.remove({})
    const createdUsers = await User.insertMany(data.users)
    // passing names as Books and Users in json
    res.send({ Books:createdBooks , Users:createdUsers}) 
    // default names are used as createdBooks, createdUsers in json
    // res.send({ Books:createdBooks , Users:createdUsers}) 
})

export default seedRouter