var pg = require('pg');
const connectionString = "postgres://postgres:1234567890@localhost:5432/postgres";
const client = new pg.Client(connectionString);

client.connect(function (error, result) {
    if (error) {
        return console.error('could not connect to postgres');
    }
    else {
        return console.log("Successfully connected to PostgreSQL DB")
    }
});

function insertUser(user) {
    let insertQuery = `INSERT INTO public.users_tbl (username, email) VALUES ('${user.username}','${user.email}')`;
    console.log('insertQuery-->', insertQuery);
    client.query(insertQuery, (error, result) => {
        if (error) {
            return console.error('error while exicuting the query');
        } else {
            console.log('User Details Inserted successfully...', result.rows);
        }
    });
}

function retrieve(ret) {
    let selectQuery = `SELECT * FROM public.users_tbl`;
    console.log('selectQuery-->', selectQuery);
    client.query(selectQuery, function (error, result) {
        if (error) {
            ret({ 'error': "error" });
        }
        else {
            ret(result.rows);
        }
    });
}

function deleteUser(user) {

    let deleteQuery = `DELETE FROM public.users_tbl where username='${user.username}'`;
    console.log('deleteQuery-->', deleteQuery);
    client.query(deleteQuery, function (error, result) {
        if (error) {
            return console.error('error while exicuting the query');
        }
        else {
            return console.log('User Details Deleted Successfully...');
        }
    });
}
module.exports = { insertUser: insertUser, retrieve: retrieve, deleteUser: deleteUser };