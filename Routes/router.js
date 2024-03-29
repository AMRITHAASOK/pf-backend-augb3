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

//get all users projects path - https://localhost:4000/project/all-user-projects
router.get('/project/all-user-projects',jwtMiddleware,projectController.getAllUserProjects)

//get all projects path - https://localhost:4000/project/all-project
router.get('/project/all-project',jwtMiddleware,projectController.getAllProjects)

//get home prject - https://localhost:4000/project/home-prjects
router.get('/project/home-project',projectController.getHomeProject)

//update prject - https://localhost:4000/project/update-project/59787809809
router.put('/project/update-project/:pid',jwtMiddleware,multerConfig.single('projectImage'),projectController.updateProject)


//delete prject - https://localhost:4000/project/delete-project/658585875856556

router.delete('/project/delete-project/:pid',jwtMiddleware,projectController.deleteProject)

module.exports = router