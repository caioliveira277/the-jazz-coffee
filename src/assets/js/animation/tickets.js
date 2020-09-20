import gsap from "gsap";

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