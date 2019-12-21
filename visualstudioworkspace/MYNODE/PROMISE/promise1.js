const pg = require('pg');
var connectionString = "postgres://postgres:1234567890@localhost:5432/postgres";
const client = new pg.Client(connectionString);
client.connect();


// exports.add =function(req ,res){
// var cols=[req.body.id,req.body.name,req.body.phone]
// var insertquery = ('INSERT INTO buses.busestable VALUES($1, $2, $3, $4) RETURNING *', cols)
// client.query(insertquery)
// .then(res=>console.log(res.rows))
// .catch(err=> console.error(err))
// };

// exports.list =function(req ,res){
//     client.query('SELECT * FROM buses.busestable ')
//     .then(res=>console.log(res.rows))
//     .catch(e=>console.log(e.stack))
// }
//  exports.delete =function(req,res){
//      id=[req.params.id]
//      client.query('DELETE FROM buses.busestable WHERW id=$1',id)
//      .then(res=>{
//          console.log("delete sucessfly");
//          res.send('/api');
//         });
//      client.catch(e=>console.log("not deleted"+e.stack));
//  }

function addEmp(user, req, res) {

    let insertQuery = `insert into buses.busestable VALUES (${user.id}, '${user.name}')`;
    client
        .query(insertQuery)
        .then(result => {
             console.log('Inserted Successfully!...');
        res.send(resuilt.user) })
        .catch(err => console.error(err))
        ;
}
//promise function
function listEmp(req, res) {
    client
        .query('select * from buses.busestable')
        // .then(res => {
        //     // const fields = res.fields.map(field => field.name)
        //     // console.log('-----------------------------');        
        //     // console.log(fields);
        //     // console.log('-----------------------------');
        //     // console.log(res.rows);
        //     // console.log('-----------------------------');
        //     // console.log(res.rows[0]);
        //    res.send(res.rows)
        // })
        .then(result => { console.log('list of table'+result),
    res.send(result.rows)})
        .catch(err => console.error(err));

}
// callbackfunction
function list(req, res) {

    client.query('SELECT * FROM buses.busestable', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.send(result.rows); // callinng the list.ejs file 
    });

};


module.exports = { list1: listEmp, add: addEmp, list: list };