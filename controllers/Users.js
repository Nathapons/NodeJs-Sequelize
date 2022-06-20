const { Sequelize } = require('../models');
const db = require('../models');

const OP = Sequelize.Op

const getAllUsers = async (req, res) => {
    const allUsers = await db.Users.findAll();

    res.status(200).send(allUsers)
}

const getUsersById = async (req, res) => {
    const id = req.params.id

    const oneUsers = await db.Users.findByPk(id);
    res.status(200).send(oneUsers)
}

const createUser = async (req, res) => {
    const {username, password, firstname, lastname, email} = req.body
    console.log('req.body=>', req.body)
    const newUser = await db.Users.create(
        {
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            email: email
        }
    )

    res.status(201).send(newUser)
}

module.exports = {
    getAllUsers,
    getUsersById,
    createUser
}