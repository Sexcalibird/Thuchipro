const mongoose = require("mongoose")

const connection = "mongodb+srv://quang99:1234@cluster0.lku2f8g.mongodb.net/?retryWrites=true&w=majority"

class Database{
    constructor(){
        this.connect()
    }
    connect(){
        console.log("Database start connection: ...")
        mongoose.connect(connection)
            .then(() => {
                console.log("Database connection successfully!");
            })
            .catch(err => {
                console.log("Database connection error!");
            })
    }
}

module.exports = new Database();