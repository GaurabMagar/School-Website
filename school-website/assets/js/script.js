/* =========================
   Mobile Menu Toggle
========================= */


const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

}






/* =========================
   Current Year Footer
========================= */


const year = new Date().getFullYear();


const footerYear = document.querySelector(".year");


if(footerYear){

    footerYear.textContent = year;

}







/* =========================
   Contact Form Validation
========================= */


const form = document.querySelector("form");


if(form){


form.addEventListener("submit",(e)=>{


    e.preventDefault();


    let name = form.querySelector("input[type='text']").value;

    let email = form.querySelector("input[type='email']").value;


    if(name === "" || email === ""){


        alert("Please fill all required fields.");

    }

    else{


        alert("Thank you! Your message has been sent.");

        form.reset();


    }



});


}







/* =========================
   Notice Auto Highlight
========================= */


const notices = document.querySelectorAll(".notice-card");


notices.forEach((notice)=>{


notice.addEventListener("mouseenter",()=>{


    notice.style.transform="translateY(-5px)";


});



notice.addEventListener("mouseleave",()=>{


    notice.style.transform="translateY(0)";


});


});







/* =========================
   Image Gallery Preview
========================= */


const galleryImages = document.querySelectorAll(".gallery-grid img");


galleryImages.forEach((image)=>{


image.addEventListener("click",()=>{


    window.open(image.src,"_blank");

const API = "http://localhost:5000";




// Load Notices


function loadNotices(){


fetch(API+"/notices")


.then(res=>res.json())


.then(data=>{


let list =
document.getElementById("noticeList");


list.innerHTML="";



data.forEach(notice=>{


list.innerHTML += `

<div class="notice-item">


<h3>
${notice.title}
</h3>


<p>
${notice.description}
</p>


<button onclick="deleteNotice(${notice.id})">

Delete

</button>



</div>


`;


});


});


}






// Add Notice


function addNotice(){


let title =
document.getElementById("title").value;


let description =
document.getElementById("description").value;




fetch(API+"/notices",{


method:"POST",


headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

title,

description

})


})


.then(res=>res.json())


.then(()=>{


alert("Notice Added");


loadNotices();


});


}







// Delete Notice


function deleteNotice(id){


fetch(API+"/notices/"+id,{

method:"DELETE"

})


.then(()=>{


loadNotices();


});


}




loadNotices();
});


});
/* =========================
   Load Dynamic Notices
========================= */


const noticeContainer =
document.getElementById("publicNotices");



if(noticeContainer){


fetch("http://localhost:5000/notices")


.then(response=>response.json())


.then(data=>{


noticeContainer.innerHTML="";



data.forEach(notice=>{


noticeContainer.innerHTML += `


<div class="notice-card">


<h3>
${notice.title}
</h3>


<p>
${notice.description}
</p>


<span>

${new Date(notice.created_at)
.toDateString()}

</span>



</div>


`;



});



})


.catch(error=>{


console.log(
"Error loading notices:",
error
);


});


}
function uploadImage(){


let formData = new FormData();


formData.append(
"title",
document.getElementById("title").value
);


formData.append(
"category",
document.getElementById("category").value
);



formData.append(

"image",

document.getElementById("image").files[0]

);




fetch(

"http://localhost:5000/gallery",

{

method:"POST",

body:formData

}

)


.then(res=>res.json())


.then(()=>{


alert("Image Uploaded");


});


}
const galleryContainer =
document.getElementById("galleryContainer");



if(galleryContainer){


fetch("http://localhost:5000/gallery")


.then(res=>res.json())


.then(data=>{


galleryContainer.innerHTML="";



data.forEach(item=>{


galleryContainer.innerHTML += `


<img src="http://localhost:5000/uploads/${item.image}"

alt="${item.title}">


`;


});


});


}
/* Dynamic Events */


const eventContainer =
document.getElementById("eventContainer");



if(eventContainer){



fetch("http://localhost:5000/events")


.then(res=>res.json())


.then(data=>{


eventContainer.innerHTML="";



data.forEach(event=>{


eventContainer.innerHTML += `


<div class="event-card">


<h3>

${event.title}

</h3>



<p>

${event.description}

</p>



<p>

📅 ${event.event_date}

</p>



</div>


`;



});



});


}