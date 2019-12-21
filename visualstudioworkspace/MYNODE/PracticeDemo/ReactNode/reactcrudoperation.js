const pg = require('pg');//npm install pg
const url = 'postgres://postgres:1234567890@localhost:5432/postgres';
const client = new pg.Client(url);
client.connect(function (err) {
    if (err) {
        return console.error('Plaese Give Me Valied Url');
    }
});



function insertdata(req, res) {
    var user = {
        name: req.body.name,
        description: req.body.description,
        productid: req.body.productid
    }
    console.log(user)
    let insertquery = `INSERT INTO "product".producttable (name,description,productid) VALUES ('${user.name}','${user.description}','${user.productid}')`;
    client.query(insertquery)
        .then(result => res.send(result))
        .catch(err => console.error('Please Enter A Valied Queary' + err))
}



function deleate(req, res) {
    productid=req.body.productid
    console.log(productid)
    let deleateQuary = `DELETE from "product".producttable where productid = '${productid}'`;
    //**IN Promise Formate**/
    client.query(deleateQuary)
        .then(result => res.send("SucseeFully Deleated" + result.rows))
        .catch(err => console.error("Error in Deleate Quary" + err))
}
// function deleate (req, res)  {
//     console.log(req.params.id)
//     client.query('delete from "product".producttable where id = $1', [req.params.id], (err, result) => {
//         if (result) {
            
//             res.send('deleted successfully!..')
//             console.log(result.rows)
//             //  console.log(rows);
//         } else {
            
//             console.error(err);
//         }
//     });
// };


function Update(req, res) {
    var user = {
        name: req.body.name,
        description: req.body.description,
        productid: req.body.productid
    }
    console.log(user)
    let UpdateQuary = `UPDATE "product".producttable set name='${user.name}',description='${user.description}'where productid='${user.productid}'`;
    //**IN Promise Formate**/
    client.query(UpdateQuary)
        .then(result => res.send(result))
        .catch(err => console.error("Plese Give Me A Valied Update Quary" + err))
}





function Retrive(req, res) {
    //**IN Promise Formate**/
    let RetriveQuary = `SELECT * from "product".producttable`;
    client
        .query(RetriveQuary)
        .then(result => res.send(result.rows))
        .catch(err => console.error('Please Enter A Valied Queary' + err))
}
    module.exports = { add: insertdata, dlt: deleate, UPD: Update, ret: Retrive}