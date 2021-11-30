const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    }
    seat: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const User = mongoose.model('user', UserSchema)

module.exports = User;