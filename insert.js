var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db) {
    
    if (err) {
        throw err;
    }
    
    var docs = db.collection("docs");
    
    var doc = {
        firstName : process.argv[2],
        lastName : process.argv[3]
    };
    
    docs.insert(doc, function(err, data) {
        if (err) throw err;
        
        console.log(JSON.stringify(doc));
        db.close();
    });

});