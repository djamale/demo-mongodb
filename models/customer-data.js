const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    Nama: String,
    Email: String,
    Password: String,
    Telpon: String,
    Deskripsi: String
});

const Customer = mongoose.model("Customer", CustomerSchema);
module.exports.Customer = Customer;