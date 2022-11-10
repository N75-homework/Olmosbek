var $body = document.getElementsByTagName('body')[0];
var $btn = document.querySelector('#btn');

$body.style.display = 'flex';
$body.style.justifyContent = 'center';
$body.style.alignItems = 'center';
$body.style.height = '100vh';

$btn.style.padding = '1rem 5rem';
$btn.style.border = '2px solid grey';

function randomNumber() {

      var number = Math.floor(Math.random() * 256)
      return number
}


$btn.addEventListener('click', function () {
      var r = randomNumber()
      var g = randomNumber()
      var b = randomNumber()

      $body.style.backgroundColor = `rgb(${r},${g},${b})`
      $btn.textContent = `rgb(${r},${g},${b})`
})