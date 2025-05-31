
const mongoose = require('mongoose')

// Schema == mongoos
// define the person schema
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        require: true
    },
    mobile:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        require:true
    }
})

// ab schema se modle bnate hia or ussi modle ko use kr ke database opration ko perfome krte hai like creat red udate delete

const Person = mongoose.model('Person', personSchema)
module.exports = Person;