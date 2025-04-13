const express = require('express');
const mongoose = require("mongoose");
const db = require("./models")
mongoose.connect('mongodb://localhost/violations');

app = express()
app.listen(8080,() => {
    console.log(`Server is running on http://localhost:8080`);
});
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.static('public'));
app.use(express.static('images'));
app.post("/count",async(req,res)=>{
    totalCount = await db.estimatedDocumentCount()
    console.log(totalCount)
    todayCount = await db.find({timestamp:  new Date() }).estimatedDocumentCount()
    console.log(todayCount)
    mainData = {
        today:todayCount,
        total:totalCount
    }
    console.log(mainData)
    res.json(mainData)
})
app.post("/data",async(req,res)=>{
    const {p1} = req.body;
    o = new Date()
    o.setDate(o.getDate()-7)
    if(p1 == "t"){
        response = await db.find({timestamp:  new Date() })
    }else if(p1 == "w"){
        response = await db.find({timestamp: { $gte: (o), $lte: (new Date()) }})
        console.log(response)
    }else{
        response = await db.find({})
    }
    res.json(response)
})

app.get('/', function(req, res){
   res.render('sdc');
});
