function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});


locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },

  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
init();

function cursor(){
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const crsr = document.querySelector("#cursor");
const video = document.querySelector(".video");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  crsr.style.left = `${coords.x}px`;
  crsr.style.top = `${coords.y}px`;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    circle.style.scale = (circles.length - index) / circles.length;
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}
animateCircles();

video.addEventListener("mouseenter", function() {
  circles.forEach(circle => circle.style.display = "none");
  crsr.style.display="block";
  crsr.style.width = "100px";
  crsr.style.height = "100px";
});

video.addEventListener("mouseleave", function() {
  circles.forEach(circle => circle.style.display = "block");
   crsr.style.display="none"
});
}
cursor();

var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 20%",
        end:"top 0",
        scrub:3,
    }
})
tl.to(".page1 h1",{
    x:-175
},"anime")
tl.to(".page1 h2",{
    x:220
},"anime")
tl.to(".page1 video",{
    width:"100%"
},"anime")

var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top -60%",
        end:"top -130%",
        scrub:3,
    }
})

tl2.to(".main",{
    backgroundColor:"white",
})

var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top -180%",
        end:"top -130%",
        scrub:3,
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D",
})

var tl4=gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top -350%",
    end:"top -280%",
    scrub:3,
}
})
tl4.to(".main",{
  backgroundColor:"White",
},"b")
tl4.to(".top",{
  backgroundColor:"white",
  zIndex:9,
},"b")
tl4.to(".bottom",{
  backgroundColor:"white",
  zIndex:9,
},"b")
// moving text 

var tl5=gsap.timeline({
  scrollTrigger:{
    trigger:".page4",
    scroller:".main",
    // markers:true,
    start:"90% 50%",
    end:"100% -220%",
    scrub:3,
    pin:true,
  }
})

tl5.to(".top",{
  top:"-50%"
},"a")
tl5.to(".bottom",{
  bottom:"-80%"
},"a")
tl5.to(".top-text",{
  top:"150%"
},"a")
tl5.to(".bottom-text",{
  bottom:"10%"
},"a")

var tl6=gsap.timeline({
  scrollTrigger:{
    trigger:".page4",
    scroller:".main",
    // markers:true,
    start:"87% 50%",
    end:"250% 50%",
    scrub:3,
    pin:true,
  }
})
tl6.to(".center",{
  opacity:1,
})
tl6.to(".rotate-div",{
  rotate:-15,
  scale:0.8,
},"c")
tl6.to("#row-div-2",{
marginTop:"-10%"
},"c")
tl6.to("#row-div-3",{
  marginTop:"-8%"
},"c")
tl6.to("#row-div-4",{
  marginTop:"-12%"
},"c")
tl6.to("#row-div-5",{
  marginTop:"-10%"
},"c")
tl6.to(".overlay-div h1",{
  opacity:"1",
  delay:0.2,
},"c")
tl6.to(".overlay-div ",{
  backgroundColor:"#00000027"
},"c")
tl6.to(".main",{
  backgroundColor:"#0F0D0D",
},"a")

