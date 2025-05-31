const express = require("express");
const app = express(); // app == blueprint of express
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body
const Person = require("./models/person");
const MenuItem = require('./models/MenuItem')


app.get("/", function (req, res) {
  res.send("Welcome to my hotel... How i can help yoy ?");
});           


// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body; //  Assuming the request body contains 
//                           //  the  person data

//     // Create a new person document usng the mongoos model
//     const newPerson = new Person(data);

//     // Save the new Person to the database
//     const response = await newPerson.save();
//     console.log("data saved");
//     res.status(200).json(response);

//   } catch (error) {
//       console.log(err);
//       res.status(500).json({error: 'Internal server error'});
//   }
// });



// app.get('/person',async(req,res) => {

//      try{
//         const data = await Person.find();
//             console.log("data fetched");
//         res.status(200).json(data);

//      }catch(err){
//          console.log(err);
//       res.status(500).json({error: 'Internal server error'});
//      }
// })



// // Perameteriz apis calls
// app.get('/person/:workType', async(req,res) => {
    
//     try {
//        const workType = req.params.workType // Extract the work type from URL parameter
//        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
//         const response = await Person.find({work: workType});
//         console.log('response fetched');
//         res.status(200).json(response)
//        }else{
//         res.status(404).json({error:"Invliad work type"})
//        }
//     } catch (error) {
//         console.log(err);
//         res.status(500).json({error:"Internal server error"})
//     }
// })



// // POST : Method to add a Menu Item 
// // Apis hai ok 
// app.post("/menu", async(req,res) => {
   
//     try {
//       const menu = req.body;
//       const newMenu = new MenuItem(menu);
//       const menuResponse = await newMenu.save();
//        console.log('Menudata saved');
//        res.status(200).json(menuResponse);

//     } catch (err) {
//       console.log(err);
//       res.status(500).send({error: 'Internal server error'});
//     }
// })


// // GET : method to get the menu itms
// app.get("/menu",async(req,res) => {

//    try {
//       const menu = await MenuItem.find();
//       console.log("menu data fectched");
//       res.status(200).json(menu);

//    } catch (error) {
//       console.log(err);
//       res.status(500).send({err:"menu data is not feched"})
//    }
// })


// Import the router files
const personRouter = require('./routes/personRoutes');
const menuRouter = require('./routes/menuRoutes')

// Use the routers
app.use('/', personRouter);
app.use('/',menuRouter)


app.listen(3000, () => {
  console.log("server is runing on  PORT : 3000");
});

// Mongoose : DB or node ke bich connection stablish krta hai or alos knaw as blueprint bhi bnata hai

// body perser : middleware library for express.js

// Steps :
// 1) data send clint in server : ultimetly body-parser install kr liaya  DB connection stblish kr liya  Schema bna liya  then  uss schema se modle bnaya : uss modle ko export kr diya server.file pe : Ab wahi modle responsible hai person data (database) se deail krne ke liye ok

// 2) client se data -> body-parser ke pass aata prosses hone ke liye -> then body-parser data prosess kr ke req.body me store krta hai

// callback avoid
// app.post('/person',(req,res) => {
//     const data = req.body; //  Assuming the request body contains the  person data

//     // Create a new person document using the mongoose model
//     // const newPerson = new Person();
//     // newPerson.name = data.name;
//     // newPerson.age = data.age;
//     // newPerson.mobile = data.mobile;
//     // newPerson.address = data.address; // complex method

//     const newPerson = new Person(data);

//     // Save the new Person to the database
//     newPerson.save((error, savedPerson) =>{
//        if(error){
//         console.log('Error saving person',error);
//         res.status(500).json({error: 'Internal server error'})
//        }
//        else{
//           console.log('data saved successfully');
//           res.status(200).json(savedPerson);
//        }
//     })
// })
