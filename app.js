//first file that running when starting server

const express = require("express"); // import express 
const bodyParser = require('body-parser'); //import bodyParser

const app = express();

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

const appRoute = require('./src/routes/route-karyawan');
app.use('/', appRoute);

app.listen(8080, ()=>{
    console.log('server berjalan di port :8080');
});