
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
var cors=require('cors');
app.use(cors());
const bodyParser= require('body-parser');//npm install body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const CrudeOperation= require('./Crude-Operation');
app.post("/AddHRDATA",CrudeOperation.IST);
//====================MIDDLEVARE=============================//
app.use(function(req,res,next){
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({ message: 'Missing Authorization Header' });
    }
    // verify auth credentials
    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    CrudeOperation.val(username, password)
    .then((data)=>{
      if(data){
      next();
      }
      else{
          res.send("INVALIDE AUTHORIZATION")
      }
    })
    .catch((demo)=>{
        res.send(demo)
    })
});
//===============XXXXXXXXXXXXXXXXXXXXX================================//
app.get("/RetriveingData",CrudeOperation.ret);
app.post("/InseartData",CrudeOperation.add);
app.post('/DeleteData',CrudeOperation.dlt);
app.put("/UpDateData",CrudeOperation.UPD);
app.put("/SingleId",CrudeOperation.SinID);
app.post("/ADDEMPLOYIES",CrudeOperation.EMP);
app.listen(8081, function () {

    console.log("Example app listening at http://localhost:8081")
 });