const mongosse = require('mongoose');

const adminSchema = mongosse.Schema({
    fname:{type:String,require:true},
    lname :{type:String , require:true},
    email:{type:String,require:true},
    password:{ type:String, require: true},
    role:{ type: String, default: "admin"}
}
);

module.exports = mongosse.model('Admin',adminSchema);