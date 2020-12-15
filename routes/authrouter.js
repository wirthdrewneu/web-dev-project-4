
var express = require("express");
var router = express.Router();
const passport = require("passport");

  
router.post("/login", 
  passport.authenticate("local", { 
    failureRedirect: "/login?msg ='Error auth'" }),
  function(req, res) {
    console.log("Logged in",req.body);
    res.redirect("/");
  });


router.get("/getUser", (req, res) =>
  res.send({ username: req.user ? req.user.username : null })
);

router.post('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

  module.exports = router;