var passport = require("passport");
const Strategy = require("passport-local").Strategy;
// const db = require("./db");
const myDB = require("../db/apartmentdb.js");

module.exports = function configurePassport(app) {
  console.log("configuring passport");

  function findByUsername(username) {
      if (!username){
        return null;
      }

      return myDB.usepass(username);
    /*return username === "Test"
      ? { username: "Test", password: "Test" }
      : null;*/
  }

  passport.use(
    new Strategy(async function (username, password, cb) {
      console.log("Authenticating", username, password);

      try {
        
        const user = await findByUsername(username);
        // Didn't find the user
        if (!user) {
          console.log("User not found");
          return cb(null, false);
        }
        if (user.password !== password) {
          console.log("Wrong password");
          return cb(null, false);
        }

        console.log("User athenticated");
        return cb(null, user);
      } catch (err) {
        console.log("Error auth", err);
        return cb(err, null);
      }
    })
  );


  passport.serializeUser(function (user, cb) {
    cb(null, user.username);
  });

  passport.deserializeUser(async function (username, cb) {
    try {
      const user = await findByUsername(username);
      cb(null, user);
    } catch (err) {
      cb(err);
    }
  });

  app.use(require("body-parser").urlencoded({ extended: true }));
  app.use(
    require("express-session")({
      secret: "yeah I'm original",
      resave: false,
      saveUninitialized: false,
    })
  );


  app.use(passport.initialize());
  app.use(passport.session());
};