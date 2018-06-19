var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mosca = require('mosca');
var path = require('path');
var morgan = require('morgan');
// get our request parameters
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// log to console
app.use(morgan('dev'));



app.use(express.static('public'));




app.post('/auth', function (req, res) {
    console.log(req)

    res.json({
        access_token: req.body.code
    });
})

app.post('/smarthome', function (req, res) {
    res.json({status:'all ok'});
});

app.listen(8080, function () {
    console.log('express server is now running on port: ')
})






function sendMessage() {
    console.log('sending message to all clients');





}

function turon() {
    var a = {
        "lights": true
    };
    a = JSON.stringify(a);
    var message = {
        topic: '/hello/world',
        payload: a, // or a Buffer
        qos: 0, // 0, 1, or 2
        retain: false // or true
    };
    server.publish(message, function () {
        console.log('done!');
    });
}

function turoff() {
    var a = {
        "lights": false
    };
    a = JSON.stringify(a);
    var message = {
        topic: '/hello/world',
        payload: a, // or a Buffer
        qos: 0, // 0, 1, or 2
        retain: false // or true
    };
    server.publish(message, function () {
        console.log('done!');
    });
}
