const express=require('express');
const bodyParser =require('body-parser');
const app=express();
const fs = require('fs');
var mongoose = require('mongoose');

mongoose.connect('mongodb://project:project123@ds123625.mlab.com:23625/project', { useNewUrlParser: true } );





var userSchema = new mongoose.Schema({
    username:String,
    password:String,
    phoneno:Number
 });


var productSchema = new mongoose.Schema({
    title:String,
    description:String,
    image:String,
    quantity:Number,
    cat:String,
    price:String
});

var review = new mongoose.Schema({
    name:String,
    review:String,
    pname:String
});



 var user = mongoose.model('user',userSchema);
 var product = mongoose.model('product',productSchema);

var review = mongoose.model('reviews',review);

console.log("db connected");

app.use(bodyParser.json());





app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.post('/temp',function(req, res){
    console.log("it is getting");
    var data = req.body;
    console.log(data);
    var newUser = user(data).save(function(err,data){
        
        if(err){
            throw err;
        } else {
            console.log("data inserted");
        }

    });
});

app.put('/update',function(req, res){
    var val = 0;
    product.find({title:req.body.title},function(err, docs){
        
        val = docs[0].quantity;
        
        val = val - req.body.quantity;
        if(err) console.log(err);
        else {
            product.findOneAndUpdate({ title:req.body.title},{$set:{quantity:val}},function(err,doc){
                if(err) throw err;
                console.log(doc);
            })
        }

    })
});     

app.post('/reviews',function(req, res){
    var temp = req.body;
    
    var newUser = review(temp).save(function(err,data){
        
        if(err){
            throw err;
        } else {
            console.log("review inserted");
        }

    });
    
    
    
});

app.get('/getproduct', function(req,res){
    product.find({},function(err,data){
        if(err) throw err;
        res.send(data);


    });
});

app.get('/getreviews', function(req,res){
    review.find({},function(err,data){
        if(err) throw err;
        res.send(data);


    });
});

app.get('/getdetails',function(req, res){

    user.find({}, function(err, data){
        if(err) throw err;
        res.send(data);


    });
});

app.listen(3000);
console.log("server started");