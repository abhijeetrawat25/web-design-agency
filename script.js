
 function loading(){
  
gsap.from("#heading h1", {
  y:100,
  opacity:0,
  delay:0.5,
  duration:0.9,
  satgger:0.2
})
gsap.from("#heading h2", {
  y:70,
  opacity:0,
  delay:0.8,
  duration:0.9,
  satgger:0.2
})
gsap.from("#heading #video-container", {
  y:100,
  opacity:0,
  delay:0.8,
  duration:1.2,
})
}
loading()


