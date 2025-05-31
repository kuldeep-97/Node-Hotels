const express = require("express");
const router = express.Router();
const MenuItem = require('../models/MenuItem')



// POST : Method to add a Menu Item 
// Apis hai ok 
router.post("/menu", async(req,res) => {
   
    try {
      const menu = req.body;
      const newMenu = new MenuItem(menu);
      const menuResponse = await newMenu.save();
       console.log('Menudata saved');
       res.status(200).json(menuResponse);

    } catch (err) {
      console.log(err);
      res.status(500).send({error: 'Internal server error'});
    }
})


// GET : method to get the menu itms
router.get("/menu",async(req,res) => {

   try {
      const menu = await MenuItem.find();
      console.log("menu data fectched");
      res.status(200).json(menu);

   } catch (error) {
      console.log(err);
      res.status(500).send({err:"menu data is not feched"})
   }
})

// comment
router.get('/menu/:test',async(req,res) => {
    try {
        const test = req.params.test;
        if(test == "sweet" || test == 'spicy' || test == 'sour') 
        {
        const response = await MenuItem.find({taste: test});
            console.log('response fetched');
           res.status(200).json(response);
        }else{
           res.status(404).json({error:"Invliad work type"})
        }
    } catch (error) {
         console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
})

// comment for testing pupush ok
module.exports = router;