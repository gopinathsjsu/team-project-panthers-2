var express = require('express');
var router = express.Router();
var flight = require('../models/Flights');

router.post('/', (req, res) => {

    flight.find({ 'startCity': req.body.startCity, 'destination': req.body.destination }).exec((err, flight) => {
        if (err) {
            res.json({ status: false, message: "error while searching" })
        }
        else res.json({ flight })
    })
})

router.post('/', (req, res) => {

    flight.findOne({ _id: req.body.bId }, (err, flight) => {
        if (err) {
            res.json({ status: false, message: "error while searching with ID" })
        }
        else
            res.json({ flight })
    })
})



module.exports = router;
