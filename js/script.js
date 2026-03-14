console.log("Day 1 Task Loaded");
document.addEventListener("DOMContentLoaded", function(){

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function(){

navMenu.classList.toggle("nav-active");
menuToggle.classList.toggle("active");

const expanded =
menuToggle.getAttribute("aria-expanded") === "true" || false;

menuToggle.setAttribute("aria-expanded", !expanded);

});


// Auto close menu when link clicked

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(link => {

link.addEventListener("click", () => {

navMenu.classList.remove("nav-active");
menuToggle.classList.remove("active");

menuToggle.setAttribute("aria-expanded", "false");

});

});

});

document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let valid = true;

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

validateField(name);
validateEmail(email);
validateField(message);

function validateField(field){

const group = field.parentElement;

if(field.value.trim() === ""){
group.classList.add("is-invalid");
valid = false;
}else{
group.classList.remove("is-invalid");
}

}

function validateEmail(field){

const group = field.parentElement;

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!regex.test(field.value)){
group.classList.add("is-invalid");
valid = false;
}else{
group.classList.remove("is-invalid");
}

}

if(valid){
alert("Message Sent Successfully!");
form.reset();
}

});

});
