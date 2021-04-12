const mongosse = require('mongoose');

const userSchema = mongosse.Schema({
    fname:{type:String,require:true},
    lname :{type:String , require:true},
    email:{type:String,require:true},
    phone:{type:String, require:true},
    adresse :{type:String, require:true},
    password:{type:String, require: true},
    role: {type: String, default: "user"}
})

module.exports = mongosse.model('User',userSchema);