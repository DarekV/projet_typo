var controller = new ScrollMagic.Controller();

var btween = new TweenMax.to(".image-b", 2, {
  y: -100,
});

var containerScene = new ScrollMagic.Scene({
  offset: 500,
  duration: 400,
})
  .setTween(btween)
  .addIndicators()
  .addTo(controller);

var otween = new TweenMax.to(".image-o", 1.5, {
  y: 300,
});

var containerScene = new ScrollMagic.Scene({
  offset: 180,
  duration: 800,
})
  .setTween(otween)
  .addIndicators()
  .addTo(controller);

var mtween = new TweenMax.to(".image-m", 3, {
  y: 500,
});

var containerScene = new ScrollMagic.Scene({
  offset: 50,
  duration: 800,
})
  .setTween(mtween)
  .addIndicators()
  .addTo(controller);

// burger

const burger = document.querySelector('.burger');
const navi = document.querySelector('.navi')


burger.addEventListener('click', () => {
    navi.classList.toggle('navi-activ');
});

navi.addEventListener('click', () => {
    navi.classList.toggle('navi-activ');
});

// carousel

const track = document.querySelector(".carousel-slide");
const slides = Array.from(track.children);
const nextbutton = document.querySelector(".carousel-right");
const prevbutton = document.querySelector(".carousel-left");

const slideswidth = slides[0].getBoundingClientRect().width;

const setslideposition = (slide, index) => {
  slide.style.left = slideswidth * index + "px" ;
};
slides.forEach(setslideposition);


nextbutton.addEventListener("click", (e) => {
  const currentslide = track.querySelector(".current-slide");
  const nextslide = currentslide.nextElementSibling;
  const amountomove = nextslide.style.left;

  track.style.transform = 'translateX(-' + amountomove + ')';
  currentslide.classList.remove('current-slide');
  nextslide.classList.add('current-slide');
})

prevbutton.addEventListener("click", (e) => {
  const currentslide = track.querySelector(".current-slide");
  const prevslide = currentslide.previousElementSibling;
  const amountomove = prevslide.style.left;

  track.style.transform = 'translateX(-' + amountomove + ')';
  currentslide.classList.remove('current-slide');
  prevslide.classList.add('current-slide');
})


