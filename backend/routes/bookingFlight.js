var express = require('express');
var router = express.Router();
var Booking = require('../models/Booking')
var bcrypt = require('bcrypt');
var moment = require('moment');
var bodyParser = require('body-parser')




// router.get('/', (req, res) => {
//     res.send("Register Here")
// });
//Body-Parser
var jsonParser = bodyParser.json()

router.get('/:data', jsonParser, async (req, res) => {
    console.log("email"+JSON.stringify(req.params));
    Booking.find({email: req.params.data}, (error, result) => {
       
        if (error) {
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            })
            res.end();
        }
        else {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify(result));
        }
    });
});



router.post('/', jsonParser, async (req, res) => {
    console.log("hello data"+JSON.stringify(req.body));
    // Hash Password 
    // const hashPassword = await bcrypt.hash(req.body.password, 10)


    let booking = {
        start: req.body.start,
        destination: req.body.destination,
        date: req.body.date,
        selectedFlightId: req.body.selectedFlightId,
        reservedSeats: req.body.reservedSeats,
        nameData: req.body.nameData,
        email:req.body.email
    }
    let newBooking = new Booking(booking)
     console.log(newBooking)
    newBooking.save((err, reslut) => {
        if (err) console.log(err)
        else res.status(201).json(reslut)
    })


});

router.post('/delete/:data', jsonParser, async (req, res) => {
    console.log("delete BookingId"+JSON.stringify(req.body));

    Booking.deleteOne({ _id: req.params.data }, (error, result) => {
        if (err) console.log(err)
        else res.status(201).json(result)
    })

});



module.exports = router;
