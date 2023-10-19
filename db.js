require('dotenv').config();
const mongoose = require('mongoose');

// Instead of a hardcoded connection string, use the environment variable
const mongo_URI = process.env.MONGOURI;

const connectDB = async () => {
    await mongoose.connect(mongo_URI).then((result) => {
        console.log("Database is connected on Connection String " + mongo_URI);
    }).catch((err) => {
        console.log("Database is not connected we got an error  " + err);
    });
}

module.exports = connectDB;
