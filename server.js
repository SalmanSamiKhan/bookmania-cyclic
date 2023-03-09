import express from 'express'
import path from 'path'
import data from './data.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import booksRouter from './routes/booksRoutes.js'
import bookRouter from './routes/bookRoutes.js'
import insertRouter from './routes/seedRoutes.js'
import userRouter from './routes/userRoutes.js'
import expressAsyncHandler from 'express-async-handler'

const app = express()
const PORT = process.env.PORT || 5000

// cyclic mongoose
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGODB_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use('/api/seed', insertRouter)
app.use('/api/book', bookRouter)
app.use('/api/books', booksRouter)
app.use('/api/user', userRouter)

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})

// Deployment setup
const _dirname = path.resolve()
app.use(express.static(path.join(_dirname, '/frontend/build')))
app.get('*', (req,res)=>
    res.sendFile(path.join(_dirname, '/frontend/build/index.html'))
)


//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})