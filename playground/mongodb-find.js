// const MongoClient = require('mongodb').MongoClient;

//es6 object destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if( err ) {
		return console.log('Unable to connect to mongo db');
	}
	console.log('Connected to Mongo db');

	// db.collection('Todos').find(
	// 	{
	// 		_id: new ObjectID('5903aadb543aae10d430947e')
	// 	}
	// 	).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log('Todos');
	// 	console.log(`Todos Count ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Users').find(
		{
			name: 'Jim'
		}
		).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	//db.close();
});