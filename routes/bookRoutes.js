import express from 'express'
import data from '../data.js'
import Book from '../models/bookModel.js'

const bookRoutes = express.Router()

bookRoutes.get('/slug/:slug', async (req, res) => {
    const book = await Book.findOne({slug:req.params.slug})
    if (book) {
        res.send(book)
    } else {
        res.status(404).send({message:'Book not found'})
    }
})

bookRoutes.get('/id/:id', async (req, res) => {
    const book = await Book.findById(req.params.id)
    if(book){
    res.send(book)
    }else{
    res.status(404).send({ message: 'Book not found' })
    }
})

export default bookRoutes