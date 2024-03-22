
const express = require('express');
const path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'front')));

app.get('/login', function(req, res) {
    res.sendFile('front/login.html', {root: __dirname })
});

app.listen(3000);