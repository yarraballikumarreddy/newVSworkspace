const { Client } = require('pg');
var connectionString = "postgres://postgres:1234567890@localhost:5432/postgres";

const client = new Client({
    connectionString: connectionString
});

client.connect();

exports.list = function (req, res) {

    client.query('SELECT * FROM customers.customer.', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
       // res.send('customer/list', { title: "Customers", data: result.rows }); // callinng the list.ejs file 
        res.send(result.rows );
    });

};

exports.add = function (req, res) {
    res.send('customer/add', { title: "Add Customer"  }); // calling the add.ejs file
};

exports.edit = function (req, res) {

    var id = req.params.id;

    client.query('SELECT * FROM customers.customer WHERE id=$1', [id], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
       // res.render('customer/edit', { title: "Edit Customer", data: result.rows }); // calling the edit.ejs file
res.send(result.rows );
    });

};

exports.save = function (req, res) {

    var cols = [req.body.name, req.body.address, req.body.email, req.body.phone];

    client.query('INSERT INTO customers.customer(name, address, email, phone) VALUES($1, $2, $3, $4) RETURNING *', cols, function (err, result) {
        if (err) {
            console.log("Error Saving : %s ", err);
        }
        res.send('/customers');
    });

};

exports.update = function (req, res) {

    var cols = [req.body.name, req.body.address, req.body.email, req.body.phone, req.params.id];

    client.query('UPDATE customers.customer SET name=$1, address=$2,email=$3, phone=$4 WHERE id=$5', cols, function (err, result) {
        if (err) {
            console.log("Error Updating : %s ", err);
        }
        res.send('/customers');
    });

};

exports.delete = function (req, res) {

    var id = req.params.id;

    client.query("DELETE FROM customers.customer WHERE id=$1", [id], function (err, rows) {
        if (err) {
            console.log("Error deleting : %s ", err);
        }
        res.send('/customers');
    });

};


exports.getJson = function (req, res) {

    res.send({id:"1",name:"ravi"});

};