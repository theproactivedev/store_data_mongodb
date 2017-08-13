var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db) {
    
    if (err) {
        throw err;
    }
    
    var parrots = db.collection("parrots");
    
    parrots.find({
        age : {$gt : parseInt(process.argv[2])}
    }, {
        name: 1,
        age: 1,
        _id: 0
    }).toArray(function(err, documents) {
        if (err) {
            throw err;
        }
        
            // documents.forEach(function(document) {
            //     console.log(document);
            // });  
            
            console.log(documents);
        
        db.close();
    });

});