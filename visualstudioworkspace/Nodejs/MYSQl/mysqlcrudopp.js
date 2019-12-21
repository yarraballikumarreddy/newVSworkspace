var mysql      = require('mysql');
var connection = mysql.createConnection
({host : 'localhost', 
user : 'root',
 password : 'Kumar@116', 
 database : 'mysql'});
 
connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' );
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

// connection.query('SELECT * FROM hello.hellotable', function (error, results, fields) {
//     if (error)
//         throw error;

//     results.forEach(result => {
//         console.log(result);
//     });
// });

function addemp(user){
   var insertq= `INSERT INTO hello.hellotable (id, name, age) VALUES (${user.id},'${user.name}',${user.age})`;
   connection.query(insertq, function(err,result){
    if(err) {
        return console.error('error running query', err);
      } else {
          console.log('Inserted result...', result);
  
      }
   })

}


module.exports={add:addemp};

