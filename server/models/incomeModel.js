const mongoose = require('mongoose')

let incomeSchema = mongoose.Schema({
    moneyIn: {
        type: Number
    },
    dateIn: {
        type: Date
    }
})

module.exports = mongoose.model('Income', incomeSchema)