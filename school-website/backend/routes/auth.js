const express = require("express");

const router = express.Router();

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");


const db = require("../database");



const SECRET = "school_secret_key";




// Admin Login


router.post("/login",(req,res)=>{


const {

email,

password

}=req.body;




db.query(

"SELECT * FROM admin_users WHERE email=?",

[email],


async(err,result)=>{


if(err)

return res.send(err);



if(result.length === 0){

return res.status(401).json({

message:"Admin not found"

});


}




const admin=result[0];



const validPassword =

await bcrypt.compare(

password,

admin.password

);





if(!validPassword){


return res.status(401).json({

message:"Invalid password"

});


}





const token = jwt.sign(

{

id:admin.id,

email:admin.email

},


SECRET,


{

expiresIn:"2h"

}


);





res.json({

message:"Login Successful",

token

});



}


);



});



module.exports = router;