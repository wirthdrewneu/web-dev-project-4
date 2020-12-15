const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const app = express();


const configurePassport = require("./auth/authconfig.js");
const passportRouter = require("./routes/authrouter.js");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "interapp/build")));



configurePassport(app);

app.use("/", indexRouter);

app.use("/", passportRouter);

 app.get("/*", function(req,res){
 	res.sendFile(path.join(__dirname,"interapp/build","index.html"));
 });


// app.use(express.static(path.join(__dirname, "./interapp/build")));
// app.get("*", (request, response) => {
// 	response.sendFile(path.join(__dirname, "./interapp/build/index.html"));
// }); 




module.exports = app;
