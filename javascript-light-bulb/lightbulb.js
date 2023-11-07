let click = 0;

const $button = document.querySelector('.center');
const $contain = document.querySelector('.container');

function lightbulb() {
  click++;
  if (click % 2 === 0) {
    $button.className = 'center light';
    $contain.className = 'container bulbOn';
  } else if (click % 2 === 1) {
    $button.className = 'center dark';
    $contain.className = 'container bulbOff';
  }
}

$button.addEventListener('click', lightbulb);
