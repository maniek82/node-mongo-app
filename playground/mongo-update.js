const {MongoClient, ObjectID} = require("mongodb");
const databaseName = 'Users';


MongoClient.connect(`mongodb://localhost:27017/${databaseName}`,(err,db) => {
    if(err) {
       return console.log('Unable to connect to Mongo server');
    }
    console.log(`Connected to Mongo server: database -  ${databaseName}.`);
   
   
    
    //findOneAndUpdate
    db.collection('users').findOneAndUpdate({_id: new ObjectID("581f247f0d9a671c4b068aa1")},{
         $inc: {
             age: 2
         },
         $set: {
             name: 'mariusz'
         }
       }, {
           returnOriginal: false
       }
    ).then((result)=> {
        console.log(result);
    });
    // db.close();
});
