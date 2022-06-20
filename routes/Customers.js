const express = require('express');
const router = express.Router();
const customersContraller = require('../controllers/Customers')

router.get('/', customersContraller.getAllCustomers)
router.post('/create-customers', customersContraller.createCustomers)

module.exports = router