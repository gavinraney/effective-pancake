const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080

//parse requests to bp
app.use(bodyparser.urlencoded({ extended:true }))

//setting view engine
app.set("view engine", "ejs")

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.get('/', (req,res)=>{
    res.render('index');
})

app.get('/show_food', (req,res)=>{
    res.render('show_food');
})

app.get('/questions', (req,res)=>{
    res.render('questions');
})

app.get('/aboutus', (req,res)=>{
    res.render('aboutus');
 })

// app.listen(PORT, ()=>{console.log(`Server is running on http://localhost:${PORT}`)});

app.listen(process.env.PORT || 3000, 
    () => console.log("server running"));
