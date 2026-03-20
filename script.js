document.addEventListener("DOMContentLoaded", () => {

const player = document.getElementById("player");

const title = document.getElementById("title");

const bg = document.getElementById("bg");

const fade = document.getElementById("fade");

const glitch = document.getElementById("glitch");

const character = document.querySelector(".character");


/* TRANSICION */

function animeTransition(img){

fade.style.opacity="1";

setTimeout(()=>{

bg.style.backgroundImage=`url(${img})`;

fade.style.opacity="0";

},200);

}


/* GLITCH */

function triggerGlitch(){

glitch.classList.add("glitchActive");

document.body.style.filter="contrast(1.4) brightness(1.2)";

setTimeout(()=>{

document.body.style.filter="none";

glitch.classList.remove("glitchActive");

},300);

}


/* fondo inicial */

bg.style.backgroundImage=
"url(https://i.postimg.cc/MpKDtbrF/wp13966102-shikamaru-pc-wallpapers.jpg)";


/* EVENTOS */

if(title){

title.addEventListener("click",()=>{

triggerGlitch();

setTimeout(()=>{

document
.getElementById("about")
.classList.remove("hidden");

animeTransition(
"https://i.postimg.cc/L8bzDdPB/wp13966112-shikamaru-pc-wallpapers.jpg"
);

},120);

});

}


/* LOGIN */

window.enterSite=function(){

const u=document.getElementById("user").value;

const p=document.getElementById("pass").value;


if(u==="seiren" && p==="stark"){

triggerGlitch();

setTimeout(()=>{

document
.getElementById("login")
.classList.add("hidden");

document
.getElementById("hero")
.classList.remove("hidden");

animeTransition(
"https://i.postimg.cc/zGVhVdQm/wp13966252-shikamaru-pc-wallpapers.jpg"
);

},150);

}

else{

const box=document.querySelector(".loginBox");

box.classList.add("shake");

setTimeout(()=>{

box.classList.remove("shake");

},400);

}

}


/* ABOUT */

window.closeAbout=function(){

triggerGlitch();

setTimeout(()=>{

document
.getElementById("about")
.classList.add("hidden");

animeTransition(
"https://i.postimg.cc/zGVhVdQm/wp13966252-shikamaru-pc-wallpapers.jpg"
);

},120);

}


/* MUSIC */

window.toggleMusic=function(){

if(player.paused){

player.play();

}else{

player.pause();

}

}


/* PARALLAX */

document.addEventListener("mousemove",(e)=>{

let x=e.clientX/window.innerWidth;

let y=e.clientY/window.innerHeight;

let moveX=(x-0.5)*25;

let moveY=(y-0.5)*25;

bg.style.transform=
`scale(1.12) translate(${moveX}px,${moveY}px)`;


if(character){

let glowX=(x-0.5)*60;

let glowY=(y-0.5)*60;

character.style.filter=
`drop-shadow(${glowX}px ${glowY}px 40px var(--neonStrong))
drop-shadow(0 0 25px var(--neonSoft))`;

}

});

});
