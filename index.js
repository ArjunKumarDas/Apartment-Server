const express = require('express')
const app = express()
const port = 5000
//db-passs: xyx12345, user-name team09   dbname: apartmentHunt    collection: clientInfo 

app.get('/', (req, res) => {
  res.send('Apartment Hunt Server')
})


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://team09:xyx12345@cluster0.sppky.mongodb.net/apartmentHunt?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("apartmentHunt").collection("clientInfo");
  console.log('db contect');

});


app.listen(port)