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

router.post('/:data', jsonParser, async (req, res) => {
    console.log("email"+JSON.stringify(req.params));
    //get the current reward points
     User.findOne({email: req.params.data}, (error, result) => {
       
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

            if(result){
                console.log("Result"+JSON.stringify(result));
                let currentRewards = result.rewards;
                let newRewards = currentRewards + 100;
                User.findOneAndUpdate({email: req.params.data},{rewards: newRewards},  (error, result) => {
       
                    if (error) {
                        res.writeHead(500, {
                            'Content-Type': 'text/plain'
                        })
                        res.end();
                    }
                    else {
                       console.log("result"+result)
                    }
                });

            }        

            res.end(JSON.stringify(result));
        }
    });



   
});

module.exports = router;