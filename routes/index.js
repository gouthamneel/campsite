var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

// Root ROUTE 
router.get("/", function(req, res){
    res.render("landing");
});

// show register form
router.get("/register", function(req, res){
   res.render("register", {page: 'register'}); 
});


// // show register form
//  router.get("/register", function(req, res){
//   res.render("register");
//  })

//handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register", {error: err.message});
        }
        passport.authenticate("local")(req, res, function(){
           req.flash("success", "Successfully Signed Up! Nice to meet you " + req.body.username);
           res.redirect("/campgrounds"); 
        });
    });
});

// router.post("/register", function(req, res){
//  var newUser = new User({username: req.body.username});
//  User.register(newUser, req.body.password, function(err, user){
//   if(err){
//    req.flash("error", err.message);
//    return res.render("register");
//   }
  
//   passport.authenticate("local")(req, res, function(){
//    req.flash("success", "Congratulations, you have successfully Signed Up, Welcome to YelpCamp " + user.username);
//    res.redirect("/campgrounds");
//   });
//  });
// });



//show login form
router.get("/login", function(req, res){
   res.render("login", {page: 'login'}); 
});

// // show login form
// router.get("/login", function(req, res){
//  res.render("login");
// });

//handling login logic
router.post("/login", passport.authenticate ("local", 
 {
  successRedirect: "/campgrounds",
  failureRedirect: "/login"
 }), function(req, res){
   });
   
// Logout Logic
router.get("/logout", function(req, res){
 req.logout();
 req.flash("success", "You are logged out now!!")
 res.redirect("/login");
});

module.exports = router;