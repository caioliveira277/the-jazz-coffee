import { TimelineMax } from "gsap";
import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

const animationParams = {
  part1: {
    to: {
      x: "-=20",
      y: "+= 5",
    }
  },
  part2: {
    to: {
      x: "-=10",
      y: 0,
    }
  },
  part3: {
    to: {
      x: "+=5",
      y: "-=10",
    }
  },
  part4: {
    to: {
      x: "+=20",
      y: "-=20",
    }
  }
}

const controller = new ScrollMagic.Controller();
const tl = new TimelineMax();

tl.to("#start .part1", animationParams.part1.to)
tl.to("#start .part2", animationParams.part2.to)
tl.to("#start .part3", animationParams.part3.to)
tl.to("#start .part4", animationParams.part4.to)


const scene = new ScrollMagic.Scene({
  triggerHook: 'onLeave',
  triggerElement: "#start",
  duration: "50%",
  offset: 0
})
.setPin("#start")
.setTween(tl)
.addTo(controller);