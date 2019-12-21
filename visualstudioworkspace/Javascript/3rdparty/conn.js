var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kumar@116",
  database: "employeetimesheet"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM employeetimesheet.timesheet_table;", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});