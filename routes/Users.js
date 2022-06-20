const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/Users')

router.get('/', usersControllers.getAllUsers)
router.get('/:id', usersControllers.getUsersById)
router.post('/create-user', usersControllers.createUser)
router.put('/update-user/:id', usersControllers.updateUser)
router.delete('/delete-user/:id', usersControllers.deleteUserById)

module.exports = router