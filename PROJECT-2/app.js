const fs= require("fs");
const express = require("express");
const path= require('path');
const app =express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
var cons = require('consolidate');
const { dirname } = require("path");
const router = new express.Router();
app.use(router);


let port =8000;




const url = "mongodb://localhost/contactdance";//this contactdance is database name 
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
    console.log("mongoose connection is successful");
}).catch((e)=>{
    console.log("mongoose connection error");
});
// const con = mongoose.connection;
// con.on("open",()=>{
//     console.log("database connected");
// });
//defining mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,     //defining schema as present in form
    phone:String,
    email:String,
    address:String,
    desc:String
}) ;

var Contact = mongoose.model('contact',contactSchema);//defining collection as form here the table which will be created will be named as contact(s).
//we can acess this "Contact" for use this Contact to use columns



//EXPRESS STUFF
//below three lines are for including static folder and there html files
const static_path = path.join(__dirname,"/static") //dirname consist of path of app.js
app.use(express.static(static_path));//to use static folder
// app.use(express.urlencoded());
router.use(express.json());//this is used for using jsom format to save on database it can be saved using postman
router.use(express.urlencoded({extended:false}));//this is used to save data saved from form
// app.use("/static",express.static('static'));this was first used by me but it does not including css file contact.css

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'static'));
app.set('view engine', 'html');



//END POINTS
app.get('/', (req ,res)=>{

    res.status(200).render("responsiveweb");

});
app.get('/Contact',(req,res)=>{
    res.status(200).render("contact");
});

// collecting from user
// app.post('/contact',(req,res)=>{
//     user = req.body.name      //second name is taken from name tag from form  
//     // age = req.body.age
//     // gender= req.body.gender
//     // contact = req.body.phone
//     // email =  req.body.email
//     address = req.body.address
//     // more = req.body.more
//     let outputwrite =`name of the client is ${user},residing at ${address}.`
// fs.writeFileSync('outputSS.txt',outputwrite)

//     const parms ={"message":"your form has been submitted successfully"};
//     res.status(200).render("contact",parms);
// });






// //collecting data into database mongodb
// app.post('/contact',(req ,res)=>{
//     var myData= new Contact(req.body);//all body elements like name address email from contact page are collected in contact collection of database and in mydata variable
//     myData.save().then(()=>{//we are able to write req.body due to body parser
//         res.send("this item is saved into the database")
//     }).catch(()=>{res.status(400).send("item was not send to database")
// });
// });

router.post('/contact',async(req,res)=>{
    try {
        const user = new Contact(req.body);
        const createuser = await user.save(); 
        res.status(201).send(req.body);
    } catch (error) {
        res.status(400).send("item not send");
    }
})



// res.status(200).render("contact");

//LISTENING TO SERVER

app.listen(port,()=>{
    console.log(`log application started sucessfuly on port ${port}`);
});