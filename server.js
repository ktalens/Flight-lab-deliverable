const mongoose = require('mongoose');
const dbConfig = require("./config/db.config")
const express = require("express")

const app = express()

const db= require("./models")
const Airport = db.airport
const Terminal = db.terminal
const Flight = db.flight
const Passenger = db.passenger


db.mongoose
.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Successfully connected to MongoDB");
})
.catch(err =>{
    console.error("Connection error: ", err)
    process.exit()
})

// set port, listen for request
// const PORT = process.env.PORT || 8080
// app.listen(PORT,()=>{
//     console.log(`server running on ${PORT}`)
// })

const airport =  new Airport({
	name: "First Airport",
	country: "US",
	opened: "2020-12-15"
})
airport.save()
console.log("Airport saved", airport)

// A flight from CDG France to JFK New-York, USA on American Airlines with no passengers. The name of the flight is "flight1"
const flight1 = new Flight ({
    from: 'CDG France',
    to: 'JFK New-York,USA',
    airline: 'American Airlines'
})
flight1.save()
console.log(`Flight saved ${flight1}`)

// A second flight from Heathrow UK to JFK New-York, USA on British Airways with no passengers. The name of the flight is "flight2"
const flight2 = new Flight ({
    from: 'Heathrow UK',
    to: 'JFK New-York,USA',
    airline: 'British Airways'
})
flight2.save()
console.log(`Flight saved ${flight2}`)


// An airport called "JFK" in the USA opened on a random date in 1990.
const airport2 =  new Airport({
	name: "JFK",
	country: "USA",
	opened: "1990-12-15"
})
airport2.save()
console.log(`Airport saved: ${airport2}`)


// A terminal called "Terminal 1" pushed to airport1 with a capacity of 234324 and two flights: flight1 and flight2
const terminal1 =  new Terminal({
    name: 'Terminal 1',
    flights: [
        flight1,flight2
    ],
    capacity: 234324
})
terminal1.save()
console.log(`Terminal saved: ${terminal1}`)
