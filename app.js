/*
Node server app.js file for 
Visual Trend Study Tool
by researchers at the Berkeley Institute of Design
Ace Chen, Isabel Li, Pradeep Saravana Rathnam, and Timothy Yang
Led by Shm Garanganao Almeda.
*/

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 3001;
var publicPath = process.cwd() + '/public';

//here's where we specify what to send to users that connect to our web server...
app.get('/', (req, res) => res.render(publicPath + '/views/pages/index.ejs'));

app.get('/a', function (req, res) {
  res.render(publicPath + '/views/pages/a.ejs');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
