const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbConfig = require("./config/Database");

const app = express();

mongoose.connect(dbConfig.url);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require("./routes/customer")(app);

app.listen(2102);
console.log("app listening on localhost 2102");