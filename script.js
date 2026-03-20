document.addEventListener("DOMContentLoaded",()=>{

let bg = document.getElementById("bg")
let glitch = document.getElementById("glitch")

let current = 0
let sections = document.querySelectorAll(".section")

function goToSection(i){
current = i

sections.forEach((sec,index)=>{
sec.style.transform = `translateY(${(index - i)*100}%)`
})
}

/* SCROLL */

window.addEventListener("wheel",(e)=>{
if(e.deltaY > 0 && current < sections.length-1){
goToSection(current+1)
}
else if(e.deltaY < 0 && current > 0){
goToSection(current-1)
}
})

/* GLITCH */

function triggerGlitch(){
glitch.classList.add("glitchActive")
setTimeout(()=>glitch.classList.remove("glitchActive"),300)
}

/* LOGIN */

window.enterSite = function(){

let u = user.value
let p = pass.value

if(u==="seiren" && p==="stark"){

triggerGlitch()

setTimeout(()=>{
login.classList.add("hidden")
main.classList.remove("hidden")
goToSection(0)
},200)

}else{
document.querySelector(".loginBox").classList.add("shake")
setTimeout(()=>{
document.querySelector(".loginBox").classList.remove("shake")
},400)
}
}

  document.querySelector(".scrollDown").addEventListener("click",()=>{
document.getElementById("posts").scrollIntoView({
behavior:"smooth"
})
})

/* ABOUT */

title.addEventListener("click",()=>{
about.classList.remove("hidden")
})

window.closeAbout = function(){
about.classList.add("hidden")
}

})
