const express = require("express");
const app = express();
const port = 3007;
const mongosse = require('mongoose')
const usersRoute = require('./routes/usersRoute')
const adminRoute = require('./routes/adminRoute')
const StudentRout = require('./routes/StudentRoute')

app.use(express.json()); // for data json
app.use(express.urlencoded({extended:false})); // for data http

mongosse.connect('mongodb://naima:123abc@localhost:27017/youcod?authSource=admin',
{useNewUrlParser: true , useUnifiedTopology: true })
.then(()=> console.log("data connect"))
.catch(()=>console.log('data err'))

app.use('/api/user', usersRoute);
app.use('/api/admin', adminRoute);
app.use('/api/Student', StudentRout);



app.listen(port ,()=> console.log('http://localhost:'+ port));