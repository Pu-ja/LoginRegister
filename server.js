var express=require("express");
var cors= require ("cors");
var bodyParser = require("body-parser");
var app=express()
const mongoose=require("mongoose");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
var port = process.env.PORT || 3000

app.use(cors())

// Configuring the database
const dbConfig = require('./config/database.config.js');
// const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(() => {
    console.log("Could not connect to the database");
    process.exit();
});
var Users=require('./routes/Users');
app.use('/users',Users)

app.listen(port,function(){
    console.log("Server is running on port:" +port);
})