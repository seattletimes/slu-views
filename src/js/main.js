// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

var first = document.querySelector(".first");
var container = document.querySelector(".image-slider");

var resizeable = function(e) {
  e.preventDefault();
  var bounds = e.target.getBoundingClientRect();
  var x;
  if (e.touches) { 
    x = e.touches[0].pageX - bounds.left;
  } else { 
    x = e.pageX - bounds.left;
  }
  // var x = e.clientX ? e.clientX - bounds.left : e.layerX - bounds.left;
  first.style.width = x + "px";
};

first.addEventListener("mousedown", function(e) {
  e.preventDefault();
  container.addEventListener("mousemove", resizeable);
});
first.addEventListener("touchstart", function(e) {
  e.preventDefault();
  container.addEventListener("touchmove", resizeable);
});
container.addEventListener("mouseup", function() {
  container.removeEventListener("mousemove", resizeable);
});
container.addEventListener("touchend", function() {
  container.removeEventListener("touchmove", resizeable);
});

var resize = function() {
  var width = document.querySelector(".image-slider").getBoundingClientRect().width;
  document.querySelector(".image-slider .first img").style.maxWidth = width + "px";
};

resize();
window.addEventListener('resize', resize);

