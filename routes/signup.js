var express = require('express');
var router = express.Router();
var userDetails = require('../helpers/user-details')

/* GET home page. */
router.get('/', function(req, res, next) {
  let session = req.session.username;
  if(session){
  res.redirect('/home');
  }else{
    res.render('signup', { title: 'Sign Up' });
  }
});


router.post("/signup", (req, res) => {
  console.log(req.body);
  userDetails.addUser(req.body,(result)=>{
    console.log(result)
    res.redirect("/");
  })
});



module.exports = router;