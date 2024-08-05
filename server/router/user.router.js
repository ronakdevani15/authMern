import express from 'express'
import { currentUser, loginUser, registerUser } from '../controller/user.controller.js'

const route = express.Router()

route.get('/user',currentUser)
route.post('/register',registerUser)
route.post('/login',loginUser)

export default route