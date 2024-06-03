anime({
  targets: "[alt=\"Man\"]",
  translateX: 90,
  loop: true,
  direction: "alternate",
  easing: "easeInOutSine"
});

const Style = document.createElement("style");
document.body.appendChild(Style);

anime({
  targets: ".WithHorse",
  translateX: (innerWidth - (document.querySelector(".WithHorse > img").getBoundingClientRect().width)),
  loop: true,
  direction: "alternate",
  easing: "easeInOutSine",
  duration: 2500
});

let hertaKuru = false;

setInterval(() => {
  let tiger = document.querySelector(".WithHorse");
  let Shtativi = (innerWidth - (document.querySelector(".WithHorse > img").getBoundingClientRect().width));

  if (!hertaKuru) {
    hertaKuru = true;
  } else {
    hertaKuru = false;
  }
}, 2500);

console.log(((document.querySelector(".WithHorse").getBoundingClientRect().width)));

const Slides = document.querySelector(".Slides").querySelectorAll("section");

const apply = (el, args = {}) => {
  for (let arg in args) {
    el.style[arg] = args[arg];
  }
}

let x = 0;
let y = "2.5rem";
let z = 0;
for (const slide of Slides) {
  apply(slide, {
    padding: y,
    width: `calc(100vw - ${y} * 2)`,
    height: `calc(100vh - ${y} * 2)`,
    position: "fixed",
    top: 0,
    left: 0
  });

  if (z) {
    slide.style.opacity = 0;
    slide.style.pointerEvents = "none";
  }

  z = true;
}

window.addEventListener("keydown", (Ev) => {
  if (Ev.key == "ArrowRight" && x < (Slides.length - 1)) {
    apply(Slides[x], {
      opacity: 0,
      pointerEvents: "none"
    });

    x++;
    console.log(x);

    apply(Slides[x], {
      opacity: 1,
      pointerEvents: "all"
    });
  } else if (Ev.key == "ArrowLeft" && x > 0) {
    apply(Slides[x], {
      opacity: 0,
      pointerEvents: "none"
    });

    x--;

    apply(Slides[x], {
      opacity: 1,
      pointerEvents: "all"
    });
  }
});
