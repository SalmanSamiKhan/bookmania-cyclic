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

// mongoose
dotenv.config() // for retriving data from .env
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('connected to db')
}).catch(err => {
    console.log(err.message)
})

const app = express()

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

const localPort = process.env.PORT || 5000
app.listen(localPort, async (req, res) => {
    console.log(`server runnign at http://localhost:${localPort}`)
})