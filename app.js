const express = require('express')
const app = express();
app.listen(7000);
console.log('7000 is ready');

// //body pars
// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// ~/.devilspie/vscode_transparent.ds

//user
const employeeRouter = require('./route/employee')
app.use('/employee', employeeRouter)

//compnys
const companyRouter = require('./route/company')
app.use('/company', companyRouter)


const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/companyAND', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)