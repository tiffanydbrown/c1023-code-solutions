let clickNumber = 0;

const $btn = document.querySelector('.hot-button');
const $ccount = document.querySelector('.click-count');

function clicker(event) {
  clickNumber++;
  $ccount.textContent = 'Clicks: ' + clickNumber;
  if (clickNumber < 4) {
    $btn.className = 'hot-button cold';
  } else if (clickNumber < 7 && clickNumber >= 4) {
    $btn.className = 'hot-button cool';
  } else if ((clickNumber < 10) & (clickNumber >= 7)) {
    $btn.className = 'hot-button tepid';
  } else if (clickNumber < 13 && clickNumber >= 10) {
    $btn.className = 'hot-button warm';
  } else if (clickNumber < 16 && clickNumber >= 13) {
    $btn.className = 'hot-button hot';
  } else {
    $btn.className = 'hot-button nuclear';
  }
}
$btn.addEventListener('click', clicker);
document
  .getElementsByClassName('.click-count')
  .addEventListener('click', clicker);

// const clickcount = document.getElementsByClassName(".click-count");
// $ccount.value = clickcount.textContent;
