var express = require('express')
var router = express.Router();
var app     = express();
app.use(express.static(__dirname + '/views'));
var mysql = require('mysql');
var logger = require('../logger').Logger;
var date="";

var con = mysql.createConnection({
  host: "mysqlnode.cuwxq1kvsiv9.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "administrator",
  database: "first",
  port: 3306
});

con.connect(function(err) { 
  if (err) throw err;
  console.log ("connected in get data js");
  logger.info("Connected in get data js");
});


router.post('/',function(req,res){
    var username=req.body.user;
    var query="select max(date) as date from User where name='"+username+"'";
    console.log("query"+query);
    logger.info("query"+query);

    con.query(query, function (err, result, fields) {
      if (err) throw err;
      console.log('The solution is: ', result[0].date);
      logger.info('The solution is: ', result[0].date);
      date_value=Date(result[0].date);
      console.log(date_value);
      logger.info('date value is :'+ date_value);
    });
    res.send({name:username, date:date_value});
  });

module.exports = router;