const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



//	Todo.remove

//	Todo.findOneAndRemove

//	Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59091e267648814662b2894a'}).then((todo) => {

	console.log( todo );

});

// Todo.findByIdAndRemove('590908d975840e505093e0ae').then((todo) => {

// 	console.log( todo );

// });










