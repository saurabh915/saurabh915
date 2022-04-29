const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
<<<<<<< HEAD
mongoose.connect('mongodb://localhost/saurabhkart', {useNewUrlParser: true});
const port = 8000;

=======
//mongoose.connect('mongodb://localhost/saurabhkart', {useNewUrlParser: true});
const port = 8000;
const url = "mongodb://127.0.0.1:27017/saurabhkart";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// mongoose.Promise = global.Promise;
const con = mongoose.connection;
con.on("open", () => {
  console.log("Database connected");
});
>>>>>>> 35861558bb864eca845b459385822cd4f5e58e87

//DEFINING MONGOOSE SCHEMA
var contactSchema = new mongoose.Schema({
    name: String,     //defining schema as present in form
    phone:String,
    email:String,
    address:String,
    desc:String
}) ;

var Contact = mongoose.model('Contact',contactSchema);//defining collection as Contacts here the table which will be created will be named as contacts

 

// EXPRESS STUFF
app.use("/static",express.static('static'));//for serveying static files
app.use(express.urlencoded());//it is used for parsing post request
// PUG STUFF
app.set('views',path.join(__dirname,'views'));//set the views directory in which pug related stuff is present
app.set('view engine','pug');//set the tempplate engine as pug


// END POINTS
app.get('/', (req ,res)=>{

    res.status(200).render("home");
});
app.get('/contact', (req ,res)=>{

    res.status(200).render("contact");// here contact is contact.js file 
});

//collecting from user into output2.txt
app.post('/contact',(req,res)=>{
    user = req.body.name      //second name is taken from name tag from form  
    // age = req.body.age
    // gender= req.body.gender
    address = req.body.address
    // more = req.body.more
    let outputwrite =`name of the client is ${user},residing at ${address}.`
fs.writeFileSync('outputSS.txt',outputwrite)

    const parms ={"message":"your form has been submitted successfully"};
    res.status(200).render("contact",parms);
})

//collecting data into database mongodb
app.post('/contact',(req ,res)=>{
    var myData= new Contact(req.body);//all body elements like name address email from contact page are collected in contact collection of database and in mydata variable
    myData.save().then(()=>{
        res.send("this item is saved into the database")
    })
res.status(400).send("item was not send to database")

});

 //res.status(200).render("contact");


//LISTENING TO SERVER

app.listen(port,()=>{
    console.log(`log application started sucessfuly on port ${port}`);
});
