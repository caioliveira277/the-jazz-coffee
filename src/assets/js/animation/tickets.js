import gsap from "gsap";
import ScrollMagic from "scrollmagic";

const tickets = document.querySelectorAll(".ticket-preview .ticket");
const animationParms = {
  green: {
    from: {
      x: 0,
    },
    to: {
      zIndex: "+=1",
      opacity: 1,
      x: 0,
    }
  },
  red: {
    from: {
      x: 0,
      opacity: 0,
    },
    to: {
      zIndex: "+=1",
      opacity: 1,
      x: 0,
    }
  },
  classic: {
    from: {
      x: 0,
      opacity: 0,
    },
    to: {
      zIndex: "+=1",
      x: 0,
      opacity: 1,
    }
  }
}

for (const ticket of tickets) {
  ticket.addEventListener("click", ({target}) => {
    if(target.classList.contains("active")) return;
    tickets.forEach(element => {
      element.classList.remove("active");
      const targetRemoveIndex = element.getAttribute("data-target");
      const elementRemove = document.querySelector(`img.${targetRemoveIndex}`);
      elementRemove.style.zIndex = 0;
      elementRemove.style.opacity = 0;
    });
    target.classList.add("active");

    const targetElement = target.getAttribute("data-target");
    gsap.fromTo(`img.${targetElement}`, animationParms[targetElement].from, animationParms[targetElement].to)
  })
}

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerHook: 'onLeave',
  triggerElement: "#tickets",
  duration: 1,
  offset: 0
})
.setPin("#tickets")
.addTo(controller);

scene.on("start", () => {
  document.querySelector(".nav-tickets").classList.add("active");
  document.querySelector(".nav-presentations").classList.remove("active");
});
scene.on("leave", (event) => {
  if(event.scrollDirection === "REVERSE") {
    document.querySelector(".nav-presentations").classList.add("active");
    document.querySelector(".nav-tickets").classList.remove("active");
  }
});