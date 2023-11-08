let clickMod = 0;
let clickNo = 0;

const $button = document.querySelector('.modal');
const $btn = document.querySelector('.no');
const $cent = document.querySelector('.center');

function show() {
  clickMod++;
  if (clickMod % 2 === 1) {
    $cent.style.display = 'block';
  } else {
    $cent.style.display = 'none';
  }
}

function hide() {
  clickNo++;
  if (clickNo % 2 === 0) {
    $cent.style.display = 'none';
  }
}

$button.addEventListener('click', show);
$btn.addEventListener('click', hide);
