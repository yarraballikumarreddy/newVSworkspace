const pg = require('pg');//npm install pg
const url='postgres://postgres:1234567890@localhost:5432/postgres';
const client =  new pg.Client(url);
//======================================================================//

client.connect(function(err){
if(err){
return console.error('Plaese Give Me Valied Url');
}
});
//=============================== INSERT-OPERATION==========================================//
function InseartData (req,res){
    var user ={
     id:req.body.id,
     name:req.body.name
    }
let InseartQuarry=`INSERT INTO "buses".busestable (id,name) VALUES (${user.id},'${user.name}')`;
               //1....**IN Promise Formate**/
client.query(InseartQuarry)
.then(result =>res.send(user))
.catch(err =>console.error('Please Enter A Valied Queary'+err))
                //2...+++IN Call Back Formate+++/
// client.query(InseartQuarry,function(err,result){
// if(err){
//     return console.error('Please Enter A Valied Queary'+err);
// }
// else{

//     res.send(user);
// }
// });
                //+++++++++++++++++++++++++//
}
//================================= DELETE-OPERATION=======================================//
function deleate (req,res){
    id=req.body.id;
    let deleateQuary = `DELETE from "buses".busestable where id = ${id}`;
           //**IN Promise Formate**/
     client.query(deleateQuary)
     .then(result =>res.send("SucseeFully Deleated"+result.rows))
     .catch(err =>console.error("Error in Deleate Quary"+err))
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
//================================= UPDATE-OPERATION=======================================//
function Update (req,res){
    var user ={
        id:req.body.id,
        name:req.body.name
       }
let UpdateQuary=`UPDATE "buses".busestable set name='${user.name}'where id=${user.id}`;
                  //**IN Promise Formate**/
client.query(UpdateQuary)
.then(result =>res.send(user))
.catch(err =>console.error("Plese Give Me A Valied Update Quary"+err))
              //+++IN Call Back Formate+++//
// client.query(UpdateQuary,function(err,result){

// if(err){
//    return console.error("Plese Give Me A Valied Update Quary"+err)
// }
// else{
//     res.send("Sucsees Fully Updated"+result.rows)
// }
// });
             //+++++++++++++++++++++++++// 
}
//==============================RETRIVE-OPERATION=================================//
function Retrive(req,res){
                //**IN Promise Formate**/
let RetriveQuary = `SELECT * from buses.busestable `;
client
  .query(RetriveQuary)
  .then(result => res.send(result.rows))
  .catch(err => console.error('Please Enter A Valied Queary'+err))
               //+++IN Call Back Formate+++//
// client.query(RetriveQuary,function(err,result){
// if(err){
// return console.error("Please Give A Valide RetriveQuary");
// }
// else{
//     return res.send(result.rows);
// }
// });
            //+++++++++++++++++++++++++//
}



function single(req ,res){
    id=req.body.id;
    let Re = `SELECT * from buses.busestable where id=${id} `;
client
  .query(Re)
  .then(result => res.send(result.rows))
  .catch(err => console.error('umar error'+err))

}

module.exports={add:InseartData,dlt:deleate,UPD:Update,ret:Retrive,edo:single}
