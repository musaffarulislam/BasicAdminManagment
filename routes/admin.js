const { response } = require('express');
var express = require('express');
var router = express.Router();
var userDetails = require('../helpers/user-details')
const {doSearch} = require('../helpers/user-details')

/* GET home page. */
router.get('/', function(req, res, next) {
  let session = req.session.adminname;
  if(session){
    res.redirect("/admin/adminpage");
  }else{
    res.render('admin', { title: 'Admin Sign In' });
  }
});


router.get('/admin-signout',(req,res) =>{
  req.session.destroy();
  res.redirect("/admin");
})



let admin = {
    username: "admin",
    password: 123456,
  };
  
  
  
//   log in session
  
  router.post("/admin", (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    if (username === admin.username && password == admin.password) {
      req.session.adminname = req.body.username;
      res.redirect("/admin/adminpage");
    } else {
      res.redirect("/admin");
    }
  });

  let tablehead =[
    {si:'#',userName: 'User Name',email: 'Email',phoneNumber:'Phone Number',age: 'age',password: 'Password', action:'Action'},
  ];


  router.get("/adminpage", function (req, res, next) {
    let session = req.session.adminname;
    if(session){
      userDetails.getAllUsers().then((users) => {
        console.log(users);
        res.render("adminpage", { title: "Admin Page",tablehead,users});
      })     
    }else{
      res.redirect('/admin');
    }
  })



  //   Search 

router.get("/search", async(req,res)=>{
  console.log(req.query.username)
  let users = await doSearch(req.query)
  res.render('adminpage',{title: "Admin Page",tablehead,users, massege:(users.length>0)?null:"No user found"}) 
})




//   Add User

  router.post("/adduser", (req, res) => {
    console.log(req.body);
    userDetails.addUser(req.body,(result)=>{
      console.log(result)
      res.redirect("/admin");
    })
  });




//  delete User details


  router.get('/delete-user/:id',(req,res)=>{
    let userId=req.params.id
    userDetails.deleteUser(userId).then((response)=>{
      res.redirect('/admin')
    })
  })



  //  editUser details

  router.get('/edit-user/:id',async(req,res)=>{
    let user= await userDetails.getUserDetails(req.params.id)
    console.log(user);
    res.render('edituser', { title: 'Edit User',user })
  })
 

  router.post('/edit-user/:id',(req,res)=>{
    console.log(req.params)
    userDetails.updateUser(req.params.id,req.body).then(()=>{
      res.redirect('/admin/adminpage')
    })
  })


  router.get('/back',(req,res)=>{
    res.redirect('/admin')
  })

  
//  Log Out

  router.get('/admin-signout',(req,res) =>{
    req.session.destroy();
    res.redirect("/admin");
  })
  
  
module.exports = router;