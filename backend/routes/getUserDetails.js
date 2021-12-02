var express = require('express');
var router = express.Router();
var User = require('../models/User')
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
    User.find({email: req.params.data}, (error, result) => {
       
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

module.exports = router;