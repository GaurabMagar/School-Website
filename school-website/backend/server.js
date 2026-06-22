const multer = require("multer");

const path = require("path");
const storage = multer.diskStorage({

destination:(req,file,cb)=>{

cb(null,"uploads/");

},


filename:(req,file,cb)=>{


cb(null,Date.now()+path.extname(file.originalname));


}

});// Upload Gallery Image


app.post(
"/gallery",

upload.single("image"),

(req,res)=>{


const {

title,

category

}=req.body;



const image =
req.file.filename;



db.query(

"INSERT INTO gallery(title,image,category) VALUES(?,?,?)",


[

title,

image,

category

],


(err)=>{


if(err)

return res.send(err);



res.json({

message:"Image Uploaded"

});


}


);


});







// Get Gallery Images


app.get("/gallery",(req,res)=>{


db.query(

"SELECT * FROM gallery ORDER BY id DESC",


(err,result)=>{


if(err)

return res.send(err);



res.json(result);



});


});


const upload = multer({

storage:storage

});


app.use("/uploads",
express.static("uploads"));
const express = require("express");

const cors = require("cors");


const app = express();



app.use(cors());

app.use(express.json());



const db = require("./database");





app.get("/",(req,res)=>{


res.send("School Website API Running");


});






// Get Notices

app.get("/notices",(req,res)=>{


db.query(
"SELECT * FROM notices ORDER BY id DESC",

(result,error)=>{


if(error)

return res.send(error);


res.json(result);


});


});






// Add Notice

app.post("/notices",(req,res)=>{


const {

title,

description

}=req.body;



db.query(

"INSERT INTO notices(title,description) VALUES(?,?)",

[
title,
description
],


(err)=>{


if(err)

return res.send(err);



res.json({

message:"Notice Added"

});


}


);


});







app.listen(5000,()=>{
app.listen(
process.env.PORT || 5000,
()=>{

console.log(
"Server Running"
);

});

console.log(
"Server running on port 5000"
);
// Delete Notice


app.delete("/notices/:id",(req,res)=>{


const id=req.params.id;



db.query(

"DELETE FROM notices WHERE id=?",

[id],


(err)=>{


if(err)

return res.send(err);



res.json({

message:"Notice Deleted"

});


}


);


});

});
// Add Event


app.post("/events",(req,res)=>{


const {


title,

description,

event_date


}=req.body;




db.query(

"INSERT INTO events(title,description,event_date) VALUES(?,?,?)",


[

title,

description,

event_date

],


(err)=>{


if(err)

return res.send(err);



res.json({

message:"Event Added"

});


}


);


});






// Get Events


app.get("/events",(req,res)=>{


db.query(

"SELECT * FROM events ORDER BY event_date ASC",


(err,result)=>{


if(err)

return res.send(err);



res.json(result);



});


});






// Delete Event


app.delete("/events/:id",(req,res)=>{


db.query(

"DELETE FROM events WHERE id=?",

[req.params.id],


(err)=>{


if(err)

return res.send(err);



res.json({

message:"Event Deleted"

});


}


);


});
const authRoutes =
require("./routes/auth");


app.use(
"/auth",
authRoutes
);
const helmet=require("helmet");

const rateLimit=require("express-rate-limit");


app.use(helmet());


app.use(

rateLimit({

windowMs:15*60*1000,

max:100

})

);
const multer = require("multer");


const admissionStorage =
multer.diskStorage({

destination:(req,file,cb)=>{

cb(null,"uploads/documents/");

},


filename:(req,file,cb)=>{

cb(
null,
Date.now()+file.originalname
);

}


});


const admissionUpload =
multer({

storage:admissionStorage

});





// Submit Admission


app.post(

"/admissions",

admissionUpload.single("document"),

(req,res)=>{


const data=req.body;


const document =
req.file ?
req.file.filename :
null;



db.query(

`INSERT INTO admissions

(
student_name,
dob,
gender,
class_apply,
parent_name,
phone,
email,
address,
previous_school,
document
)

VALUES (?,?,?,?,?,?,?,?,?,?)`,

[

data.student_name,

data.dob,

data.gender,

data.class_apply,

data.parent_name,

data.phone,

data.email,

data.address,

data.previous_school,

document

],



(err)=>{


if(err)

return res.send(err);



res.json({

message:
"Admission Submitted"

});


}


);


});