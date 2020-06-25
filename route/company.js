const express = require('express');
const route = express.Router();
const Company = require('../model/company');


//re body mportant
// public
// const bodyParser = require("body-parser");

//key value
//ww next to de body
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
//json
// var jsonParser = bodyParser.json()

const bodyParser = require("body-parser");
const employee = require('../model/employee');
var jsonParser = bodyParser.json()

route.post('/use', jsonParser, (req, res) => {
    if (!req.body.name || !req.body.sabt || !req.body.city || !req.body.province || !req.body.phoneNumber) {
        return res.status(404).send("por kon")
    }
    //creater
    const NEW_USER = new Company({
        name: req.body.name,
        sabt: req.body.sabt,
        city: req.body.city,
        province: req.body.province,
        phoneNumber: req.body.phoneNumber
    })

    NEW_USER.save(function(err, useres) {
        if (err) return res.status(500).send("err ples try agin" + err);

        if (useres) return res.json({
            useres,
            massage: "succses"
        })
    })
});

//delet
route.delete('/:id', function(req, res, next) {

    Company.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
//abdata
route.put('/date/:id', jsonParser, function(req, res, next) {
    Company.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


route.get('/data', jsonParser, (req, res) => {
    Company.find({ createdAt: { $lt: "2022-06-25T20:09:55.346Z" } }).populate("companyId", { name: 1 }).exec((err, employee) => {
        if (err) return res.status(400).send("bad get way" + err);
        return res.json(employee)
    })
})




module.exports = route;