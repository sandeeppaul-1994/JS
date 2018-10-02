var express = require('express')
var router = express.Router();
var app     = express();
app.use(express.static(__dirname + '/views'));

router.post('/',function(req,res){
  var name = ['sandeep', 'admin'];
  var namePass = {
    'sandeep': 'sandeep',
    'admin': 'admin'
  };
    var user_name=req.body.user;
    var password=req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    if(name.indexOf(user_name) >= 0 && namePass[user_name] === password){
      res.send(username=user_name);
    }else{
      res.send('error');
    }
    //res.render('views/welcome');
    // res.redirect('http://localhost:3000/welcome',username=user_name);
  });

module.exports = router;