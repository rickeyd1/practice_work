const MongoClient = require('mongodb').MongoClient;
const user = process.env['MONGO_USER'];
const password = process.env['MONGO_PASS'];
const uri = `mongodb+srv://${user}:<${password}>@project-start-vvn3j.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});