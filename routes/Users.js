const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/Users')

router.get('/', usersControllers.getAllUsers)
router.get('/:id', usersControllers.getUsersById)
router.post('/create-user', usersControllers.createUser)

module.exports = router