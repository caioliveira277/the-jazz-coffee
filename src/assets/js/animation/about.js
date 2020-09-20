import gsap from "gsap";
import ScrollMagic from "scrollmagic";

const button = document.querySelector("#about .controls");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const value = event.target.getAttribute("data-value");

  if(value === "one"){
    gsap.to("#about .slides .one", {
      x: "5%",
      opacity:0
    });
    gsap.to("#about .slides .two", {
      x: 0,
      opacity:1
    });

    /* button */
    gsap.fromTo(event.target, {
      x: 0,
      opacity: 1
    }, {
      x: "10%",
      opacity: 0
    })
    gsap.fromTo(event.target, {
      x: "10%",
      rotate: 180,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    })
    event.target.setAttribute("data-value", "two")
  }else {
    gsap.to("#about .slides .one", {
      x: 0,
      opacity:1
    });
    gsap.to("#about .slides .two", {
      x: "5%",
      opacity:0
    });

    /* button */
    gsap.fromTo(event.target, {
      x: 0,
      opacity: 1
    }, {
      x: "10%",
      opacity: 0
    })
    gsap.fromTo(event.target, {
      x: "-10%",
      rotate: 0,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    })
    event.target.setAttribute("data-value", "one")
  }
})


const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerHook: 'onLeave',
  triggerElement: "#about",
  duration: 1,
  offset: 0
})
.setPin("#about")
.addTo(controller);

scene.on("start", () => {
  document.querySelector(".nav-about").classList.add("active");
  document.querySelector(".nav-tickets").classList.remove("active");
});
scene.on("leave", (event) => {
  if(event.scrollDirection === "REVERSE") {
    document.querySelector(".nav-tickets").classList.add("active");
    document.querySelector(".nav-about").classList.remove("active");
  }
});