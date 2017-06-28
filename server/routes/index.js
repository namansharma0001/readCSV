const router = require('express').Router()

const settledCustomers = require('./settledCustomers')
const unsettledCustomers = require('./unsettledCustomers')

router.get('/settledCustomers', settledCustomers)
router.get('/unsettledCustomers', unsettledCustomers)

module.exports = router