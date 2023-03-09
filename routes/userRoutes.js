import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'
import { generateToken } from '../utils.js'
import {body, validationResult} from 'express-validator';

// express validator conditions array
const signupValidator = [
    body('name', 'Enter a valid name').isLength({ min: 2 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 6 characters').isLength({ min: 6 })
]

const loginValidator = [
    body('email', 'Enter a valid email').isEmail(),
]

const userRouter = express.Router()

userRouter.post('/login', loginValidator, expressAsyncHandler(async (req, res) => {
    // Express validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await User.findOne({ email: req.body.email })
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token:generateToken(user)
            })
            return
        }
    }
    res.status(401).send({ message: 'Invalid email or password' })
}))
userRouter.post('/signup', signupValidator, expressAsyncHandler(async (req, res) => {
    // Express validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {name,email,password} = req.body
    const existingUser = await User.findOne({ email: email })
    if (existingUser) {
        res.status(401).send({ message: 'Email already exists, Please use another email' })
        // if (bcrypt.compareSync(req.body.password, user.password)) {
            // res.send()
        //     return
        // }
    }
    const newUser = new User( {
        name: name,
        email:email,
        password: bcrypt.hashSync(password),
    })
    const user = await newUser.save()
    res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token:generateToken(user)
    })
    // User.create(newUser).then(() => res.json(newUser)).catch((err)=>res.json(err.message));
}))

userRouter.get('/fetchall', async(req,res)=>{
    const users = await User.find()
    if(users){
        res.send(users)
    }else{
        res.status(404).send({message:'Users not found'})
    }
})

export default userRouter