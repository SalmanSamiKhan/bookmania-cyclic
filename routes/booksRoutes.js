import express from 'express'
import Book from '../models/bookModel.js'

const booksRoutes = express.Router()

// url - /api/books
booksRoutes.get('/', async (req,res)=>{
    const books = await Book.find()
    if(books){
        res.send(books)
    }else{
        res.status(404).send({message:'Books not found'})
    }
})

export default booksRoutes