var mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
    
    if (err) {
        throw err;
    }
    
    var collection = db.collection("parrots");
    
    collection.find({
        age : {$gt : parseInt(process.argv[2])}
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