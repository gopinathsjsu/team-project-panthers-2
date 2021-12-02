import React, { useState, useEffect } from 'react'
import './BookingList.css'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
// import alert from 'react-alert'

export default function ViewBookings({ history }) {
    const [booking, setBooking] = useState([]);
    const [count,setCount] = useState(0);
    let email = localStorage.getItem('email');

    useEffect(() => {
        if(count==0){
            console.log("email"+email)
        axios.get(`http://localhost:8080/bookingFlight/${email}`)
        .then((response) => {
        //update the state with the response data
        console.log("data"+JSON.stringify(response.data))
        setBooking( response.data);
        setCount(1);
    });
}
    })

    const cancelBookingData = (e,bookingId) => {
        e.preventDefault()

        let apiUrl = 'http://localhost:8080/bookingFlight'
    console.log(apiUrl)
    console.log(bookingId)
    axios.post(`http://localhost:8080/bookingDelete/${bookingId}`,{
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
    setTimeout(function(){
        alert('Your Booking has been Cancelled!')
        window.location.reload();
      }, 1000);
        //history.push('/login')
    }

    const handleUserIcon = e => {
        e.preventDefault()
        history.push('/profile')
    }

    const handleViewBookingClick = e => {
        e.preventDefault()
        history.push('/bookinglist')
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
        return booking.map((Booking, idx) => {
            // let bId = bus._id
            var name = JSON.parse(Booking.nameData);
            var bookingId = Booking._id
            return (
                
                <div key={idx} className="card mt-5 flightlist">
                        
                    <div class="row ml-3">
                        <div class="col-6 col-sm-2 mt-2 font-weight-bold ">Booking Reference Id</div>
                        <div class="col-6 col-sm-2 mt-2 font-weight-bold ">Passenger Name</div>
                        <div class="col-6 col-sm-2 mt-2 font-weight-bold ">Start</div>
                        <div class="col-6 col-sm-2 mt-2 font-weight-bold ">Destination</div>
                        <div class="col-6 col-sm-2 mt-2 font-weight-bold ">Travel Date</div>
                        
                       
                        

                        <div class="w-100 d-none d-md-block"></div>
                        <div class="col-6 col-sm-2 mb-4">{bookingId}</div>
                        <div class="col-6 col-sm-2 mb-4">{name}</div>
                        <div class="col-6 col-sm-2 mb-4">{Booking.start}</div>
                        <div class="col-6 col-sm-2 mb-4">{Booking.destination}</div>
                        <div class="col-6 col-sm-2 mb-4">{Booking.date}</div>

                        <button className="btn btn-primary btn-sm" style={{height:"50px"}} onClick={(e) => cancelBookingData(e,bookingId)}>Cancel Booking</button>
                    </div>
                   
                </div >
            )
        })

    }


    return (
        <div className="container">
           <div>
                <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-unique hm-gradient">
                    <a href="/#" className="navbar-brand Company-Log" onClick={(e) => handleLogoClick(e)}>Book Flight</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a href="/#" className="navbar-brand Company-Log" onClick={(e) => handleViewBookingClick(e)}>View Bookings</a>
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
                <h2>Bookings History</h2>
            </div>
            {renderFunction()}
        </div>

    )
}