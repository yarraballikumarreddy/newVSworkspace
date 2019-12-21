
const express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var promise = require('./promise');

app.set('port', process.env.PORT || 4000);

app.get(('/api'),promise.list);
app.post(('/api/add'),promise.add);
app.get(('/api/edit'),promise.update);
app.post(('/api/employee',promise.employee));
app.post(('/api/register',promise.register));
