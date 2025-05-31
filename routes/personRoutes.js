const express = require("express");
const Person = require('./../models/person');
// Express router :help krta hia  endpoints ko manage krta hai 
const router = express.Router();


// POST route to add a person 
router.post("/person", async (req, res) => {
  try {
    const data = req.body; //  Assuming the request body contains 
                          //  the  person data

    // Create a new person document usng the mongoos model
    const newPerson = new Person(data);

    // Save the new Person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);

  } catch (error) {
      console.log(err);
      res.status(500).json({error: 'Internal server error'});
  }
});


// GET method to get the person info to clint
router.get('/person',async(req,res) => {

     try{
        const data = await Person.find();
            console.log("data fetched");
        res.status(200).json(data);

     }catch(err){
         console.log(err);
      res.status(500).json({error: 'Internal server error'});
     }
})




// Perameteriz apis calls
router.get('/person/:workType', async(req,res) => {
    
    try {
       const workType = req.params.workType // Extract the work type from URL parameter
       if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const response = await Person.find({work: workType});
        console.log('response fetched');
        res.status(200).json(response)
       }else{
        res.status(404).json({error:"Invliad work type"})
       }
    } catch (error) {
        console.log(err);
        res.status(500).json({error:"Internal server error"})
    }
})


// Update route to update person data 
router.put('/person/:id', async(req,res) => {
    try {
        const personId = req.params.id; // Extract the id from the url parameter
        const updatePersonData = req.body; // Update data for the person

        const response = await Person.findByIdAndUpdate(personId,updatePersonData, {
            new : true, // Return the update document
            runValidators :true // run Mongoose validation 
        })
    } catch (error) {
        
    }
})


router.delete('/person/:id',async(req,res) => {

    try {
        const personId = req.params.id;// Extract the person's Id from the url parameter

        // Assuming you have a person model
        const response = await Person.findByIdAndDelete(personId)
        if(!response){
         return res.status(404).json({error:'person not found'})
       }else{
        console.log('data delete');
        res.status(200).json({message:'person Delete successfully'})
       }

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})
       }


})

module.exports = router;