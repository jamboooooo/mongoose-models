const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String
    },
    email: {
        type: String
    },
    lived: {
        type: Boolean,
        defoult: true
    }
})

module.exports = mongoose.model('User', userSchema);