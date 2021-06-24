const tl = gsap.timeline({defaults: {ease: 'power1.out'}});


// tl.to(".li-home", {opacity:"100%",y: "0%", duration:.2, stagger:0.25});
// tl.to(".li-proj", {opacity:"100%",y: "0%", duration:.2, stagger:0.25});
// tl.to(".li-contact", {opacity:"100%",y: "0%", duration:.2, stagger:0.25});
tl.to(".left-col, .hero-img", {opacity:"100%",y: "0%", duration:1, stagger:0.5});
tl.to(".logo,.li-home,.li-proj,.li-contact", {opacity:"100%",y: "0%", duration:.1, stagger:.1});



console.log('hello')