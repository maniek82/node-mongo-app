// const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require("mongodb");

var obj = new ObjectID();

console.log(obj.getTimestamp());
MongoClient.connect('mongodb://localhost:27017/Users',(err,db) => {
    if(err) {
       return console.log('Unable to connect to Mongo server');
    }
    console.log('Connected to Mongo server');
    
    db.collection('users').insertOne({
        name: 'Wiesiek',
        age: 45
    },(err, result)=> {
        if(err) {
            return console.log('Unable to insert todo ',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
        console.log(result.ops[0]._id.getTimestamp());
    });
    db.close();
});
