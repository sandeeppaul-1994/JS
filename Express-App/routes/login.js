var express = require('express')
var router = express.Router();
var app     = express();
var logger = require('../logger').Logger;
//var con = require('../con.js');
app.use(express.static(__dirname + '/views'));

var mysql = require('mysql');
// var mydate = require('current-date');

var con = mysql.createConnection({
  host: "mysqlnode.cuwxq1kvsiv9.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "administrator",
  database: "first",
  port: 3306
});

con.connect(function(err) { 
  if (err) throw err;
  console.log ("connected");
  logger.info("Connected in login js");
});


router.post('/',function(req,res){
  var name = ['sandeep', 'admin'];
  var namePass = {
    'sandeep': 'sandeep',
    'admin': 'admin'
  };
    var user_name=req.body.user;
    var password=req.body.password;
    var date = new Date().getTime();
    console.log('date',date);
    logger.info('date::',date);
    // var date = mydate('date');
    var query="INSERT INTO User (name,password,date) VALUES ('"+user_name+"','"+password+"','"+date+"')";
    console.log("query"+query);
    logger.info("query::"+query);

    con.query(query, function (err, result, fields) {
      if (err) throw err;
      console.log('The solution is: ', result);
      logger.info('The solution is: ', result);
      //con.end();
    });
    console.log("User name = "+user_name+", password is "+password);
    logger.info("User name = "+user_name+", password is "+password);
    
    
    if(name.indexOf(user_name) >= 0 && namePass[user_name] === password){
      res.send(username=user_name);
    }else{
      res.send('error');
    }

  });

module.exports = router;