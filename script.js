const login = document.getElementById("login")

const hero = document.getElementById("hero")

const about = document.getElementById("about")

const fade = document.getElementById("fade")

const user = document.getElementById("user")

const pass = document.getElementById("pass")

const player = document.getElementById("player")

function enterSite(){

if(user.value==="seiren" && pass.value==="stark"){

fade.style.opacity="1"

setTimeout(()=>{

login.classList.add("hidden")

hero.classList.remove("hidden")

fade.style.opacity="0"

},500)

}else{

login.classList.add("shake")

setTimeout(()=>{

login.classList.remove("shake")

},400)

}

}

function openAbout(){

about.classList.remove("hidden")

}

function closeAbout(){

about.classList.add("hidden")

}

function toggleMusic(){

if(player.paused){

player.play()

}else{

player.pause()

}

}
