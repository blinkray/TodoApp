// const MongoClient = require('mongodb').MongoClient;

//es6 object destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if( err ) {
		return console.log('Unable to connect to mongo db');
	}
	console.log('Connected to Mongo db');

	// db.collection('Todos').insertOne( {
	// 	name: 'Something New To Do',
	// 	completed: false
	// }, (err,result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops));
	// } );

	// db.collection('Users').insertOne( {
	// 	name: 'Jim',
	// 	age: 51,
	// 	location: 'Lenexa'
	// }, (err,result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert User', err);
	// 	}

	// 	// console.log(JSON.stringify(result.ops));
	// 	console.log(result.ops[0]._id.getTimestamp());
	// } );

	db.close();
});