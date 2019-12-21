var express =require('express');
var app =express();
var fs =require('fs');
var bodyParser = require('fs');
app.use(bodyParser.urlencoded({ extended: true })); 
var pg =require('pg');
var conString = "postgres://postgres:1234567890@localhost:5432/postgres";
var client = new pg.Client( conString);
client.connect(function(err){
    if(err){
        console.error('error occur in '+err);
    }
});

app.get('/home',(req,res)=>{
  res.sendfile('/epress.html');
});
app.post('/postdata',(req,res)=>{
    res.write(req.body.id);
    res.write(req.body.name);
    res.write(req.body.age);
    res.end()
  var  inserquery=`INSERT INTO employes.employe (id, name, age) VALUES ("req.body.id",'"req.body.name"',"req.body.age")`;
    client.query(inserquery,(err,data)=>{
        if(err){
            console.log('errrror  insert')   
        }
        else{console.log('data insert sucess')}
    })
    
});

app.listen(3000);

