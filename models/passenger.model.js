const mongoose = require("mongoose")

const Passenger = mongoose.model(
    "Passenger",
    new mongoose.Schema({
        firstname: String,
        lastname: String,
        dob: Date
    })
)

module.exports = Passenger