var express=require('express');
var bodyParser=require('body-parser');
var dbconfig=require('./config/database.config');
var mongoose=require('mongoose');
var cors = require('cors')
mongoose.connect(dbconfig.url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',()=>{
    console.log('Gets connected successfully to the database.');
});

var app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
require('./app/routes/emp.routes')(app);
// var r=require('./app/routes/emp.routes');
// app.use('/',r);

app.listen(3000);