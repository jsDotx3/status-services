const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: {
        type: String,
    },
    protocol: {
        type: String,
    },
    url: {
        type: String,
    },
    status: {
        type: Boolean,
    },
})


module.exports = mongoose.model('User', schema)
