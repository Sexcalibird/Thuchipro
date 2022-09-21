const express = require('express')
const cors = require('cors')

const app = express()
const Database = require('./config/mongoose.js')
const incomeRouter = require('./routes/incomeRoutes.js')

app.use(cors())
app.use('/', incomeRouter)

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server start at port ${port}`)
})