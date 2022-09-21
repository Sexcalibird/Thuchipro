const incomeService = require('../service/incomeService.js')

module.exports = {
    getAllIncomeData: getAllIncomeData,
    addIncomeData: addIncomeData
}

async function getAllIncomeData(req, res){
    res.json(await incomeService.getAllIncomeData(req.body))
}

async function addIncomeData(req, res){
    res.json(await incomeService.addIncomeData(req.body))
}