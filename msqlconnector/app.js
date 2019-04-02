var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'admin',
        password: 'admin#123',
        server: 'testmsqldb.cuwxq1kvsiv9.us-east-1.rds.amazonaws.com', 
        database: 'master' 
    };

    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
    
        request.query('create database newdb', function (err, recordset) {
            
            if (err) console.log(err)

            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});