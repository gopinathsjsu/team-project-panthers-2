import React, { useState } from 'react'
import './TicketPage.css'
import * as bookingFunc from './BookingFunction'
import axios from 'axios'
export default function TicketPage({ history }) {

    const [newBooking, setnewBooking] = useState({
        start: "firstclick"
    })

    const handleSignOut = e => {
        e.preventDefault()
        sessionStorage.removeItem('authToken')
        localStorage.removeItem('reservedSeats')
        localStorage.removeItem('nameData')
        localStorage.removeItem('email')
        localStorage.clear()
        history.push('/')
    }
    const handleBookAgainIcon = e => {
        e.preventDefault()
        history.push('/routes')
    }
    const getLocationData = () => {
        let from = localStorage.getItem("start")
        let to = localStorage.getItem("destination")
        
        return (
            <div>
                <p>From:  {from}</p>
                <p>To:  {to}</p>
            </div>
        )
    }
    const getPassengerName = () => {
        let nameArray = localStorage.getItem("nameData")
        let names = JSON.parse(nameArray)
        return names.map((name, idx) => {
            return (
                <div key={idx}>
                    <p className="names">{name}</p>
                </div>
            )
        })
    }
    const getSeatNumbers = () => {
        let noArray = localStorage.getItem("reservedSeats")
        let arr = JSON.parse(noArray)
        return arr.map((element, idx) => {
            return (
                <div key={idx}>
                    <p classsName="seatNo">{element}</p>
                </div>
            )
        })
    }
    const getIdNumber = () => {
        let tokenData = localStorage.getItem("selectedFlightId")
        return (
            <p className="idData">
                {tokenData}
            </p>
        )
    }
    const getDateValue = () => {
        let dat = localStorage.getItem("date")
        return <p>On: {dat}, 10 AM (Hourly commute)</p>
    }

    const submitBookingData = (e) => {
        e.preventDefault()
        // setnewBooking(
        //     {
        //         start :"wsedfghj"
        //     }
        // )
        setnewBooking(
            {
            start : localStorage.getItem("start"),
            destination: localStorage.getItem("destination"),
            date: localStorage.getItem("date"),
            selectedFlightId: localStorage.getItem("selectedFlightId"),
            reservedSeats: localStorage.getItem("reservedSeats"),
            nameData: localStorage.getItem("nameData"),
            email: localStorage.getItem("email"),
            }
        );
        // setnewBooking({ ...newBooking, start: "start" })
        if(newBooking.start!='firstclick'){
        console.log("newddata"+JSON.stringify(newBooking))
        
        bookingFunc.bookingFlight(newBooking)
            .then(response => response.data)
        console.log(newBooking)

        let email = localStorage.getItem("email")

        axios.post(`http://18.189.6.116:8080/updateRewards/${email}`,{
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => response.data)

        history.push('/bookinglist')
    }

        //history.push('/login')
    }
    return (

        <div className="container">
            <div>
                <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-unique hm-gradient">
                    <a href="/#" className="navbar-brand Company-Log">Aero Travels</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-3">
                        <ul className="navbar-nav ml-auto nav-flex-icons ic">
                            <li className="nav-item">
                                <a href="/#" className="nav-link waves-effect waves-light" onClick={e => handleBookAgainIcon(e)}>Book Again</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#" className="nav-link waves-effect waves-light" onClick={e => handleSignOut(e)}>Sign-Out</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="tpMain">
                <article className="ticket">
                    <header className="ticket__wrapper">
                        <div className="ticket__header">
                            Aero Travels
                        </div>
                    </header>
                    <div className="ticket__divider">
                        <div className="ticket__notch"></div>
                        <div className="ticket__notch ticket__notch--right"></div>
                    </div>
                    <div className="ticket__body">
                        <section className="ticket__section">
                            {getLocationData()}
                            {getSeatNumbers()}
                            <p>Your booking is on: <span>{getDateValue()}</span></p>
                        </section>
                        <section className="ticket__section">
                            <h3>Passenger Names</h3>
                            {getPassengerName()}
                        </section>
                        <section className="ticket__section">
                            <h3>Payment Method</h3>
                            <p>Credit Card</p>
                        </section>
                    </div>
                    <footer className="ticket__footer">
                        <p>Transaction-ID</p>
                        {getIdNumber()}
                        <button onClick={(e) => submitBookingData(e)}>View Bookings</button>
                        {/* <a href="/#" onClick={e => submitBookingData(e)}>View Bookings</a> */}
                    </footer>
                </article>
            </div>

        </div>

    )
}
