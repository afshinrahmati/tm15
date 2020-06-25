const express = require('express');
const Employee = require('../model/employee');
const route = express.Router();

const bodyParser = require("body-parser");
const employee = require('../model/employee');
const { populate } = require('../model/employee');
var jsonParser = bodyParser.json()

route.post('/create', jsonParser, (req, res) => {
    //return befor 


    //worker is name file model
    const NEW_member = new Employee({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        kodmli: req.body.kodmli,
        isMale: req.body.isMale,
        companyId: req.body.companyId,
        boss: req.body.boss
    })

    NEW_member.save(function(err, work) {
        if (err) return res.status(500).send("perhabs you wrong" + err);
        if (work) return res.json({
            work,
            masage: "sucess"
        })

    })
    if (req.body.boss === true) {
        return res.send("welcome to page")
    }

})

//delet
route.delete('/:id', function(req, res, next) {
    //modae said
    Employee.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
//abdata
route.put('/date/:id', jsonParser, function(req, res, next) {
    Employee.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});



route.get("/find/:id", (req, res) => {
    Employee.findById(req.params.id).populate("companyId", { name: 1 }).exec((err, employee) => {
        if (err) return res.status(400).send("bad get way" + err);
        return res.json(employee)
    })
})


route.get("/mokhbrat", (req, res) => {
    Employee.find({ companyId: "5ef5049354f0a3651b4ba4a6" }).populate("companyId", { name: 1 }).exec((err, employee) => {
        if (err) return res.status(400).send("bad get way" + err);
        return res.json(employee)
    })
})

//name moder shrkat mokabrat
route.get('/rule', jsonParser, (req, res) => {
    Employee.find({ boss: true, companyId: "5ef5049354f0a3651b4ba4a6" }).exec((err, employee) => {
        if (err) return res.status(400).send("bad get way" + err);
        return res.json(req.body.firstname)
    })
})




module.exports = route