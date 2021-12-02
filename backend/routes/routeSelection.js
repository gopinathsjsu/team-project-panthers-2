var express = require('express');
var router = express.Router();
var flight = require('../models/Flights');


// router.get('/', (req, res) => {
//     bus.find({ companyName, startCity, totalseats, availableseats }, (err, result) => {
//         if (err) res.send(err)
//         else res.json({ result })
//     })
// })

router.post('/', (req, res) => {

    flight.find({ 'startCity': req.body.startCity, 'destination': req.body.destination,'date': req.body.date }).exec((err, flight) => {
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

// router.post('/', (req, res) => {
//     let newBus = new bus(req.body)
//     newBus.save((err, bus) => {
//         if (err) console.log(err)
//         else res.status(201).json(bus)
//     })
// })
















module.exports = router;
