var express = require('express');
var router = express.Router();
var Booking = require('../models/Booking')
var bcrypt = require('bcrypt');
var moment = require('moment');
var bodyParser = require('body-parser')

//Body-Parser
var jsonParser = bodyParser.json()

router.post('/:data', jsonParser, async (req, res) => {
    //console.log("delete BookingId"+JSON.stringify(req.body));
    console.log("delete BookingId"+req.params.data);

    Booking.deleteOne({ _id: req.params.data }, (err, result) => {
        if (err) console.log(err)
        else res.status(201).json(result)
    })

});

module.exports = router;