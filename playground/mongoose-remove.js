const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User } = require("./../server/models/user");

// Todo.remove({}).then((result)=> {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '58205e5941ed394c883fc539'}).then((dodo)=> {
//     console.log(dodo);
// });
// Todo.findByIdAndRemove('58205e7e41ed394c883fc53b').then((todo)=> {
//     console.log(todo);
// });



