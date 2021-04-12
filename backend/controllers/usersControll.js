const User  = require('../models/Users');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res)=>{
  try {
        const user = new User({

            ...req.body
        })
        const hashPassword = await bcrypt.hash(user.password, 10);
        user.password = hashPassword;
        const saved = await user.save();
        if(saved) return res.status(201).json({message: 'data saved!', user})
    } catch (error) {
        return res.status(500).json({err: 'error server'})
    }
}



