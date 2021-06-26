
const mobileBtn = document.getElementById("mobile-cta");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById("mobile-exit");
navList1 = document.getElementById("nav-list1");
navList2 = document.getElementById("nav-list2");
navList3 = document.getElementById("nav-list3");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
navList1.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
navList2.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
navList3.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});



const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
// tl.to(".li-home", {opacity:"100%",y: "0%", duration:.2, stagger:0.25});
// tl.to(".li-proj", {opacity:"100%",y: "0%", duration:.2, stagger:0.25});
// tl.to(".li-contact", {opacity:"100%",y: "0%", duration:.2, stagger:0.25});
tl.to(".left-col, .hero-img", {opacity:"100%",y: "0%", duration:1, stagger:0.5});
tl.to(".logo,.li-home,.li-proj,.li-contact", {opacity:"100%",y: "0%", duration:.1, stagger:.1});



console.log('hello')