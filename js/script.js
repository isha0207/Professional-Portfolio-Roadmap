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
