const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const islandSchema=new Schema({
    Nama:String,
    Luas:String,
    Deskripsi:String
});

const Island=mongoose.model("Island", islandSchema);
module.exports.Island=Island;