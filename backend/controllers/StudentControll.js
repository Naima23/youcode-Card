const Student = require('../models/Users');



//Show the list of Student
const index = (req , res , next) => {
    Student.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error =>{
            res.json({
                message: "An error Occured !"
            })
        })
}


//Update student
const  update =(req ,res , next) =>{

    let studentID =  req.params.id
    let updateData ={
        fname:req.body.fname,
        lname :req.body.lname,
        email:req.body.email,
        phone:req.body.phone,
        adresse :req.body.adresse,
        password:req.body.password,
        role: req.body.role

        // ...req.body
    }

    Student.findByIdAndUpdate(studentID, {$set: updateData})
    .then(()=>{
        res.json({
            message:'Student update successfully!!'
        })
    })
    .catch(error => {
        res.json({
            message:'An error Occured! '
        })
    })
}



//delete student
 const destroy = ( req , res , nex) =>{

    let studentID = req.params.id
    Student.findByIdAndRemove(studentID)
    .then(()=>{
        res.json({
            message:'student deleted successfully !'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured!'
        })
    })
 }


 module.exports ={
      index , update , destroy
 }




























