const burger = document.querySelector(".burger");
const navi = document.querySelector(".navi");

burger.addEventListener("click", () => {
  navi.classList.toggle("navi-activ");
});

navi.addEventListener("click", () => {
  navi.classList.toggle("navi-activ");
});

var controller = new ScrollMagic.Controller();

var btween = new TweenMax.to(".image-b", 2, {
  y: -100,
});

var containerScene = new ScrollMagic.Scene({
  offset: 500,
  duration: 400,
})
  .setTween(btween)
  .addTo(controller);

var otween = new TweenMax.to(".image-o", 1.5, {
  y: 300,
});

var containerScene = new ScrollMagic.Scene({
  offset: 180,
  duration: 800,
})
  .setTween(otween)
  .addTo(controller);

var mtween = new TweenMax.to(".image-m", 3, {
  y: 500,
});

var containerScene = new ScrollMagic.Scene({
  offset: 50,
  duration: 800,
})
  .setTween(mtween)
  .addTo(controller);

const track = document.querySelector(".carousel-slide");
const slides = Array.from(track.children);
const nextbutton = document.querySelector(".carousel-right");
const prevbutton = document.querySelector(".carousel-left");

const slideswidth = slides[0].getBoundingClientRect().width;

const setslideposition = (slide, index) => {
  slide.style.left = slideswidth * index + "px";
};
slides.forEach(setslideposition);

nextbutton.addEventListener("click", (e) => {
  const currentslide = track.querySelector(".current-slide");
  const nextslide = currentslide.nextElementSibling;
  const amountomove = nextslide.style.left;

  track.style.transform = "translateX(-" + amountomove + ")";
  currentslide.classList.remove("current-slide");
  nextslide.classList.add("current-slide");
});

prevbutton.addEventListener("click", (e) => {
  const currentslide = track.querySelector(".current-slide");
  const prevslide = currentslide.previousElementSibling;
  const amountomove = prevslide.style.left;

  track.style.transform = "translateX(-" + amountomove + ")";
  currentslide.classList.remove("current-slide");
  prevslide.classList.add("current-slide");
});

const track2 = document.querySelector(".carousel-slide2");
const slides2 = Array.from(track2.children);
const nextbutton2 = document.querySelector(".carousel-right2");
const prevbutton2 = document.querySelector(".carousel-left2");

const slideswidth2 = slides[0].getBoundingClientRect().width;

const setslideposition2 = (slide2, index) => {
  slide2.style.left = slideswidth2 * index + "px";
};
slides2.forEach(setslideposition);

nextbutton2.addEventListener("click", (e) => {
  const currentslide2 = track2.querySelector(".current-slide2");
  const nextslide2 = currentslide2.nextElementSibling;
  const amountomove2 = nextslide2.style.left;

  track2.style.transform = "translateX(-" + amountomove2 + ")";
  currentslide2.classList.remove("current-slide2");
  nextslide2.classList.add("current-slide2");
});

prevbutton2.addEventListener("click", (e) => {
  const currentslide2 = track2.querySelector(".current-slide2");
  const prevslide2 = currentslide2.previousElementSibling;
  const amountomove2 = prevslide2.style.left;

  track2.style.transform = "translateX(-" + amountomove2 + ")";
  currentslide2.classList.remove("current-slide2");
  prevslide2.classList.add("current-slide2");
});

const track3 = document.querySelector(".carousel-slide3");
const slides3 = Array.from(track3.children);
const nextbutton3 = document.querySelector(".carousel-right3");
const prevbutton3 = document.querySelector(".carousel-left3");

const slideswidth3 = slides[0].getBoundingClientRect().width;

const setslideposition3 = (slide3, index) => {
  slide3.style.left = slideswidth3 * index + "px";
};
slides3.forEach(setslideposition);

nextbutton3.addEventListener("click", (e) => {
  const currentslide3 = track3.querySelector(".current-slide3");
  const nextslide3 = currentslide3.nextElementSibling;
  const amountomove3 = nextslide3.style.left;

  track3.style.transform = "translateX(-" + amountomove3 + ")";
  currentslide3.classList.remove("current-slide3");
  nextslide3.classList.add("current-slide3");
});

prevbutton3.addEventListener("click", (e) => {
  const currentslide3 = track3.querySelector(".current-slide3");
  const prevslide3 = currentslide3.previousElementSibling;
  const amountomove3 = prevslide3.style.left;

  track3.style.transform = "translateX(-" + amountomove3 + ")";
  currentslide3.classList.remove("current-slide3");
  prevslide3.classList.add("current-slide3");
});
