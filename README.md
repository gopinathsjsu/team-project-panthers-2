# CMPE202: team-project-panthers-2

## Team Name: Panthers

## Project Name: Airline Reservation Application

## Team Members:

1. Monica Lakshmi Mandapati
2. Vineet Reddy Govind 
3. Guruvardhan Reddy Rajanala 
4. Yasaswi Mandava 

## Summary of Contributions:
- *Monica* - Worked on developing UI frontend pages for Registration, Flight search & flight details pages and developed backend API to manage the Mileage Rewards points & cancel booking
- *Vineeth* - Worked on developing the UI pages for ticket details & payment pages and developed the backend API for the same
- *Guruvardhan* - Worked on developing the UI pages for seat booking & search results and developed the backend API for the same
- *Yasaswi* - Worked on developing the UI pages for Login & Profile pages and developed the backend API for the same


## Scrum Meetings:
Every Monday

### Team Project Journal:
-------------

### Team Project board:
https://github.com/gopinathsjsu/team-project-panthers-2/projects/1

### Team Google Sprint Task Sheet:
Sprint Task sheet and burndown charts included:
-------------------

### Tools and Technologies Used: *MERN Stack* 

1. Frondend: ReactJS
2. Backend: NodeJS, Express
3. Database: MongoDB
4. Cloud: AWS

## Database Design(Models):
- Users
- Flights
- Booking

### Wireframes:
----------------

## Architechture Diagram:
![image](https://user-images.githubusercontent.com/91310893/143941880-83c60ba8-a766-4b8b-9183-ef185afb6e73.png)

### Design Decisions: 
- *Tech Stack:* To implement the Airline application, our team met in the first scrum and discussed on what the tech stack has to be used and finalized on MERN stack and AWS.
- *Database Design:* In the fouth Scrum meeting we have discussed on what models and attributes to be used inorder to implement all the features proposed.
- *Role level Access:* Our team had different interpretations on how the roles should be developed and how they should be on the website, After having intense discussions, we finalized on just 2 roles : A User(Who can search, book, reserve seat, pay for the flight), An Employee (Who can view all the scheduled flights).
- *Code Reusability:* As most of the Components look similar, we thought of writing core components in such a way that we can reuse them in all places with little effort. We have developed more robust and common API’s for our backend and common components for frontend.

### Feature Set:

*User:*
1. Can Register and Login to the Airline Application.
2. Can search for flights by giving details of travel date, Start and Destination cities.
3. Can book the selected flight and reserve tickets.
4. Can pay for the booked ride.
5. Can view the Itenary/Ticket details
6. Can view the list of all booking made and can cancel the booking.
7. Can view the Profile page with details like Mileage reward points, Gender, mobile and emailId
8. Mileage reward points are managed based on the bookings made.

*Employee:*
1. Can Register as employee and login to the Airline Application.
2. Can view the list of Scheduled flights.
3. Can view the Profile Page.
