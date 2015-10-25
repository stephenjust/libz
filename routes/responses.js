var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/all', function(req, res) {
    var db = req.db;
    var collection = db.get('response');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

router.post('/', function(req, res) {
    var db = req.db;
    var collection = db.get('response');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

module.exports = router;
