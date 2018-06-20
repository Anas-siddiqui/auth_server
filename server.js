var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');


var port = process.env.PORT || 8080;

var path = require('path');
// get our request parameters
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// log to console
app.use(morgan('dev'));






app.get('/login', function (req, res) {
   res.json("Express");
});

app.post('/auth', function (req, res) {
    console.log(req)

    res.json({
        access_token: req.body.code
    });
})
// bundle our routes



app.listen(port);
console.log('http://localhost:' + port);
