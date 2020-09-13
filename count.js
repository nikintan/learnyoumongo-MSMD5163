var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var age = parseInt(process.argv[2]);

    mongo.connect(url, function(err, db){
   		if (err) {
			console.log('Error connecting');
		}

		var dataBase = db.db('learnyoumongo');
		var collection = dataBase.collection('parrots');

		collection.count({ age: { $gt: +age } } , function(err, count) {
    		if (err) {
				console.log('Error reading');
			}
			console.log(count);
        	db.close();
  	});
});