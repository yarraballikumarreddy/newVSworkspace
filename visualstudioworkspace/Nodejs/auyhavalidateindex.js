const pg = require('pg');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
//const cors = require('cors');

// app.use(cors());
app.use(bodyparser.json());
const connection = "postgres://postgres:1234567890@localhost:5432/postgres";
const client = new pg.Client(connection);
client.connect(function (err) {
    if (err) {
        console.error("error in conncecting dB", err);
    } else {
        console.log("Succesfull!..")
    }
});

app.listen(3000, () => console.log('Express server started at port no: 3000'));
console.log('http://localhost:3000');

app.get('/', (req, res) => {
    res.send("welcome")
});



//get all employees
app.get('/employees', (req, res) => {
    client.query('Select * from crud.firstcrud', (err, result) => {
        if (err) {
            console.error(err);
        } else {
            // console.log(rows);
            res.send(result.rows);
        }
    });
});



//get an employee
app.get('/employees/:id', (req, res) => {
    client.query('Select * from crud.firstcrud where id = $1', [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
        } else {
            // console.log(rows);
            res.send(result.rows);
        }
    });
});



//delete an employee
app.delete('/employees/:id', (req, res) => {
    client.query('delete from crud.firstcrud where id = $1', [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
        } else {
            // console.log(rows);
            res.send('deleted successfully!..');
        }
    });
});




//insert an employee
app.post('/employees', (req, res) => {
    var cols = [req.body.id, req.body.name, req.body.age]
    validateUser(req.body.email, req.body.password).then(data => {
        console.log('validation -> status  ', data);
        if (data) {
            client.query('insert into  buses.user (id,name,age) VALUES($1, $2, $3) Returning *', cols, (err, result) => {
                if (err) {
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
    }).catch(er => {
        res.status(500);
        res.send(er)
    })
});


//register an employee
app.post('/register', (req, res) => {
    var cols = [req.body.email, req.body.password]
    console.log(req.body.email, req.body.password)
    client.query('insert into  buses.user (email,password) VALUES($1, $2)', cols, (err, result) => {
        if (err) {
            res.status(404);
            console.error(err);
        } else {
            res.status(200);
            res.send(req.body);

        }
    });
});
function validateUser(email, password) {
    var cols = [email, password]
    console.log(email, password);
    var valProm = new Promise((reslove, reject) => {
        client.query('Select * from buses.user where email = $1 and password = $2', cols, (err, result) => {
            if (err) {
                console.error(err);
                reject(err)
            } else {
                console.log(result.rows)
                if (result.rows.length > 0) {
                    reslove(true)
                } else {
                    reslove(false)
                }
            }
        });
    });
    return valProm;
}





//update an employee
app.put('/employees', (req, res) => {
    var cols = [req.body.name, req.body.age, req.body.id]
    console.log(cols);
    client.query = ('update crud.firstcrud set name = $1, age = $2 where id=$3', cols, (err, result) => {
        if (err) {
            res.status(404);
            console.error(err);
        } else {
            res.status(200);
            res.send(req.body);
        }
    });
});












// app.use((req, res, next) => {
//     // console.log(req.headers)
//     // check for basic auth header
//     if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
//         return res.status(401).json({ message: 'Missing Authorization Header' });
//     }
//     // verify auth credentials
//     const base64Credentials = req.headers.authorization.split(' ')[1];
//     const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
//     console.log('credentials-->', credentials)
//     const me, password = credentials.split(':');
//     validateUser(username, password).then((data) => {
//         if (data) {
//             next();
//         }
//         else {
//             res.status(401).json({ message: 'Invalid Authorization Header' });
//         }
//     }).catch(er => {
//         res.status(500);
//         res.send(er)
//     })
// });

// app.post('/employees', (req, res) => {
//      var cols = [req.body.id, req.body.name, req.body.phone]
//     client.query('insert into data.nodes (id,name,phone) VALUES($1, $2, $3) Returning *', cols, (err, result) => {
//         if (err) {
//             res.status(404);
//             console.error(err);
//         } else {
//             res.status(200);
//             res.send(req.body);
//         }
//     });
// });