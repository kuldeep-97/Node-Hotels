const mongoose =  require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    price:{
        type:Number,
        require:true,
    },
    taste:{
        type:String,
        enum: ['sweet', 'spicy', 'sour']
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        // default:[]
        enum: ['rayta', 'pnir', 'tmater']
    },
    num_sales:{
        type:Number,
        default:0
    }

})


const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;


// drow.io 