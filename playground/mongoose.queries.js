const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User } = require("./../server/models/user");

// var id = "581fb5696763c8e319fca6d95";

// if(!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }
//  Todo.find({
//      _id:id
//  }).then((todos)=> {
//      console.log('Todos ',todos);
//  });
 
//  Todo.findOne({
//      _id:id
//  }).then((todo)=> {
//      console.log('Todo ',todo);
//  });

// Todo.findById(id).then((todo)=> {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//      console.log('Todo ',todo);
//  }).catch((e)=> {
//      console.log(e)
//  });

User.findById("581f381041bfeee321e88517").then((user)=> {
    if(!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user,undefined,2));
},(e)=> {
    console.log((e));
});







