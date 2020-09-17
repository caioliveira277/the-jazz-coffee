import ScrollMagic from "scrollmagic";

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 100,
  offset: 50
})
.setPin("#start")
.addTo(controller)


controller.addScene([
  scene,
]).ad;