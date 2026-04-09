const loginView = document.getElementById("loginView")
const menuView = document.getElementById("menuView")
const aboutView = document.getElementById("aboutView")
const postsView = document.getElementById("postsView")

const transition = document.getElementById("transition")
const bg = document.getElementById("bg")

const backgrounds = {
menu: "https://i.postimg.cc/RVZXrnZf/Gemini-Generated-Image-ftmryaftmryaftmr.png",
about: "https://i.postimg.cc/0jRb5MTj/fondo-1.png",
posts: "https://i.postimg.cc/N0rwbNzP/fondo-2.png"
}

bg.style.backgroundImage = `url(${backgrounds.menu})`

function animeTransition(callback){
transition.style.opacity = "1"

setTimeout(()=>{
callback()
transition.style.opacity = "0"
},700)
}

function login(){
let u = user.value
let p = pass.value

if(u === "seiren" && p === "admin"){

animeTransition(()=>{
loginView.classList.add("hidden")
menuView.classList.remove("hidden")
bg.style.backgroundImage = `url(${backgrounds.menu})`
})

}else{
document.querySelector(".loginCard").classList.add("shake")

setTimeout(()=>{
document.querySelector(".loginCard").classList.remove("shake")
},400)
}
}

function openAbout(){
animeTransition(()=>{
bg.style.backgroundImage = `url(${backgrounds.about})`
menuView.classList.add("hidden")
aboutView.classList.remove("hidden")
})
}

function openPosts(){
animeTransition(()=>{
bg.style.backgroundImage = `url(${backgrounds.posts})`
menuView.classList.add("hidden")
postsView.classList.remove("hidden")
})
}

function backMenu(){
animeTransition(()=>{
bg.style.backgroundImage = `url(${backgrounds.menu})`
aboutView.classList.add("hidden")
postsView.classList.add("hidden")
menuView.classList.remove("hidden")
})
}

/* PARALLAX */
document.addEventListener("mousemove",(e)=>{
let x = (e.clientX - window.innerWidth/2) / 90
let y = (e.clientY - window.innerHeight/2) / 90

bg.style.transform = `scale(1.1) translate(${-x}px, ${-y}px)`
})const loginView = document.getElementById("loginView")
const menuView = document.getElementById("menuView")
const aboutView = document.getElementById("aboutView")
const postsView = document.getElementById("postsView")

const transition = document.getElementById("transition")
const bg = document.getElementById("bg")

const backgrounds = {
menu: "https://i.postimg.cc/RVZXrnZf/Gemini-Generated-Image-ftmryaftmryaftmr.png",
about: "https://i.postimg.cc/0jRb5MTj/fondo-1.png",
posts: "https://i.postimg.cc/N0rwbNzP/fondo-2.png"
}

bg.style.backgroundImage = `url(${backgrounds.menu})`

function animeTransition(callback){
transition.style.opacity = "1"

setTimeout(()=>{
callback()
transition.style.opacity = "0"
},700)
}

function login(){
let u = user.value
let p = pass.value

if(u === "seiren" && p === "admin"){

animeTransition(()=>{
loginView.classList.add("hidden")
menuView.classList.remove("hidden")
bg.style.backgroundImage = `url(${backgrounds.menu})`
})

}else{
document.querySelector(".loginCard").classList.add("shake")

setTimeout(()=>{
document.querySelector(".loginCard").classList.remove("shake")
},400)
}
}

function openAbout(){
animeTransition(()=>{
bg.style.backgroundImage = `url(${backgrounds.about})`
menuView.classList.add("hidden")
aboutView.classList.remove("hidden")
})
}

function openPosts(){
animeTransition(()=>{
bg.style.backgroundImage = `url(${backgrounds.posts})`
menuView.classList.add("hidden")
postsView.classList.remove("hidden")
})
}

function backMenu(){
animeTransition(()=>{
bg.style.backgroundImage = `url(${backgrounds.menu})`
aboutView.classList.add("hidden")
postsView.classList.add("hidden")
menuView.classList.remove("hidden")
})
}

/* PARALLAX */
document.addEventListener("mousemove",(e)=>{
let x = (e.clientX - window.innerWidth/2) / 90
let y = (e.clientY - window.innerHeight/2) / 90

bg.style.transform = `scale(1.1) translate(${-x}px, ${-y}px)`
})
