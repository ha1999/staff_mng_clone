const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const { PORT, MONGO_URL, options } = require('./config')
const Api = require('./router')

const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/data', express.static(path.join(__dirname, 'public')))
app.use('/api',Api)


mongoose.connect(MONGO_URL, options).catch(err => console.log(`Error is ${err}`));


app.listen(PORT, () => {
    console.log(`Server is listen at port ${PORT}`)
})