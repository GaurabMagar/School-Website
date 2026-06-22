
function addEvent(){



let title =
document.getElementById("eventTitle").value;


let description =
document.getElementById("eventDescription").value;



let event_date =
document.getElementById("eventDate").value;





fetch(

"http://localhost:5000/events",

{


method:"POST",


headers:{


"Content-Type":"application/json"


},


body:JSON.stringify({

title,

description,

event_date

})


}



)


.then(res=>res.json())


.then(()=>{


alert("Event Added");


loadEvents();


});


}








function loadEvents(){


let box =
document.getElementById("eventList");



if(!box)

return;



fetch(
"http://localhost:5000/events"
)



.then(res=>res.json())


.then(data=>{


box.innerHTML="";



data.forEach(event=>{


box.innerHTML += `


<div class="notice-item">


<h3>

${event.title}

</h3>


<p>

${event.description}

</p>


<p>

${event.event_date}

</p>



</div>


`;


});



});


}




loadEvents();
const loginForm =
document.querySelector("form");



if(loginForm){


loginForm.addEventListener(
"submit",
(e)=>{


e.preventDefault();



let email =
loginForm.querySelector(
"input[type='email']"
).value;



let password =
loginForm.querySelector(
"input[type='password']"
).value;





fetch(
"http://localhost:5000/auth/login",
{


method:"POST",


headers:{


"Content-Type":"application/json"


},


body:JSON.stringify({

email,

password

})


}


)



.then(res=>res.json())


.then(data=>{


if(data.token){


localStorage.setItem(

"adminToken",

data.token

);



window.location.href=
"dashboard.html";


}

else{


alert(data.message);


}



});


});


}