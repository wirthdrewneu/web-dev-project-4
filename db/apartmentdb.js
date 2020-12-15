const { MongoClient, ObjectId } = require("mongodb");

function myDB() {
	const myDB = {};



	// const uri = process.env.MONGO_URL || "mongodb://localhost:27017";/*process.env.MONGO_URL || localhost:27017;*/
	 const uri = "mongodb+srv://Test1234:Test1234@cluster0.ggwfh.mongodb.net/apartments?retryWrites=true&w=majority";

	myDB.usepass = async (post) => {
		console.log("in delete function");
		console.log("Post_id", post.title);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("apartments");
		const aposts = db.collection("usepass");
		console.log("connected delete", post);
		var myquery = { username: post };
		console.log("jobpostquery", aposts.find(myquery));
		return await aposts.find(myquery);
	};


	myDB.getAPTdata = async () => {
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("apartments");
		const jpartment = db.collection("johnsapartment");
		const query = {};
		console.log(" Inside Job Calendar Query ", jpartment.find({}).toArray());
		return jpartment.find(query).toArray();
	};


	myDB.getaptandata = async () => {
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("apartments");
		const aptdata2 = db.collection("perslist");
		const query = {};
		console.log(" Inside Job Calendar Query ", aptdata2.find({}).toArray());
		return aptdata2.find(query).toArray();
	};


	myDB.createPL = async (post) => {
		console.log("created post:", post);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("apartments");
		const jobposts = db.collection("perslist");
		return await jobposts.insert(post);
	};

	myDB.followpost = async (post) => {
		console.log("Connected 1");
		const client = new MongoClient(uri);
		await client.connect();
		console.log("Connected 2");
		const db = client.db("apartments");
		const aposts = db.collection("perslist");
		console.log("Connected 3", post);

		return await aposts.insert(post);
	};

	myDB.delfollow = async (post) => {
		console.log("in delete function");
		console.log("Post_id", post.title);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("apartments");
		const aposts = db.collection("perslist");
		console.log("connected delete", post.title);
		var myquery = { title: post.title };
		console.log("jobpostquery", aposts.find(myquery));
		return await aposts.deleteOne(myquery);
	};


	myDB.updateNotes = async (post) => {
		console.log("Post_id", post);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("apartments");
		const aposts = db.collection("perslist");
		var myquery = { title: post.title };
		var newvalues = {
			$set: { title: post.title, notes: post.notes},
		};
		/*console.log("jobpostquery", jobposts.find(myquery));*/
		return await aposts.updateOne(myquery, newvalues);
	};


	return myDB;
}

module.exports = myDB();

