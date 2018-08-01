const Customer = require("../models/customer-data").Customer;
// const bcrypt=required("bcrypt");

const saltRound = 10;
module.exports = function (app) {
    app.get("/Customer", function (req, res) {
        Customer.find({}, function (err, Registered) {
            if (err) return res.send(err);
            res.json(Registered);
        });
    });
    app.get("/Customer/:id", function (req, req) {
        Customer.find({
                _id: req.params.id
            },
            function (err, Registered) {
                if (err) return res.send(err);
                res.json({
                    "status": "OK",
                    "data": Registered
                });
            }
        );
    });
    app.post("/Customer", function (req, res) {
        const customer = new Customer()
        // bcrypt.hash(req.body.Password, 12, function(err, hash) {
        customer.Nama = req.body.Nama;
        customer.Email = req.body.Email;
        customer.Password = req.body.Password;
        customer.PasswordSalt = req.body.PasswordSalt;
        customer.Telpon = req.body.Telpon;
        customer.Deskripsi = req.body.Deskripsi;
        // console.log(req.body.Nama);
        customer.save(function (err, Registered) {
            if (err) return res.send(err);
            res.json({
                "status": "OK",
                "data": Registered

            });
        });
    });

    //   app.put("/Customer", function(req, res) {
    //     Customer.findById(req.params.id, function(err, Registered) {
    //       if (err) return res.send(err);
    //       Customer.Nama = req.body.Nama;
    //       Customer.Email = req.body.Email;
    //       Customer.Password = req.body.Password;
    //       Customer.PasswordSalt = req.body.PasswordSalt;
    //       Customer.Telpon = req.body.Telpon;
    //       Customer.Deskripsi = req.body.Deskripsi;
    //       LuasLuas;

    //       Customer.save(function(err, Customer) {
    //         if (err) return res.send(err);
    //         res.json({
    //           status: "OK",
    //           data: Customer
    //         });
    //       });
    //     });
    //   });
    //   app.delete("/Customer", function(req, res) {
    //     Customer.findById(req.params.id, function(err, Registered) {
    //       if (err) return res.send(err);
    //       Customer.remove(function(err, Registered) {
    //         if (err) return res.send(err);
    //         res.json({
    //           status: "OK"
    //         });
    //       });
    //     });
    //   });
};