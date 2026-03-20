document.addEventListener("DOMContentLoaded",()=>{

let player = document.getElementById("player")
let title = document.getElementById("title")
let bg = document.getElementById("bg")

/* ========= SISTEMA DE FONDOS ========= */

function changeBG(img){
bg.style.backgroundImage = "url('"+img+"')"
}

/* fondo inicial LOGIN */
changeBG("https://i.postimg.cc/MpKDtbrF/wp13966102-shikamaru-pc-wallpapers.jpg")

/* ========= EVENTOS ========= */

title.addEventListener("click",()=>{
document.getElementById("about").classList.remove("hidden")

changeBG("https://i.postimg.cc/L8bzDdPB/wp13966112-shikamaru-pc-wallpapers.jpg")
})

window.enterSite = function(){

let u = document.getElementById("user").value
let p = document.getElementById("pass").value

if(u === "seiren" && p === "stark"){

document.getElementById("login").classList.add("hidden")
document.getElementById("hero").classList.remove("hidden")

changeBG("https://i.postimg.cc/zGVhVdQm/wp13966252-shikamaru-pc-wallpapers.jpg")

}else{

let box = document.querySelector(".loginBox")

box.classList.add("shake")

setTimeout(()=>{
box.classList.remove("shake")
},400)

}

}

window.closeAbout = function(){
document.getElementById("about").classList.add("hidden")

changeBG("assets/bg-hero.jpg")
}

window.toggleMusic = function(){
if(player.paused){
player.play()
}else{
player.pause()
}
}

/* ========= PARALLAX ========= */

document.addEventListener("mousemove",(e)=>{
let x = e.clientX/40
let y = e.clientY/40

bg.style.transform =
"scale(1.1) translate("+x+"px,"+y+"px)"
})

})
