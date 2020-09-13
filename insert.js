var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var fName = process.argv[2];
var lName = process.argv[3];


    mongo.connect(url, function(err, db){
   		if (err) {
			console.log('Error connecting');
		}

		var dataBase = db.db('learnyoumongo');
		var collection = dataBase.collection('users')

		var myObj = { firstName: fName, lastName: lName };
  		collection.insert(myObj, function(err, data) {
    	if (err) {
				console.log('Error reading');
			}
    	console.log(JSON.stringify(myObj));
    	db.close();
  	});
});