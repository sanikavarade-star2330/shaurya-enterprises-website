/* FIREWORK OPENING ANIMATION (HOME PAGE) */

const canvas = document.getElementById("fireworks");

if(canvas){

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(){

let x = Math.random()*canvas.width;
let y = Math.random()*canvas.height/2;

for(let i=0;i<80;i++){

particles.push({
x:x,
y:y,
angle:Math.random()*Math.PI*2,
speed:Math.random()*5+2,
radius:2
});

}

}

function animate(){

ctx.fillStyle="rgba(0,0,0,0.2)";
ctx.fillRect(0,0,canvas.width,canvas.height);

particles.forEach((p)=>{

p.x += Math.cos(p.angle)*p.speed;
p.y += Math.sin(p.angle)*p.speed;

ctx.beginPath();
ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
ctx.fillStyle="gold";
ctx.fill();

});

requestAnimationFrame(animate);

}

setInterval(createFirework,800);
animate();

/* SHOW WEBSITE AFTER FIREWORK */

setTimeout(()=>{

canvas.style.display="none";

const main = document.getElementById("mainContent");

if(main){
main.style.display="block";
}

},4000);

}


/* GALLERY IMAGE POPUP */

function openImg(src){

const lightbox = document.getElementById("lightbox");
const img = document.getElementById("lightbox-img");

if(lightbox && img){

lightbox.style.display="flex";
img.src = src;

}

}

function closeImg(){

const lightbox = document.getElementById("lightbox");

if(lightbox){
lightbox.style.display="none";
}

}


/* CONTACT FORM MESSAGE */

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been sent. We will contact you soon.");

form.reset();

});

}


/* SMOOTH SCROLL EFFECT */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});

});

});