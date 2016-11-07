
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/Todos',(err,db) => {
    if(err) {
       return console.log('Unable to connect to Mongo server');
    }
    console.log('Connected to Mongo server');
    
    //delete many
    db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=> {
        console.log(result);
    },(err)=> {
        console.log('Unable to delete todo', err)
    });
    //delete one
     
     db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=> {
        console.log(result);
    },(err)=> {
        console.log('Unable to delete todo', err)
    });
    //find one and delete
    
     db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
        console.log(result);
    },(err)=> {
        console.log('Unable to delete todo', err)
    });
    
    // db.close();
});
