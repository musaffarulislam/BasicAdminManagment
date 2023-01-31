const { response } = require('express');
var express = require('express');
var router = express.Router();
var userDetails = require('../helpers/user-details')

/* GET home page. */
router.get('/', function(req, res, next) {
  let session = req.session.username;
  let err=req.session.errormsg
  if(session){
    res.redirect('/home');
  }else{
    res.render('index', { title: 'Sign In',err});
  }
});



// log in session

router.post('/login', (req, res) => {
  console.log(req.body);
  userDetails.doLogin(req.body).then((response)=>{
    if(response.status){
      req.session.username = response.username;
      res.redirect("home");
    }else{
      req.session.errormsg="Incorrect User or Password";
      res.redirect("/");
    }
  })
});

//  log out

router.get('/logout',(req,res) =>{
  req.session.destroy();
  res.redirect("/");
})

//  Home 

router.get("/home", function (req, res, next) {
  let session = req.session.username;
  if(session){
    userDetails.getAllUsers().then((users) => {
      res.render("home", { title: "Home",users});
    })
  }else{
    res.redirect('/');
  }
});



module.exports = router;
