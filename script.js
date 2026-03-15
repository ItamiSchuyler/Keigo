let player=document.getElementById("player")

let title=document.getElementById("title")

title.addEventListener("click",()=>{

document.getElementById("about").classList.remove("hidden")

})

function enterSite(){

document.getElementById("login").classList.add("hidden")

document.getElementById("hero").classList.remove("hidden")

}

function closeAbout(){

document.getElementById("about").classList.add("hidden")

}

function toggleMusic(){

if(player.paused){

player.play()

}else{

player.pause()

}

}

/* PARALLAX */

document.addEventListener("mousemove",(e)=>{

let x=e.clientX/40

let y=e.clientY/40

document.querySelector(".background").style.transform=

"scale(1.1) translate("+x+"px,"+y+"px)"

})
