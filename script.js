document.addEventListener("DOMContentLoaded",()=>{

let player = document.getElementById("player")
let title = document.getElementById("title")

title.addEventListener("click",()=>{
document.getElementById("about").classList.remove("hidden")
})

window.enterSite = function(){

let u = document.getElementById("user").value
let p = document.getElementById("pass").value

if(u === "keigo" && p === "stark"){

document.getElementById("login").classList.add("hidden")
document.getElementById("hero").classList.remove("hidden")

}else{

alert("Wrong credentials")

}

}

window.closeAbout = function(){
document.getElementById("about").classList.add("hidden")
}

window.toggleMusic = function(){
if(player.paused){
player.play()
}else{
player.pause()
}
}

document.addEventListener("mousemove",(e)=>{
let x=e.clientX/40
let y=e.clientY/40
document.querySelector(".background").style.transform =
"scale(1.1) translate("+x+"px,"+y+"px)"
})

})
