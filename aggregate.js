var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var size = process.argv[2];

    mongo.connect(url, function(err, db){
		var dataBase = db.db('learnyoumongo');
		var price = dataBase.collection('prices');

		price.aggregate([
				{ $match: { size: size } },
				{ $group: {_id: 'average',
					   total: { $avg: '$price' } 
				} }])
		       .toArray(function(err, results) {
				if (err) {
					console.log(err);
				}
				if (!results.length) {
					throw new Error('No results found')
				}
				console.log(Number(results[0].total).toFixed(2));
			});

	db.close();

});
