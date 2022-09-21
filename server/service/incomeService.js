const incomeRepository = require('../repository/incomeRepository.js')

module.exports = {
    getAllIncomeData: getAllIncomeData,
    addIncomeData: addIncomeData
}

async function getAllIncomeData(input){
    return await incomeRepository.getAllIncomeData(input)
}

async function addIncomeData(input){
    return await incomeRepository.addIncomeData(input)
}