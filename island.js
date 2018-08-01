const Island=require("../models/Island").Island;
module.exports=function(app){

    app.get("/island", function(req, res){
        Island.find({}, function(err, island){
            if(err)
              return res.send(err);
              res.json(island)
        });
    });
    app.get("/island/:id", function(req, req) {
        Island.find({"_id":req.params.id}, function(err, island) {
            if (err)
              return res.send(err);
              res.json(island)
        });
    });
    app.post("/Island", function(req, res){
        const island=new Island();
        island.Nama=req.body.Nama;
        island.Luas=req.body.Luas;
        island.Deskripsi=req.body.Deskripsi;

        console.log(req.body.Nama);
        island.save(function(err, island){
            if(err)
            return res.send(err);
            res.json({"status":"OK", data:island});
        });
    });
    app.put("/island", function(req,res){
        Island.findById(req.params.id, function(err, island){
            if(err)
            return res.send(err);
            island.Nama=req.body.Nama;
            island.Luas=req.body.Luas;
            island.Deskripsi=req.body.Deskripsi;

            island.save(function(err, island){
                if(err)
                return res.send(err);
                res.json({"status";"OK", data:island});
            })
        })
    })
    app.delete("/island", function(req, res){
        Island.findById(req.params.id, function(err, island){
            if(err)
            return res.send(err);
            island.remove(function(err, island){
                if(err)
                return res.send(err);
                res.json({"status":"OK"});
            })
        })
    })
};