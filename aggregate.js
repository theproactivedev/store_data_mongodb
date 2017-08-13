var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db) {
    
    if (err) {
        throw err;
    }
    
    var collection = db.collection("prices");
    
    collection.aggregate([
        { $match: {size: process.argv[2]} },
        { $group: {
            _id: null,
            avg: {
                $avg : "$price"
            }
        }}
    ], function(err, avg) {
        if (err) throw err;
        
        console.log(avg[0].avg.toFixed(2));
        
        db.close();
    });

});