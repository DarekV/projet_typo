var controller = new ScrollMagic.Controller();


var btween = new TweenMax.to('.image-b', 2, {
  y:-100
});

var containerScene = new ScrollMagic.Scene({
  offset:500,
  duration:400
})
.setTween(btween)
.addIndicators()
.addTo(controller);

var otween = new TweenMax.to('.image-o', 1.5, {
  y:300
});

var containerScene = new ScrollMagic.Scene({
  offset:180,
  duration:800
})
.setTween(otween)
.addIndicators()
.addTo(controller);

var mtween = new TweenMax.to('.image-m', 3, {
  y:500
});

var containerScene = new ScrollMagic.Scene({
  offset:50,
  duration:800
})
.setTween(mtween)
.addIndicators()
.addTo(controller);