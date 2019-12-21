const pg = require('pg')
const conString ="postgres://postgres:1234567890@localhost:5432/postgres";
const client = new pg.Client(conString)
 client.connect(function(err){
// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()
if(err){
    return console.error
    ('check your connection',err);
}
});

function add(user){
    let inserquery =`INSERT INTO employes.employe (id, name, age) VALUES (${user.id},'${user.name}',${user.age})`;
console.log("edo insert query ",inserquery);
client.query(inserquery,function(err,result){
    if(err){
        return console.error("error came in querry",err);
    }
    else{
        console.log("something is inserting",result);
    }
});

}



function list(){
    console.log();

    client.query('SELECT * from employes.employe', function(err, result) {
if(err){
    return console.log("list not found",err);
}
else{
    return console.log ("list of candidates",result);
}
    });

}

function update(user){
    let updatequery =`UPDATE employes.employe set id =${user.id}, name = '${user.name}', age =${user.age} where id = ${user.id}`;
console.log();
client.query(updatequery ,function(err, result){
    if(err){
        console.log("not update please check",err);
    }
    else{
        console.log ("update complete",result)
    }

});
}

function deleteemp(Id){
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
}





//module.exports = addEmp;

module.exports = {add: add, list:list, update:update, delete:deleteemp};