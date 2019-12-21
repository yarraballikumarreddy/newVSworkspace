const pg = require('pg');//npm install pg
const url = 'postgres://postgres:1234567890@localhost:5432/postgres';
const client = new pg.Client(url);
const jwt = require('jsonwebtoken'); ///npm install jsonwebtoken

client.connect(function (err) {
  if (err) {
    return console.error('Plaese Give Me Valied Url');
  }
});

//======================== LOGIN-PAGE===============================//
function LOGINPAGE(req, res) {
  var info = {
    username: req.body.username,
    password: req.body.password
  }
  let SigleIdQurey = `SELECT * from buses.user where username='${info.username}' and password='${info.password}'`
  client.query(SigleIdQurey)
    .then(result => {
      if (result.rows.length > 0) 
      {
        jwt.sign({ data: result.rows }, "umakey", { expiresIn: '60s' }, (err, token) => {
          res.send({ "token": token })
        });
      }
      else {
        res.send("INVALIDE AUTHORIZATION")
      }
    })
    .catch(err => console.error("PLease Provide a Valied SingleId URL" + err))

}

//========================REGISTRATION-FORM=========================//
function REGISTRATIONFORM(req, res) {
  var user = {
    username: req.body.username,
    password: req.body.password
  }
  let InseartQuarry = `INSERT INTO buses.user (username,password) VALUES ('${user.username}','${user.password}')`;

  client.query(InseartQuarry)
    .then(result => res.send(user))
    .catch(err => console.error('Please Enter A Valid Query' + err))
  //2...+++IN Call Back Format+++/
  // client.query(InseartQuarry,function(err,result){
  // if(err){
  //     return console.error('Please Enter A Valid Query'+err);
  // }
  // else{

  //     res.send(user);
  // }
  // });
  //+++++++++++++++++++++++++//
}
//================================= DELETE-OPERATION=======================================//
function deleate(req, res) {
  id = req.body.id;
  let deleateQuary = `DELETE from buses.user where id = ${id}`;
  //**IN Promise Formate**/
  client.query(deleateQuary)
    .then(result => res.send(result))
    .catch(err => console.error(err))
  //+++IN Call Back Formate+++//
  // client.query(deleateQuary,function(err,result){
  //     if(err){

  //         return console.error("Error in Deleate Quary"+err)
  //     }
  //     else{

  //         res.send("SucseeFully Deleated"+result.rows)
  //     }
  // });
  //+++++++++++++++++++++++++//    
}

function VEFIYTOEN(req, res) {
  res.json({ welcome: "YOU SUCSEESFULLY CREATED DEMOPOS" })
}

module.exports = { LOG: LOGINPAGE, veri: VEFIYTOEN, RES: REGISTRATIONFORM, DLT: deleate }