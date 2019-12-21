const pg =require('pg');
var constString =` postgreysql/postgreysql:1234567890@localhost/postgresql`;
var client = new pg.Client(constString);
client.connect();
   

exports.add =function(req ,res){
    var cols=[req.body.id,req.body.name,req.body.phone]
    var insertquery = ('INSERT INTO buses.busestable VALUES($1, $2, $3, $4) RETURNING *', cols)
    client.query(insertquery,err,res)
    .then(res=>console.log(res.rows))
    .catch(e => console.error(e.stack))
};

exports.list =function(req ,res){
    client.query('SELECT * FROM buses.busestable ',err,res)
    .then(res=>console.log(res.rows))
    .catch(e=>console.log(e.stack))
}
 exports.delete =function(req,res){
     id=[req.params.id]
     client.query('DELETE FROM buses.busestable WHERW id=$1',id,err,res)
     .then(res=>{
         console.log("delete sucessfly");
         res.send('/api');
        });
     client.catch(e=>console.log("not deleted"+e.stack));
 }
// //////////////////////////////////////////
// app.post('/employees',
 exports.employee=(req,res) => {
    var cols = [req.body.id, req.body.name, req.body.age]
    validateUser(req.body.email,req.body.password).then(data =>{
        console.log('validation -> status  ',data);
        if(data){
            client.query('insert into buses.employeetbl (id,name,age) VALUES($1, $2, $3) Returning *', cols, (err, result) => {
                if(err){
                    res.status(404);
                    console.error(err);
                } else {
                    res.status(200);
                    res.send(req.body);
                }
            });
        } else {
            res.status(200);
            res.send('Not valid user auth, please register first..');
        }
    }).catch(er =>{
        res.status(500);
        res.send(er)
    })
};






// <============

//  app.post('/register', 
 exports.register=(req,res) => {
    var cols = [req.body.email, req.body.password]
    client.query('insert into buses.user (email,password) VALUES($1, $2)', cols, (err, result) => {
        if(err){
            res.status(404);
            console.error(err);
        } else {
            res.status(200);
            res.send(req.body);
        }
    });
}
//)
;
function validateUser(email,password){
    var cols = [email, password]
    console.log(email, password);
var valProm = new Promise((reslove, reject)=>{
    client.query('Select * from public.user where email = $1 and password = $2', cols, (err, result) => {
        if(err){
            console.error(err);
            reject(err)
        } else {
          console.log(result.rows)
          if(result.rows.length > 0){
            reslove(true)    
          } else{
            reslove(false)
          }
        }
    });
});
 return valProm;
}