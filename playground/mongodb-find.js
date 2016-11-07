
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/Users',(err,db) => {
    if(err) {
       return console.log('Unable to connect to Mongo server');
    }
    console.log('Connected to Mongo server');
    
//   db.collection('Todos').find({
//       _id: new ObjectID("581ee962478cf70f2b3b15e3"
//   }).toArray().then((docs)=> {
//       console.log('Todos');
//       console.log(JSON.stringify(docs,undefined,2));
//   },(err)=> {
//       console.log('Unable to fetch todos', err);
//   });

//       db.collection('Todos').find().count().then((count)=> {
//       console.log(`Todos count ${count} `);
       
//   },(err)=> {
//       console.log('Unable to fetch todos', err);
//   });
        db.collection('users').find({name:'Romek'}).toArray().then((docs)=> {
            console.log(JSON.stringify(docs,undefined,2));
        },(err)=> {
            console.log('Unable to fetch todos', err);
        });
    // db.close();
});
