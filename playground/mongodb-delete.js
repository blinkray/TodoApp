// const MongoClient = require('mongodb').MongoClient;

//es6 object destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if( err ) {
		return console.log('Unable to connect to mongo db');
	}
	console.log('Connected to Mongo db');

	// delete many
	// db.collection('Todos').deleteMany({text: 'Feed the cats'}).then( (result) => {
	// 	console.log(result);
	// });

	// delete one
	// db.collection('Todos').deleteOne({text: 'Feed the cats'}).then( (result) => {
	// 	console.log(result);
	// });

	//	find one and delete
	// db.collection('Todos').findOneAndDelete({completed: false}).then( (result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').findOneAndDelete(
	// 	{
	// 		_id: new ObjectID('5903e0186f5d6e9cd267361b')
	// 	}
	// ).then( (result) => {
	// 	console.log(result);
	// });

	// delete one
	db.collection('Users').deleteOne({name: 'Bob'}).then( (result) => {
		console.log(result);
	});



	//db.close();
});