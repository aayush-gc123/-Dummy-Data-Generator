const mongoose = require("mongoose");
const { Schema } = mongoose;

const employschema = new Schema({
    name:String,
    salary:Number,
    language:String,
    City:String,
    isManager:Boolean

})

const Employee = mongoose.model('Employee', employschema);
module.exports = Employee;