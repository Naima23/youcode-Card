const Admin  = require('../models/admin');
const bcrypt = require('bcrypt');


//*************************register admin

exports.createAdmin = async (req, res )=>{
  try {
        const admin = new Admin({

            ...req.body
        })
        // check email
        const EmailExist = await Admin.findOne({email: req.body.email});
        if(EmailExist) return res.status(400).json({message:"email already exist!"});
        
        // ***********
        const hashPassword = await bcrypt.hash(admin.password, 10);
        admin.password = hashPassword;
        const saved = await admin.save();
        if(saved) return res.status(201).json({message: 'data saved!', admin})
    } catch (error) {
        return res.status(500).json({err: 'error server'})
    }
}

//***************************login admin
exports.loginAdmin = async (req ,res ) =>{
    const {email, password} = req.body;
    const emailAdmin = await Admin.findOne({email})
    if(!emailAdmin) return res.status(400).json({message:"invalid email or password"})

    const passwordAdmin = await bcrypt.compare(password, emailAdmin.password);
    if(!passwordAdmin) return res.status(400).json({message:"invalid email or password"});

    return res.status(200).json('you are logged in ');


}



