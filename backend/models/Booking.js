const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    start: {
        type: String
    },
    destination: {
        type: String
    },
    date: {
        type: String
    },
    selectedFlightId: {
        type: String
    },
    reservedSeats: {
        type: String
    },
    nameData: {
        type: String
    },
    email: {
        type: String
    }
})

const Booking = mongoose.model('Booking', BookingSchema)

module.exports = Booking;