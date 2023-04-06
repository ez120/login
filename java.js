let closeSpan =document.querySelector(".span-close");
let clicks =document.querySelector(".click");
let icons =document.querySelector(".icons");
let navs =document.querySelector(".navs");
let wra =document.querySelector(".wra");
let reg =document.querySelector(".reg");
let log =document.querySelector(".log");
let register =document.querySelector(".register");
let login =document.querySelector(".login");

icons.onclick =()=>{
navs.classList.toggle("live");
}
// icons.addEventListener("click",()=>{
// navs.style.cssText ="transform: scale(1);"
// })
clicks.addEventListener("click",()=>{
wra.style.cssText ="transform: scale(1);"
})
closeSpan.addEventListener("click",()=>{
wra.style.cssText ="transform: scale(0);"
})
reg.addEventListener("click",()=>{
register.style.cssText ="transform: translateX(0px);"
login.style.cssText ="transform: translateX(-400px);"
})
log.addEventListener("click",()=>{
register.style.cssText ="transform: translateX(400px);"
login.style.cssText ="transform: translateX(0px);"
})