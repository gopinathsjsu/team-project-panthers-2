import axios from 'axios'

export function bookingFlight(newBookingDetails){
    let apiUrl = 'http://localhost:8080/bookingFlight'
    console.log('apiURL'+apiUrl)
    return axios.post(apiUrl,newBookingDetails,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

export function viewBookings(){
   // const token =  authToken
    let apiUrl = `http://localhost:8080/bookingFlight`
    return axios.get(apiUrl)
}