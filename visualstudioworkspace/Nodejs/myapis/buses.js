const pg = require('pg');
var express = require('express');
const app = express();
const conststring = "postgres://postgres:1234567890@localhost:5432/postgres";
const client = new pg.Client(conststring);
client.connect((err, result) => {
    if (err) { console.log("erroor in connection" + err) }
    else {
        'connection is succesfully'
    }
});

function add(user,req,res) {
    var query = `INSERT INTO employes.employe (id, name, age) VALUES (${user.id},'${user.name}',${user.age})`;
    client.query(query, (err, result) => {
        if (err) {
            console.log("inserting is fail" + err);
        }
        else {
            console.log("inserting sucessfully" + result)
        }
       
    });
    res.send();
}

function update(user ,req,res) {
    var query = `UPDATE buses.bustable set id =${user.id}, name = '${user.name}', age =${user.age} where id = ${user.id}`;
    client.query(query, (err, result) => {
        if (err) {
            console.log("inserting is fail" + err);
        }
        else {
            console.log("inserting sucessfully" + result)
        }
       
    });
    res.send();
}

function list(req,res) {
    client.query('SELECT * from employes.employe', function (err, result) {
        if (err) {
            return console.log("list not found", +err);
        }
        else {
            return console.log("list of candidates", +result);
           
        }
    });
    res.send();

}

function deleteemp(Id,req,res){
    //console.log(Id);
    let deleteQuery = `DELETE from employes.employe where id = ${Id}`;
    client.query(deleteQuery, function(err, result) {
        if(err) {
            return console.err('error running query', err); 
        }
        else {
             console.log('Delete result-->', result);
             
        }
    });
    res.send();
}

module.exports={add: add, list:list, update:update, delete:deleteemp};
 
