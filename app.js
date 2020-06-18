var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('./appf'); 
});

app.listen(3000, () => {
    console.log('My REST API is running on port 3000!');
});