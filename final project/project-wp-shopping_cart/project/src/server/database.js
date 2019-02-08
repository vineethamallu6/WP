const mongoclient = require("mongodb").MongoClient;
const objectId = require('mongodb').MongoClient;

const dbname = "shopingcart";
const url = "mongodb://localhost:27017";

const mongoOptions = {useNewUrlParser : true};

const state = {
    db : null 
};

const connection = (cb) =>{
    if(state.db)
        cb();
    else {
        mongoclient.connect(url,mongoOptions,(err, client)=>{
            if(err)
                cb(err);
            else{
                state.db = client.db(dbname);
                cb();
            }
        });
    }
}


const getprimarykey=(id)=>{
    return objectId(_id);
}

const getdb=()=>{
    return state.db;
}

module.exports = {getdb, connection, getprimarykey};