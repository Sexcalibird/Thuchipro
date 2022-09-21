const express = require('express')
const incomeData = require('../resource/incomeResource.js')
const router = express.Router()

router.get('/income', incomeData.getAllIncomeData)
router.post('/income', incomeData.addIncomeData)

module.exports = router
