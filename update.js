var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

    mongo.connect(url, function(err, db){
   		if (err) {
			console.log('Error connecting');
		}

		var dataBase = db.db('learnyoumongo');
		var collection = dataBase.collection('users');

		collection.update({ username: "tinatime"}, {$set: {age:40 } }
   			, function(err, data) {
    		if (err) {
				console.log('Error reading');
			}
        	db.close();
  	});
});