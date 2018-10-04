var express = require('express');
var path = require('path');
var parser = require('body-parser');
var r = require("rethinkdb");

const rethinkClient = require('./rethinkClient.js');
const createRethinkConnection = require('./createRethinkConnection.js');
const closeRethinkConnection = require('./closeRethinkConnection.js');

const addRow = require('./controllers/addRow.js');

var app = express();
app.set('view engine', 'ejs');
app.use(parser.urlencoded({
    extended: true
}));
app.use(parser.json());

//app.use(createRethinkConnection);

app.get('/', function (req, res) {
    res.render('main');
});

app.post('/', function (req, res) {
    res.render('main');
});

app.post('/dbForm', function (req, res) {
    /*console.log("dbID = " + req.body.dbId);
    console.log("dbValue = " + req.body.dbValue);*/
    app.use(createRethinkConnection);
    app.use(addRow);
    res.render('done');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

//app.on("after", closeRethinkConnection);