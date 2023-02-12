const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3030;
mongoose.set('strictQuery', false);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(PORT,function(){
    console.log('chal gaya');
})

mongoose.connect('mongodb+srv://quote:priyanshi@cluster0.u5xyxic.mongodb.net/?retryWrites=true&w=majority').then(function(req, res){
    console.log('connect');
});


const Authroutes = require('./routes/auth');

app.use(Authroutes);




app.get("/shuru",function(req, res){
res.send("billa badmash aa gaya");
})




