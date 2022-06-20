const express = require('express')
const cors = require('cors')
const db = require('./models')
const usersRoute = require('./routes/Users')
const customersRoute = require('./routes/Customers')

const app = express()

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRoute);
app.use('/customers', customersRoute);

db.sequelize.sync().then(
    app.listen(8000, () => {
        console.log('Server is running at port 8000')
    })
)