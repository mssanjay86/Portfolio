// Jshint esversion:6

var toggleBtn = document.querySelector(".ham-burger");
var links = document.querySelector(".nav-links");
var btns=document.getElementsByClassName("btn");
var slide=document.querySelector(".sliders");
var btn1=document.querySelector(".btn1");
var btn2=document.querySelector(".btn2");
var btn3=document.querySelector(".btn3");
var btn4=document.querySelector(".btn4");
var btn5=document.querySelector(".btn5");
var btn6=document.querySelector(".btn6");

// toggle animation
toggleBtn.addEventListener("click", () => {
    links.classList.toggle("display-nav");
});

// carousel animation

btn1.addEventListener("click",()=>{
    slide.style.transform="translateX(0px)";
});
btn2.addEventListener("click",()=>{
    slide.style.transform="translateX(-100%)";
});
btn3.addEventListener("click",()=>{
    slide.style.transform="translateX(-200%)";
});
btn4.addEventListener("click",()=>{
    slide.style.transform="translateX(-300%)";
});
btn5.addEventListener("click",()=>{
    slide.style.transform="translateX(-400%)";
});
btn6.addEventListener("click",()=>{
    slide.style.transform="translateX(-500%)";
});



// nav-bar animation

links.addEventListener('click',(event)=>{
    let active=document.querySelector(".active");
    active.classList.remove("active");
    event.target.classList.add("active");

    

});