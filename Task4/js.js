window.onmousewheel = function () {
  console.log('wheel');
}
window.onscroll = function(event) {
  event = event || window.event;
  console.log('event');
}
