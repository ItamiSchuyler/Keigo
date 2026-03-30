const loginView=document.getElementById("loginView")
const menuView=document.getElementById("menuView")
const aboutView=document.getElementById("aboutView")
const postsView=document.getElementById("postsView")

const transition=document.getElementById("transition")

const bg=document.getElementById("bg")

function animeTransition(callback){

transition.style.opacity="1"

setTimeout(()=>{

callback()

transition.style.opacity="0"

},900)

}

function login(){

let u=document.getElementById("user").value
let p=document.getElementById("pass").value

if(u==="seiren" && p==="admin"){

animeTransition(()=>{

loginView.classList.add("hidden")

menuView.classList.remove("hidden")

bg.style.backgroundImage=
"url(https://i.postimg.cc/RVZXrnZf/Gemini-Generated-Image-ftmryaftmryaftmr.png)"

})

}else{

document.querySelector(".loginCard").classList.add("shake")

setTimeout(()=>{

document.querySelector(".loginCard")
.classList.remove("shake")

},400)

}

}

function openAbout(){

animeTransition(()=>{

menuView.classList.add("hidden")

aboutView.classList.remove("hidden")

})

}

function openPosts(){

animeTransition(()=>{

menuView.classList.add("hidden")

postsView.classList.remove("hidden")

})

}

function backMenu(){

animeTransition(()=>{

aboutView.classList.add("hidden")

postsView.classList.add("hidden")

menuView.classList.remove("hidden")

})

}

const backgrounds={

menu:"https://i.postimg.cc/RVZXrnZf/Gemini-Generated-Image-ftmryaftmryaftmr.png",

about:"https://i.postimg.cc/0jRb5MTj/fondo-1.png",

posts:"https://i.postimg.cc/N0rwbNzP/fondo-2.png"

}


/* PARALLAX */

document.addEventListener("mousemove",(e)=>{

let x=(e.clientX-window.innerWidth/2)/80
let y=(e.clientY-window.innerHeight/2)/80

bg.style.transform=
`scale(1.1) translate(${-x}px,${-y}px)`

})
