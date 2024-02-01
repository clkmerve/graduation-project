const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
    {
        name:{type:String,require:true},
        img:{type:String,require:true},
        link:{type:String,require:true},

    },
    {timestamps:true}//oluşturma tarihi
    

);
const Category = mongoose.model("Category", CategorySchema);
module.exports= Category;