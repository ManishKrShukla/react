var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var fs = require('fs');

var multipartMiddleware = multipart({ uploadDir: './uploads' });

app.use(bodyParser.urlencoded({
    extended: true
}));

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
    next();
});

// app.use("/images", express.static(__dirname + '/uploads'));

// app.post('/upload', multipartMiddleware, function(req, res) {
//     var file = req.files.file;
//     res.status(200).send('OK');
// });

app.get('/getUsers', function(req, res) {
    res.status(200).send(JSON.stringify([{
        id: 1,
        name: 'User 1',
        address: "BGL"
    }, {
        id: 2,
        name: 'User 2',
        address: "BGL"
    }, {
        id: 3,
        name: 'User 3',
        address: "BGL"
    }, {
        id: 4,
        name: 'User 4',
        address: "BGL"
    }, {
        id: 5,
        name: 'User 5',
        address: "BGL"
    }]));
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});