// Implement slide system on PCs
// TODO: implement this on mobile

let currentSlide;
let maxSlides;

// Accepts 1 is moving to next slide and -1 if moving to previous one
function changeSlide(change) {
  currentSlide = Math.min(maxSlides, Math.max(0, currentSlide + change));
  window.scrollTo(0, window.innerHeight * currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
  maxSlides = document.querySelectorAll('.slide').length - 1;
  currentSlide = Math.round(window.scrollY / window.innerHeight);
  window.scrollTo(0, window.innerHeight * currentSlide);
})


// Disabling normal scrolling in PCs and implement user / slidesystem interactions
// Code based on https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36

function preventDefaultForWheel(e) {
  wheelScroll(e);
  preventDefault(e);
}
function wheelScroll (e) {
    // Know if already finished scrolling
    // Small imprecisions arise from scrollTo
    if (Math.abs(window.scrollY - window.innerHeight * currentSlide) > 200) return;
    let change = e.deltaY > 0? 1 : -1;
    changeSlide(change)
    //preventDefault(e);
}

var keys = {37: 2, 38: -1, 39: 2, 40: 1, 32: 1, 33: -1, 34: 1, 35: 1, 36: -1};
function keyScroll(e) {
  if (keys[e.keyCode] != undefined) {
    if (keys[e.keyCode] != 2) changeSlide (keys[e.keyCode]);
    preventDefault(e);
    return false;
  }
}
function preventDefault(e) {
  e.preventDefault();
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
window.addEventListener(wheelEvent, preventDefaultForWheel, wheelOpt); // modern desktop
window.addEventListener('keydown', keyScroll, false);