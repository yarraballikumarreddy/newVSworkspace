
// var userDetails={
//     'id':4,
//     'name':'Rajshaker',
//     'roolnumber':102
//     };
// CrudeOperation.add(userDetails);
// CrudeOperation.dlt(2);
// var user={
//     'id':4,
//     'name':'Alla.SivaReddy',
//     'roolnumber':101
//     };
// CrudeOperation.UPD(user);
// CrudeOperation.ret();

const express= require('express');//npm install express
var app = express();
const bodyParser= require('body-parser');//npm install body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//var cross = require('cross');
//app.use(cross());
const cors = require("cors");
app.use(cors());

const CrudeOperation= require('./Crude-Operation');
app.get("/RetriveingData",CrudeOperation.ret);
app.post("/InsertData",CrudeOperation.add);
app.post('/DeleteData',CrudeOperation.dlt);
app.post("/UpDateData",CrudeOperation.UPD);
app.post('/edo',CrudeOperation.edo);
app.listen(8082, function () {
    console.log("Example app listening at http://localhost:8082")
 });
