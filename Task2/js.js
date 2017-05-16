var y = document.querySelector('img');
document.addEventListener('mousemove', f1);
function f1() {
  console.log(event.offsetX);
  console.log(y.width);
  var x = event.offsetX/y.width;
  console.log(x);
  if (x<=0.33) {
    y.src = 'images/1ru.png';
    y.onclick = function() {
      location.href = 'http://www.yandex.ru/';
    }
  }
  if (x>0.33 && x<=0.66) {
    y.src = 'images/2ru.png';
    y.onclick = function() {
      location.href = 'http://www.yandex.ru/';
    }
  }
  if (x>0.66 && x<=1) {
    y.src = 'images/3ru.png';
    y.onclick = function() {
      location.href = 'http://www.yandex.ru/';
    }
  }
  if (x>1) {
    y.src = 'images/0ru.png';
  }
}
