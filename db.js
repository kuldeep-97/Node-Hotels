const mongoose = require('mongoose');
require('dotenv').config();
// Password: WQZI3cBF8NcSC6QV

// Define the MongoDB connection URL : Locall connection
// const mongoURL = 'mongodb://localhost:27017/hotels';
// Online connection url
const mongoURL = process.env.MONGODB_URL;

// deprecated option
// // Set up MongoDB connection 
// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// Modern way: no need for deprecated options
mongoose.connect(mongoURL);

// Get the default connection
const db = mongoose.connection;

// Define event listeners for the database connection
db.on('connected', () => {
    console.log(" Connected to MongoDB server");
});

db.on('error', (error) => {
    console.error(" Error connecting to MongoDB:", error);
});

db.on('disconnected', () => {
    console.log(" Disconnected from MongoDB server");
});

// Export the DB connection
module.exports = db;




// db.js file ek central module ki trh kam kr rha hai jo menege kr rha hai connection mongodb data base ro nodejs ke bich me with the help of mongoose




















//  const mongoose = require('mongoose');

//  // Define the mongodb connection url 
//  const mongoURL = 'mongodb://localhost:27017/hotels';

//  // set up Mongdb connection // connection stablish 
//  mongoose.connect(mongoURL,{
//     useNewUrlParser: true,
//     useUnifiedTopology:true
//  })

//  //Get the default connections 
//  // Mongoose maintains a default connection object representing the mongdb connections
//  const db = mongoose.connection;

// // Define event listeners for database connection

//  db.on('connected',()=> {
//     console.log("Connected to Mongodb server ");
//  })

//   db.on('error',()=> {
//     console.log("error to Mongodb server ");
//  })

//   db.on('disconnected',()=> {
//     console.log("disconnected to Mongodb server ");
//  })


//  // Export the DB connection
//  module.exports = db;