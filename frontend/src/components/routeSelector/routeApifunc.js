import axios from 'axios'

export async function getRoutesFromApi(startCity, destination, date) {
    const baseURL = "http://18.189.6.116:8080/booking/"
    let incoming = await axios.post(baseURL, { startCity, destination, date })
    return incoming
}