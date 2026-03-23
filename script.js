const login = document.getElementById("login")

const hero = document.getElementById("hero")

const about = document.getElementById("about")

const fade = document.getElementById("fade")

const user = document.getElementById("user")

const pass = document.getElementById("pass")

const player = document.getElementById("player")

const bg = document.getElementById("bg")

/* BACKGROUNDS */

const backgrounds={

login:"https://i.postimg.cc/rpJ60qVQ/87a1d82fb5bc9d1e9baee8d72739b656.gif",

hero:"https://i.postimg.cc/L6y5Y6qK/1665.gif",

about:"https://i.postimg.cc/DZx8pKQm/tumblr-6baf.gif"

}

function changeBG(name){

fade.style.opacity="1"

setTimeout(()=>{

bg.style.backgroundImage=`url(${backgrounds[name]})`

fade.style.opacity="0"

},300)

}

/* LOGIN */

function enterSite(){

if(user.value==="admin" && pass.value==="admin"){

changeBG("hero")

login.classList.add("hidden")

setTimeout(()=>{

hero.classList.remove("hidden")

},300)

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

/* INITIAL BG */

changeBG("login")
