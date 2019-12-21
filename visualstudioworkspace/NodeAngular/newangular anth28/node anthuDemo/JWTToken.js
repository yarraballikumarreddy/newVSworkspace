const express = require('express');//npm install express
var app = express();
var cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');//npm install body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');
const CrudeOperation = require('./JWT-CRUDE-OPErATION');
app.post("/REGISTRATION", CrudeOperation.RES);
app.post("/LOGIN", CrudeOperation.LOG);

//======================TOKEN-VALIDATION==========================//

app.use((req, res, next) => {
  const bearerHeader = req.headers['authorization']
  console.log(bearerHeader);

  if (typeof bearerHeader !== "undefined") {
    const token = bearerHeader.split(" ")[1];
    console.log(token);

    jwt.verify(token, "umakey", function (err, authData) {
      if (err) {
        res.send("INVALIED TOKEN,PLEASE PROVIDE A VALIED ONE")
      }
      else {
        next();
      }
    });

  }
  else {
    res.send("undefine authorization");
  }
})
//===========XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX==========//
app.post('/DeleteData', CrudeOperation.DLT);
app.get("/RetriveingData", CrudeOperation.veri);
app.listen(8081, function () {

  console.log("Example app listening at http://localhost:8081")
});