const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to(".left-col", {opacity:"100%",y: "0%", duration:1, stagger:0.25});
tl.to(".hero-img", {opacity:"100%", duration:.5, stagger:0.25});
console.log('hello')