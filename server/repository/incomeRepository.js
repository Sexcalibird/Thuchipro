const Income = require('../models/incomeModel.js')

module.exports = {
    getAllIncomeData: getAllIncomeData,
    addIncomeData: addIncomeData
}

async function getAllIncomeData(input){
    try{
        const income = await Income.find()
    }catch(error){
        return error
    }
}

async function addIncomeData(input){
    const data = {}
    let newUser = new Income(data)
    try{
        await newUser.save()
        return {status: "OK", message: "insert thanh cong"}
    } catch(error) {
        return error
    }
}