import React, { useState, useEffect } from 'react'
import './BookingList.css'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
// import alert from 'react-alert'

export default function ViewBookings({ history }) {
    const [flights, setFlights] = useState([]);
    const [count,setCount] = useState(0);


    useEffect(() => {
        if(count==0){
        axios.get('http://18.189.6.116:8080/flightDetails/')
        .then((response) => {
        //update the state with the response data
        console.log("data"+JSON.stringify(response.data))
        setFlights( response.data);
        setCount(1);
    });
}
    })

    const handleUserIcon = e => {
        e.preventDefault()
        history.push('/profile')
    }

    const handleSignOut = e => {
        e.preventDefault()
        sessionStorage.removeItem('authToken')
        localStorage.removeItem('reservedSeats')
        localStorage.removeItem('nameData')
        localStorage.removeItem('email')
        localStorage.clear()
        history.push('/')
    }

    const handleLogoClick = e => {
        e.preventDefault()
        history.push('/routes')
    }



    const renderFunction = () => {
        return flights.map((flights, idx) => {
            return (
                
                <div key={idx} className="card mt-5 flightlist">
                        
                    <div class="row ml-3">
                        <div class="col-6 col-sm-2 mt-2 font-weight-bold ">Flight Name</div>
                        <div class="col-6 col-sm-2 mt-2 font-weight-bold ">Flight Number</div>
                        <div class="col-6 col-sm-2 mt-2 font-weight-bold ">Start City</div>
                        <div class="col-6 col-sm-2 mt-2 font-weight-bold ">Destination</div>
                        <div class="col-6 col-sm-2 mt-2 font-weight-bold ">Travel Date</div>
                        
                        <div class="w-100 d-none d-md-block"></div>
                        <div class="col-6 col-sm-2 mb-4">{flights.companyName}</div>
                        <div class="col-6 col-sm-2 mb-4">{flights.flightNumber}</div>
                        <div class="col-6 col-sm-2 mb-4">{flights.startCity}</div>
                        <div class="col-6 col-sm-2 mb-4">{flights.destination}</div>
                        <div class="col-6 col-sm-2 mb-4">{flights.date}</div>

                    </div>
                   
                </div >
            )
        })

    }


    return (
        <div className="container">
           <div>
                <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-unique hm-gradient">
                    <a href="/#" className="navbar-brand Company-Log" onClick={(e) => handleLogoClick(e)}>View Flights</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-3">
                        <ul className="navbar-nav ml-auto nav-flex-icons ic">
                            <li className="nav-item">
                                <a href="/#" className="nav-link waves-effect waves-light" onClick={e => handleUserIcon(e)}><i className="fa fa-user user"></i></a>
                            </li>
                            <li className="nav-item">
                                <a href="/#" className="nav-link waves-effect waves-light" onClick={e => handleSignOut(e)}>Sign-Out</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class = "font-weight-bold ">
                <h2>Details of Scheduled Flights</h2>
            </div>
            {renderFunction()}
        </div>

    )
}