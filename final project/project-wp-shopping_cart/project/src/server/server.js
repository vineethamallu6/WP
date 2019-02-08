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
    quantity:String,
    cat:String,
    price:String
});

var comments = new mongoose.Schema({
    name:String,
    review:String
});

 var user = mongoose.model('user',userSchema);
 var product = mongoose.model('product',productSchema);

var comments = mongoose.model('comments',comments);



//  var itemOne = product({"title": "Pexels","description": "FernandoArcos","image": "watch1.jpg","cat": "Watches","price": "12000"}).save(function(err){
//         if(err) throw err;
//         console.log(err);
//         console.log("item saved");
//      });

// fs.readFile('./server/categories.json', function(err, data){
//     if(err) throw err;
//     var jsondata = JSON.parse(data);
//     for(var i = 0;i<jsondata.length;i++){
//         var itemOne = product(jsondata[i]).save(function(err){
//             if(err) throw err;
//             console.log(err);
//             console.log("product data inserted")
//         });
//     }
// });

 
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

app.get('/getproduct', function(req,res){
    product.find({},function(err,data){
        if(err) throw err;
        res.send(data);


    });
});
app.get('/getdetails',function(req, res){
    //get data from mongoose db and pass it to the view
    user.find({}, function(err, data){
        if(err) throw err;
        res.send(data);
        
        // res.render('todo', {todos: data});

    });
});
app.post('/postcomment',function(req, res){
    // res.send(req.body);
    console.log("iam comment");
})
// app.post('/getcomment',function(req, res){
//     var data = req.body;
//     comments(data).save(function(err,data){
//         if(err){
//             throw err;
//         }
//         console.log("comments inserted");
//     })
// })
app.listen(3000);
console.log("server started");