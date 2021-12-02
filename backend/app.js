var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
const cors = require('cors')
var bodyParser = require("body-parser");



var app = express();
app.use(bodyParser.json());

// Login and Register 
require('./auth/auth');
const login = require('./routes/login')
const loggedInPage = require('./routes/loggedInUser');
// ----------------------------------------------------

const bookingRoute = require('./routes/routeSelection')

var registerRouter = require('./routes/register');

var bookingFlightRouter = require('./routes/bookingFlight');

var bookingDeleteRouter = require('./routes/bookingDelete');

var updateRewardsRouter = require('./routes/updateRewards');
var userDetailsRouter = require('./routes/getUserDetails');
var flightDetailsRouter = require('./routes/flightDetails');
//--------------------------------------------------------


//DB Config
const DB_URL = require('./config/keys').MongoURI;

//connect to mongo
//---------------------------------------------
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(err => {
        throw err
    })
//---------------------------------------------


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/', login);
app.use('/booking', bookingRoute);
app.use('/register', registerRouter);  // To register page 
app.use('/bookingFlight', bookingFlightRouter);
app.use('/bookingDelete', bookingDeleteRouter);
app.use('/updateRewards', updateRewardsRouter);
app.use('/userDetails', userDetailsRouter);
app.use('/flightDetails', flightDetailsRouter);
app.use('/user', passport.authenticate('jwt', { session: false }), loggedInPage); //To Secure Route

module.exports = app;
