const db = require('../models')

const getAllCustomers = async (req, res) => {
    const allCustomers = await db.Customers.findAll();
    res.status(200).send(allCustomers)
}

const createCustomers = async (req, res) => {
    const {username, password, firstname, lastname, email} = req.body
    const {phone_no, avatar, permission} = req.body
    const newUser = await db.Users.create(
        {
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            email: email
        }
    )
    const newCustomers = await db.Customers.create(
        {phone_no, avatar, permission, user_id: newUser.id}
    )

    res.status(201).send({message: 'Create customers complete'})
}
module.exports = {
    getAllCustomers,
    createCustomers
}