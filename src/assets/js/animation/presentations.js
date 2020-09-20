import { TimelineMax } from "gsap";
import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

const animationParams = {
  one: {
    from: {
      x: 0,
      y: "-50%",
      zIndex: 1
    },
    to: {
      x: 0,
    }
  },
  two: {
    from: {
      x: "10%",
      y: "-50%",
      zIndex: 2,
      opacity: 0,
    },
    to: {
      delay: 1,
      x: 0,
      opacity: 1
    }
  },
  three: {
    from: {
      x: "20%",
      y: "-50%",
      zIndex: 3,
      opacity: 0,
    },
    to: {
      delay: 1,
      x: 0,
      opacity: 1
    }
  },
  four: {
    from: {
      x: "30%",
      y: "-50%",
      zIndex: 4,
      opacity: 0,
    },
    to: {
      delay: 1,
      x: 0,
      opacity: 1
    }
  },
  five: {
    from: {
      x: "40%",
      y: "-50%",
      zIndex: 5,
      opacity: 0,
    },
    to: {
      delay: 1,
      x: 0,
      opacity: 1
    }
  }
}

const controller = new ScrollMagic.Controller();
const tl = new TimelineMax();

tl.fromTo("#presentations .slides .one", animationParams.one.from, animationParams.one.to)
tl.fromTo("#presentations .slides .two", animationParams.two.from, animationParams.two.to)
tl.fromTo("#presentations .slides .three", animationParams.three.from, animationParams.three.to)
tl.fromTo("#presentations .slides .four", animationParams.four.from, animationParams.four.to)
tl.fromTo("#presentations .slides .five", animationParams.five.from, animationParams.five.to)


const scene = new ScrollMagic.Scene({
  triggerHook: 'onLeave',
  triggerElement: "#presentations",
  duration: "120%",
  offset: 0
})
.setPin("#presentations")
.setTween(tl)
.addTo(controller);

scene.on("start", () => {
  document.querySelector(".nav-presentations").classList.add("active");
  document.querySelector(".nav-start").classList.remove("active");
});
scene.on("leave", (event) => {
  if(event.scrollDirection === "REVERSE") {
    document.querySelector(".nav-start").classList.add("active");
    document.querySelector(".nav-presentations").classList.remove("active");
  }
});
