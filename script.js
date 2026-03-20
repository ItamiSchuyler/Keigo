document.addEventListener("DOMContentLoaded",()=>{

let player = document.getElementById("player")
let title = document.getElementById("title")
let bg = document.getElementById("bg")
let fade = document.getElementById("fade")
let glitch = document.getElementById("glitch")
let character = document.querySelector(".character")

/* ========= TRANSICION ANIME ========= */

function animeTransition(img){

fade.style.transition = "opacity .25s"
fade.style.opacity = "1"

setTimeout(()=>{

bg.style.backgroundImage = "url('"+img+"')"

fade.style.transition = "opacity .7s"
fade.style.opacity = "0"

},250)

}

/* fondo inicial LOGIN */

bg.style.backgroundImage =
"url('https://i.postimg.cc/MpKDtbrF/wp13966102-shikamaru-pc-wallpapers.jpg')"

/* ========= EVENTOS ========= */

title.addEventListener("click",()=>{
document.getElementById("about").classList.remove("hidden")

animeTransition(
"https://i.postimg.cc/L8bzDdPB/wp13966112-shikamaru-pc-wallpapers.jpg"
)
})

window.enterSite = function(){

let u = document.getElementById("user").value
let p = document.getElementById("pass").value

if(u === "seiren" && p === "stark"){

/* GLITCH */

glitch.style.opacity = "1"

setTimeout(()=>{
glitch.style.opacity = "0"
},180)

/* CAMBIO PANTALLA */

document.getElementById("login").classList.add("hidden")
document.getElementById("hero").classList.remove("hidden")

animeTransition(
"https://i.postimg.cc/zGVhVdQm/wp13966252-shikamaru-pc-wallpapers.jpg"
)

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

animeTransition(
"https://i.postimg.cc/zGVhVdQm/wp13966252-shikamaru-pc-wallpapers.jpg"
)

}

window.toggleMusic = function(){
if(player.paused){
player.play()
}else{
player.pause()
}
}

/* ========= PARALLAX + GLOW DINAMICO ========= */

document.addEventListener("mousemove",(e)=>{

let x = e.clientX / window.innerWidth
let y = e.clientY / window.innerHeight

/* PARALLAX FONDO */

let moveX = (x - 0.5) * 25
let moveY = (y - 0.5) * 25

bg.style.transform =
"scale(1.12) translate("+moveX+"px,"+moveY+"px)"

/* GLOW PERSONAJE */

if(character){

let glowX = (x - 0.5) * 60
let glowY = (y - 0.5) * 60

character.style.filter = `
drop-shadow(${glowX}px ${glowY}px 40px var(--neonStrong))
drop-shadow(0 0 25px var(--neonSoft))
`

}

})

})
