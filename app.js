require("dotenv").config();
const path = require('path');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const { ObjectId } = require('mongodb')
const PORT = (process.env.PORT || 5000);
// const herokuVar = process.env.HEROKU_NAME || "kingram"
const { MongoClient, ServerApiVersion } = require('mongodb');
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(bodyParser.json());
app.use(express.static('public'))

// let someVar = "";

async function cxnDB(){
    try{
      client.connect;
      const collection = client.db("wwe").collection("restaurants");
      const result = await collection.createIndex().toArray();
  
      console.log("cxnDB result:", result);
      return result;
  
    }
    catch(e){
      console.log(e)
    }
    finally{
      client.close;
    }
  }
  


  app.get('/', async (req, res) => {
  
    let restaurantData = await cxnDB().catch(console.error);
    console.log("/:", restaurantData); 
    res.render('index.ejs', {
       
       })
  })


        // load assets
        app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
        app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

         app.get('/', async (req, res) => {
             res.render('index');
         })

         app.get('/show_food', async (req, res) => {
             res.render('show_food');
         })

         app.get('/questions', async (req, res) => {
             res.render('questions');
         })

         app.get('/aboutus', async (req, res) => {
             res.render('aboutus');
         })

// MongoClient.connect(process.env.MONGO_URI, {
   // useUnifiedTopology: true
// })
   // .then(client => {
     //   console.log('connected to db');

     //   app.listen(process.env.PORT || 3000,
       //     () => console.log("server running"));

   // })
   // .catch(error => console.error(error));


    app.listen(process.env.PORT || 5000, function() {
        console.log(`Server is running & listening on port ${PORT}`); 
      
      });