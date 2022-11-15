require("dotenv").config();
const express = require('express');
// const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const { urlencoded } = require('body-parser');
// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ServerApiVersion } = require('mongodb');
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const app = express();
const { ObjectId } = require('mongodb');

//setting view engine
app.set("view engine", "ejs")

// dotenv.config({ path: 'config.env' });

app.use(bodyParser.urlencoded({ extended: true }))

// dotenv.config({ path: 'config.env' });
//const PORT = process.env.PORT || 8080

console.log('here');
console.log(process.env.MONGO_URI);

app.get('/', async function (req, res) {


    // client.connect; 
    console.log('connected'); 

    res.render('index');
   })

const db = client.db('restaurants');
const restaurantsCollection = db.collection('restaurants');

    //parse requests to bp
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json());
    app.use(express.static('public'));



        // load assets
         app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
         app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

         app.get('/', (req, res) => {
             res.render('index');
         })

         app.get('/show_food', (req, res) => {
             res.render('show_food');
         })

         app.get('/questions', (req, res) => {
             res.render('questions');
         })

         app.get('/aboutus', (req, res) => {
             res.render('aboutus');
         })

MongoClient.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true
})
    .then(client => {
        console.log('connected to db');

        app.listen(process.env.PORT || 3000,
            () => console.log("server running"));

    })
    .catch(error => console.error(error));

    // app.listen(PORT, ()=>{console.log(`Server is running on http://localhost:${PORT}`)});


