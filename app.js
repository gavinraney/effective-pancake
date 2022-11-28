const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient
const app = express();
const nodemailer = require("nodemailer")

dotenv.config({path:'config.env'});
//const PORT = process.env.PORT || 8080

//parse requests to bp
app.use(bodyParser.urlencoded({ extended:true }))


MongoClient.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true })
    .then(client =>{
    console.log("db connected");
    const db = client.db('wwe')
    const restCollections = db.collection('restaurants')

//setting view engine
app.set("view engine", "ejs");
app.use(bodyParser.json());

//load assets
 app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
 app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//app.use(express.static(path.join(__dirname, "assets")));

//app.use(express.static('assets'));

app.get('/', (req,res)=>{
    res.render('index');
})

app.post("/sendEmail/:url_piece", function(req,res){
    var from = "Eat.WWE.Good.Food.Now@gmail.com";
    var subject = "Eat";
    //var message = req.params.d_url;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'Eat.WWE.Good.Food.Now@gmail.com',
            pass: 'qfjmgsinalsvfdus'
        }
    });

    var mailOptions = {
        from: from,
        to: req.body.to,
        subject: subject,
        text: "https://www.google.com/maps/dir/Harrison+Plaza,+Florence,+AL+35630/" + req.params.url_piece + ",+University+Commons,+Florence,+AL/"
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error)
        } else {
            console.log("email sent: " + info.reponse)
        }
        res.redirect('/')
    })
})


app.get('/show_food/:meat', (req,res)=>{
    // res.render('show_food');
    console.log(req.params.meat);
    db.collection('restaurants').find({
        meat: req.params.meat
    }).toArray()
        .then(results => {
            res.render('show_food', {restaurants: results})
            console.log(results)
        }) 
        .catch(error => console.error(error))

})


app.get('/accept/:r_name', (req,res)=>{
    //res.render('accept');
    console.log(req.params.r_name);
    db.collection('restaurants').find({
        r_name: req.params.r_name
    }).toArray()
      .then(results => {
        res.render('accept', {restaurants: results})
        console.log(results)
      })
      .catch(error => console.error(error))

})

app.get('/aboutus', (req,res)=>{
    res.render('aboutus');
 })


app.listen(process.env.PORT || 5000, 
    () => console.log("server running"));

})
.catch(error => console.error(error))