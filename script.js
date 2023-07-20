var tl = gsap.timeline();

tl.from("#nav img, #nav-part2, #nav-part3", {
    y: -100,
    duration: 0.4,
    delay:0.3,
    stagger: 0.4,
    opacity: 0
})

tl.from("#landing-screen img", {
    x:-500,
    duration:0.8,
    stagger: 0.4,
    opacity: 0
})

tl.from("#landing-screen h1", {
    x:100,
    duration:0.6,
    stagger: 0.4,
    opacity: 0
})



tl.from("h5", {
    y:100,
    duration:0.8,
    stagger: 0.4,
    opacity: 0
})

tl.to("h5", {
    y:30,
    duration: 0.6,
    repeat: -1,
    yoyo: true
})