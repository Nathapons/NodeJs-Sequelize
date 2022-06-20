const { Sequelize } = require('../models');
const db = require('../models');

const OP = Sequelize.Op

// Get Method
const getAllUsers = async (req, res) => {
    const allUsers = await db.Users.findAll();

    res.status(200).send(allUsers)
}

const getUsersById = async (req, res) => {
    const id = req.params.id

    const oneUsers = await db.Users.findByPk(id);
    res.status(200).send(oneUsers)
}

// Post Method
const createUser = async (req, res) => {
    const {username, password, firstname, lastname, email} = req.body
    const newUser = await db.Users.create(
        {
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            email: email
        }
    )

    res.status(201).send({message: 'create user complete'})
}

// PUT Method
const updateUser = async (req, res) => {
    const id = req.params.id
    const {username, password, firstname, lastname, email} = req.body

    const updateUser = await db.Users.update(
        {
            username, password, firstname, lastname, email
        }, {
            where: {
                id: id
            }
        })
    res.status(201).send({message: `update id at ${id} is complete`})
}

// Delete Method
const deleteUserById = async (req, res) => {
    const id = req.params.id

    const deleteUser = await db.Users.destroy({
        where: {id: id}
    })

    res.send(200).send({message: `delete id at ${id} is complete`})
}

module.exports = {
    getAllUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUserById
}