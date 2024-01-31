const express = require('express');

const userController = require('../Controllers/userController')

const projectController = require('../Controllers/projectController')

const jwtMiddleware = require("../Middlewares/jwtMiddleware")

const multerConfig = require('../Middlewares/multerMiddleware')

//create router object of express to define path
const router = new express.Router()

//using router object to define path

//Register API path  - https://localhost:4000/register - ->
router.post('/register',userController.register)

//Login API path  - https://localhost:4000/login -  ->
router.post('/login',userController.login)

//add user project API path - https://localhost:4000/project/add 
router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addUserProject)

module.exports = router