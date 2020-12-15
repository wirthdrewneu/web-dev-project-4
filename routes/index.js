var express = require("express");
var router = express.Router();

const myDB = require("../db/apartmentdb.js");

/* GET home page. */
router.get("/calendar", async (req, res, next) => {
	const apdata = await myDB.getAPTdata();
	console.log(next);
	res.json(apdata);
});


router.get("/plist", async (req, res, next) => {
	const apdata = await myDB.getaptandata();
	console.log(next);
	res.json(apdata);
});

router.get("/lpage", async (req, res, next) => {
	console.log("inside lpage exress route");
	const apdata = await myDB.getaptandata();
	console.log(next);
	res.json(apdata);
});




router.post("/createPL", async (req, res) => {
	const post = req.body;
	await myDB.createPL(post);

	res.send({message: "Event Created"});
});

router.post("/followpost", async (req, res) => {
	const post = req.body;
	await myDB.followpost(post);
	res.redirect("/");
	res.send({message: "Event Created"});
});



router.post("/delfollow", async (req, res) => {
	console.log("Inside Router");
	const post = req.body;
	await myDB.delfollow(post);
	res.redirect("/perslist");
	res.send({message: "Event Deleted"});
});


router.post("/updateNotes", async (req, res) => {
	const post = req.body;
	await myDB.updateNotes(post);
	res.redirect("/perslist");
	res.send({message: "Event Updated"});
});


module.exports = router;
