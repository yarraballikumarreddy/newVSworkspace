
 const express = require('express');
 var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

var promise = require('./promise1');
app.listen(3000)
 
 app.get(('/api'),promise.list);
 app.get(('/api1'),promise.list1);
app.post(('/api/add'),promise.add);


