const login=document.getElementById("login")

const hero=document.getElementById("hero")

const about=document.getElementById("about")

const fade=document.getElementById("fade")

const user=document.getElementById("user")

const pass=document.getElementById("pass")

const player=document.getElementById("player")

const bg=document.getElementById("bg")

/* BACKGROUNDS */

const backgrounds={

login:"https://i.postimg.cc/RhyhZnq2/fondo-1.png",

hero:"https://i.postimg.cc/s2dnZntC/fondo-2.png",

about:"https://i.postimg.cc/43L1Q4YH/fondo-3.png"

}

function changeBG(name){

fade.style.opacity="1"

setTimeout(()=>{

bg.style.backgroundImage=`url('${backgrounds[name]}')`

fade.style.opacity="0"

},350)

}

/* LOGIN */

function enterSite(){

if(user.value==="seiren" && pass.value==="admin"){

changeBG("hero")

login.style.opacity="0"

setTimeout(()=>{

login.classList.add("hidden")

hero.classList.remove("hidden")

},500)

}else{

login.classList.add("shake")

setTimeout(()=>{

login.classList.remove("shake")

},400)

}

}

/* ABOUT */

function openAbout(){

changeBG("about")

about.classList.remove("hidden")

}

function closeAbout(){

changeBG("hero")

about.classList.add("hidden")

}

/* MUSIC */

function toggleMusic(){

if(player.paused){

player.play()

}else{

player.pause()

}

}

/* INITIAL LOAD */

window.onload=()=>{

changeBG("login")

}
