var http = require('http');
var ejs = require('ejs')
var fs = require('fs');
var u = require('url');
var db = require("./curd.js");



var server = http.createServer(function (request, response) {
    if (request.url == "/home") {
        fs.readFile("./homepage.ejs", "UTF-8", function (error, data) {
            if (error) {
                response.write('Error found');
            }
            else {
                response.write(data);
                response.writeHead(200, { 'content-type': 'text/html' });
            }
        });
    }
    else if (request.url.indexOf('createUser') > 0) {
        var y = u.parse(request.url, true);
        console.log(y.query);
        db.insertUser(y.query);
        fs.readFile("./delete.ejs", "UTF-8", function (error, data) {
            if (error) {
                response.write("error found")
            }
            else {
                response.writeHead(200, { 'content-type': 'text/html' });
                response.write(data);
            }
        });
    }
    else if (request.url == "/userslist") {
        db.retrieve(function (list) {
            console.log(list);
            var details = JSON.stringify(list);
            response.writeHead(200, { 'content-type': 'application/json' });
            response.write(details);
        })
    }
    if (request.url == "/deletelist") {
        fs.readFile("./form2.ejs", "UTF-8", function (error, data) {
            if (error) {
                return console.log("no file ....");
            }
            else {
                return response.write(data);
            }
        });
    }

    else if (request.url.indexOf('deleteinfo') > 0) {
        var url = u.parse(request.url, true);
        db.deleteUser(url.query);
        fs.readFile("./delete.ejs", "UTF-8", function (error, data) {
            console.log("****************************");
            if (error) {
                response.write("not found");
            }
            else {
                response.write(data);
                console.log("SUCCESSSSSSS...........................")
            }
        });
    }
});

server.listen(1234);