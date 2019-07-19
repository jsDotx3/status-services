const mongoose = require('mongoose')
const serviceSchema = `models/service.model`

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
}

const models = { serviceSchema }

module.exports = { models, connectDb }
