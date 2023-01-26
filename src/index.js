var start = null;
var element = document.getElementById("SomeElementYouWantToAnimate");

function step(timestamp) {
  // console.log(timestamp);
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.transform =
    "translateX(" + Math.min(progress / 10, 200) + "px)";
  if (progress < 2000) {
    id = window.requestAnimationFrame(step);
    console.log(1, id);
  } else {
    window.requestAnimationFrame(stepBack);
  }
}

function stepBack(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.transform = "translateY(" + Math.max(progress / 20, 20) + "px)";
  if (progress < 4000) {
    id = window.requestAnimationFrame(stepBack);
    console.log(2, id);
  }
}

let id = window.requestAnimationFrame(step);
// id = window.requestAnimationFrame(stepBack);

console.log(id);
